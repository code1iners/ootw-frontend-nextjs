"use client";

import Image from "next/image";
import React from "react";

const CurrentTemperature = () => {
  return (
    <article className="home-padding grid grid-cols-3">
      <section className="col-start-1 col-end-2 flex justify-center items-center">
        <Image
          src="/icons/weather/sunny.png"
          width={100}
          height={100}
          alt="Sunny icon"
        />
      </section>
      <section className="col-start-2 col-end-4 flex flex-col items-center gap-5">
        <div className="min-w-[100px] flex flex-col tracking-wider">
          <h3 className="text-2xl font-light">오늘은</h3>
          <p className="pl-2 font-light">
            <span className="text-3xl font-medium">99</span> &deg;C
          </p>
        </div>
        <div className="min-w-[100px] flex flex-col tracking-wider">
          <h3 className="text-2xl font-light">바람은</h3>
          <p className="pl-2">
            <span className="text-3xl font-medium">99</span>
          </p>
        </div>
      </section>
    </article>
  );
};

export default CurrentTemperature;
