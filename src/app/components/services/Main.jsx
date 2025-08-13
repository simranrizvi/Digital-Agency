import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full mb-40">
      <div className="grid grid-cols-2 mx-auto mt-20  max-w-[90%]">
        <div className="flex flex-col">
          <p className=" py-1  border-black border-2 rounded-full text-blue-400">
            Complete Digital Solutions
          </p>

          <h1 className="font-bold text-[50px] mt-[40px]">
            Transform Your <br />{" "}
            <span className="text-blue-500">Digital Vision</span>
          </h1>
          <p className=" mt-[27px] font-normal text-[18px] leading-7">
            
            From cutting-edge web applications to scalable mobile solutions,<br/> we
            craft digital experiences that drive growth and inspire users.
          </p>
<div className="flex flex-row gap-3 mt-[28px]">
      
      {/* First Button */}
      <Link href="/start-project">
        <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition">
          Start your Project
        </button>
      </Link>

      {/* Second Button */}
      <Link href="/contact">
        <button className=" border-2 border-gray-600 text-black rounded-md py-2 px-4 hover:bg-blue-500 transition">
          View Our Work
        </button>
      </Link>

    </div>
        </div>

        <div>2</div>
      </div>
    </div>
  );
};

export default Main;
