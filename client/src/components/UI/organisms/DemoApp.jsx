import React, { useEffect, useState } from "react";
import FeatureHeading from "../atoms/Headings/FeatureHeading";
import FeatureText from "../atoms/Text/FeatureText";
import * as faceapi from "face-api.js";
import VideoTab from "../molecules/VideoTab";
import Loader from "../atoms/Loader/Loader";
import Video from "../molecules/Video";

function DemoApp() {
  const [loadingModels, setLoadingModels] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  const loadAllModels = async () => {
    setLoadingModels(true);
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {
      setLoadingModels(false);
    });
  };

  useEffect(() => {
    loadAllModels();
  }, []);

  return (
    <section className="py-20 mt-20" id="demo">
      <FeatureHeading>AI in action</FeatureHeading>
      <FeatureText>
        Give the permission to camera for using the AI feature
      </FeatureText>

      <div className="my-20 container p-0" style={{ maxWidth: "720px" }}>
        <VideoTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <div
          className="overflow-hidden border-solid rounded-md rounded-t-none relative"
          style={{
            maxHeight: "560px",
            maxWidth: "720px",
          }}
        >
          {!loadingModels && <Video activeTab={activeTab} />}
          {loadingModels && (
            <div
              className="bg-gray-700 flex justify-center items-center w-full h-full"
              style={{ height: "360px" }}
            >
              <div>
                <Loader />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DemoApp;
