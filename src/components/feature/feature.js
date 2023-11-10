import React from "react";
import FeatureTab from "../featureTab/FeatureTab";
import "./feature.css";
import gpt from "../../assets/images/gpt.png";
import dalle from "../../assets/images/dalle.png";
import smartai from "../../assets/images/smartAI.png";

const feature = () => {
  return (
    <div className="container">
        <h2 className="h2">Features</h2>
        <div className="featureList">
      <FeatureTab
      featureImg={gpt}
        title="Chat GPT"
        description="ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics."
        bgColor='#98EAF6'
      />

      <FeatureTab
      featureImg={dalle}
        title="Dall.e"
        description="DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity."
        bgColor='#E5CDFF'
      />
      <FeatureTab
      featureImg={smartai}
        title="Smart AI"
        description="A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds."
        bgColor='#89EBA6'
      />
    </div>
    </div>
  );
};

export default feature;
