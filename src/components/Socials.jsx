import React from "react";
import slack from "../assets/slack.png";
import github from "../assets/Icon.png";

const Socials = () => {
  return (
    <div className="flex gap-9 justify-center my-12">
      <a href="/">
        <img src={slack} alt="" />
      </a>
      <a href="https://github.com/Tolumaestro/hng_stage_1">
        <img src={github} alt="" />
      </a>
    </div>
  );
};

export default Socials;
