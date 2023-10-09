import React from "react";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <img
        src={"/avatar.png"}
        width={737}
        height={678}
        alt="avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
