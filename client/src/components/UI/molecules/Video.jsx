import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

function Video({ activeTab }) {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [timer, setTimer] = useState();
  //   const [emotion, setEmotion] = useState();
  const startVideo = () => {
    console.log("video started");
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        setStream(stream);
      },
      (err) => console.log(err)
    );
  };

  const stopVideo = () => {
    console.log("stop video");
    stream.getTracks()[0].stop();
    setStream(null);
  };

  const toggleVideo = () => {
    if (!stream) {
      startVideo();
    } else {
      stopVideo();
    }
  };

  useEffect(() => {
    if (timer) {
      clearInterval(timer);
      setTimer(undefined);
      const context = canvasRef.current.getContext("2d");
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      handleVideoPlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (stream) {
        video.srcObject = stream;
        video.play();
      } else {
        clearInterval(timer);
        setTimer(undefined);
        video.pause();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stream]);

  const handleVideoPlay = () => {
    const context = canvasRef.current.getContext("2d");
    let timer = setInterval(async () => {
      const detections = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceExpressions();
      if (detections) {
        const resized = faceapi.resizeResults(detections, {
          width: canvasRef.current.width,
          height: canvasRef.current.height,
        });
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        if (activeTab === 1) {
          faceapi.draw.drawDetections(canvasRef.current, resized);
        } else if (activeTab === 2) {
          faceapi.draw.drawDetections(canvasRef.current, resized);
          faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
        } else {
          faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
        }
      }
    }, 200);
    setTimer(timer);
  };

  return (
    <>
      <video
        ref={videoRef}
        className="object-cover object-center w-full top-0 z-10"
        style={{ maxWidth: "720px", maxHeight: "560px" }}
        width="720"
        height="560"
        playsInline
        onPlay={handleVideoPlay}
      ></video>
      <canvas
        ref={canvasRef}
        className="absolute top-0 w-full h-full cursor-pointer"
        width="720"
        height="560"
        onClick={toggleVideo}
      ></canvas>
      <div
        className={`absolute w-full h-full  top-0 bg-gray-700 flex justify-center items-center ${
          stream ? "opacity-0 hover:opacity-70" : "opacity-100"
        }`}
        style={{
          maxWidth: "720px",
          maxHeight: "560px",
        }}
      >
        <button
          className="w-24 h-24 rounded-full bg-blue-500 focus:outline-none z-50"
          onClick={toggleVideo}
        >
          {!stream && <FontAwesomeIcon icon={faPlay} className="text-white" />}
          {stream && <FontAwesomeIcon icon={faPause} className="text-white" />}
        </button>
      </div>
    </>
  );
}

export default Video;
