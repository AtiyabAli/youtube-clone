import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";





const Head = () => {
  
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg">
      <div className=" flex col-span-1">
        <img
          className=" h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://tse4.mm.bing.net/th?id=OIP.LZ8bpRJ-svj1Cved1W0rgQHaHa&pid=Api&P=0&h=220"
          alt="menu"
        />
        <a href="/">
        <img
          className=" h-8 mx-2"
          src="http://pngimg.com/uploads/youtube/youtube_PNG16.png"
          alt="YouTube Logo"
        />
        </a> 
      </div>

      <div className=" col-span-10 px-2">
        <input
          className=" w-1/2 border border-gray-400 text-center p-2 rounded-s-full"
          type="text"
        />
        <button className=" border border-gray-100 p-2 rounded-e-full bg-gray-400">
          Search
        </button>
      </div>

      <div className=" col-span-1">
        <img
          className=" h-8"
          src="https://tse1.mm.bing.net/th?id=OIP.f3DM2upCo-p_NPRwBAwbKQHaHa&pid=Api&P=0&h=220"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
