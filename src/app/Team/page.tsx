"use client"
import React, { useEffect, useState } from "react";
import Person, { IPerson } from "../components/person";
import axios from "axios";

function Team() {
  const [data, setData] = useState<IPerson[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/person")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="flex flex-col mx-auto w-[1170px] h-full py-44">
      <div className="flex flex-col justify-center items-end my-10">
        <h2 className="text-4xl font-bold">سهامداران</h2>
        <hr className="w-20 border-t-[2px] border-[#F9A220] my-5" />
      </div>
      <div className="grid grid-cols-3 justify-center items-center">
        {data.map((item, index) => (
          <Person
            img={item.img}
            name={item.name}
            text={item.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
