import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const LocalAPI = () => {
  const [keyList, setKeyList] = useState([]);

  const [newKey, setNewKey] = useState("");

  const handleAddKey = () => {
    setKeyList((prev) => [...prev, newKey]);
    setNewKey("");
    if (keyList.length !== 1) {
      setMyCount(1);
    }
  };

  const handleRemove = (item) => {
    setKeyList(keyList.filter((data) => data !== item));
  };

  const [myCount, setMyCount] = useState(0);

  return (
    <>
      <div className="w-[80%] flex flex-col justify-center items-center my-10">
        <p className="text-lg">Enter Your Key :</p>
        <div className="flex gap-3 items-center w-[50%]">
          <input
            type="text"
            className="my-3 w-full"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
          />
          <button
            className="w-fit border border-orange-400 bg-orange-400 text-white p-2 px-10 rounded-md hover:bg-transparent hover:text-black"
            onClick={() => handleAddKey()}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {keyList.map((item, index) => (
            <div
              className="flex justify-between items-center gap-5 border border-orange-400 bg-orange-400 text-white p-2 rounded-md"
              key={index}
            >
              {item}
              <button
                className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center"
                onClick={() => handleRemove(item)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>

        <div className="my-10 w-full">
          <p className="text-lg font-medium text-center mb-5">Add Your Data</p>

          {[...new Array(myCount)].map((item, index) => (
            <div className="flex gap-5 w-full" key={index}>
              <div className="my-5 w-full flex flex-col gap-3 border border-black p-5 rounded-md">
                {keyList.map((item, index) => (
                  <div className="grid grid-cols-3 gap-5" key={index}>
                    <p>{item}</p>
                    <input type="text" className="col-span-2" />
                  </div>
                ))}
              </div>
              <button
                className="flex justify-between items-center gap-2 bg-red-500 text-white p-2 rounded-md h-fit"
                onClick={() => setMyCount(myCount - 1)}
              >
                <FaTimes /> Remove
              </button>
              {index == myCount - 1 && (
                <button
                  className="flex justify-between items-center gap-2 bg-green-600 text-white p-2 rounded-md h-fit"
                  onClick={() => setMyCount(myCount + 1)}
                >
                  <FaPlus /> Add
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocalAPI;
