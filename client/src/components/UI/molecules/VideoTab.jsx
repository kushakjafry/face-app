import React from "react";
import Tab from "../atoms/Tabs/Tab";
import Tabs from "../atoms/Tabs/Tabs";

function VideoTab(props) {
  return (
    <Tabs style={{ maxWidth: "720px" }}>
      <Tab
        active={props.activeTab === 1}
        onClick={() => {
          props.setActiveTab(1);
        }}
      >
        Face Detector
      </Tab>
      <Tab
        active={props.activeTab === 2}
        onClick={() => {
          props.setActiveTab(2);
        }}
      >
        Emotion Detector
      </Tab>
      <Tab
        active={props.activeTab === 3}
        onClick={() => {
          props.setActiveTab(3);
        }}
      >
        Face Landmark
      </Tab>
    </Tabs>
  );
}

export default VideoTab;
