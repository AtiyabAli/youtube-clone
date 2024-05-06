import React from "react";
import Button from "./Button";

const list = [
  "Javascripts",
  "Pakistani Drama",
  "Music",
  "Televesion show",
  "IPL",
  "Study IQ",
  "Cricket",
  "News",
  "National News",
  "International News",
  "Indian cricket"
];

//AIzaSyBaQOhqGqLfUGUW6lFeZaeje-gB90F8xQ8//

//AIzaSyDmMPbAN7EweC065M2_YjWQovwwPqfPhM0//

const ButtonList = () => {
  return (
    <div className=" flex">
      {list.map((item) => (
        <Button key={Math.random()} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
