import React from "react";
import profileImg from "../assets/profile__img.png";

const Profile = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <img id="profile__img" className="rounded-full" src={profileImg} alt="" />
      <h1 id="twitter" className="text-xl font-bold">
        tolu_soetan
      </h1>
      <h1 id="slack" className="hidden">
        Tolumeastro
      </h1>
    </div>
  );
};

export default Profile;
