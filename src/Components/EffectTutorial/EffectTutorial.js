import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState([]);

  //more indepth in next tutorials for calling backend apis and for cleaning up components to free memory
  //second parameter whenever the value changes it runs the hook
  //we can write return a clean up function which only runs when the component is unmounted
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  return (
    <div>
      {data?.map((r) => {
        return <h1 key={r.id}>user: {r.name}</h1>;
      })}
    </div>
  );
}

export default EffectTutorial;
