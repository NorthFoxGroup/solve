import React, { useState } from "react";
import ReactPrismjs from '@uiw/react-prismjs';
import 'prismjs/components/prism-java';


const FetchAPI = () => {
  const [api, setApi] = useState("");

  return (
    <div className="py-10 w-full">
      <input
        type="text"
        placeholder="Enter Your API Link Here..."
        className="w-full"
        value={api}
        onChange={(e) => setApi(e.target.value)}
      />
      {api !== "" && (
        <ReactPrismjs className="my-5" language="java" source={`const [apiData, setApiData] = useState([])

const getData = async () => {
    await fetch("${api}").then((res) => res.json()).then((res) => setApiData(res))
}
          
useLayoutEffect(() => {
  getData()
}, []) `} />
        // <div className="border p-5 my-5">
        
        // </div>
      )}
    </div>
  );
};

export default FetchAPI;
