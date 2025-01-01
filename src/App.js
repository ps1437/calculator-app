import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus, FaTimes, FaDivide, FaEquals } from "react-icons/fa";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import Button from "./Button";
import shipImage1 from "./assets/one-piece_3.png";
import shipImage2 from "./assets/one-piece.png";
import shipImage4 from "./assets/one-piece_5.png";
import shipImage3 from "./assets/one-piece_2.png";
import Brook from "./assets/brook.png";
import Zoro from "./assets/zoro.png";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      let calculationResult = parseFloat(eval(input)).toFixed(3);
      if (calculationResult.toString().length > 20) {
        setResult("Unsupported Result is more then 20 digits"); 
      } else {
        setResult(calculationResult);
      }
    } catch(e) {
      alert(e)
      setResult("Error");
    }
  };

  const buttons = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: <FaPlus className="mx-auto my-auto" />, value: "+" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: <FaMinus className="mx-auto my-auto" />, value: "-" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: <FaTimes className="mx-auto my-auto" />, value: "*" },
    { label: "0", value: "0" },
    { label: <FaDivide className="mx-auto my-auto" />, value: "/" },
    { label: "C", onClick: handleClear },
    { label: <FaEquals className="mx-auto my-auto" />, onClick: handleCalculate },
  ];

  return (
    <div
      className="flex justify-center items-center h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/red-land-one-piece-desktop-lymn0p5sp1u7rf41.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      <motion.div className="absolute -top-20 -left-5 flex items-center p-8"
      
      initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        
        >
        <img  
          src="https://www.pngall.com/wp-content/uploads/13/One-Piece-Logo-PNG-Photo.png" 
          alt="One Piece Logo" 
          className="w-[190px] h-full"
          
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{         
          backgroundImage: "linear-gradient(to bottom, red, black)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="calculator w-full m-2 md:w-1/3 bg-yellow-600 rounded-lg shadow-lg
        
        p-5 relative"
      >
        <div className="display mb-5 text-center">
        <motion.img
          src={Zoro}
          alt="Zoro"
          className="absolute -top-16 -right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{ width: "100px", height: "auto" }}
        />
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 text-xl rounded border border-gray-200 text-right mb-2 
            bg-yellow-100"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`result text-xl min-h-8 w-auto ${result && 'border-gray-300 bg-yellow-200 rounded'}`}
          >
            {result}
          </motion.div>
        </div>
        <div className="buttons grid grid-cols-4 gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick ? button.onClick : () => handleClick(button.value)}
              label={button.label}
              className="flex items-center justify-center bg-red-700 text-white rounded p-2 hover:bg-red-800"
            />
          ))}
        </div>
      
      </motion.div>
      <motion.img
        src={shipImage1}
        alt="Pirate Ship"
        className="absolute bottom-0"
        initial={{ x: "100vw" }}
        animate={{ x: ["100vw", "-100vw"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 0 }}
        style={{ width: "100px", height: "auto" }}
      />
      <motion.img
        src={shipImage2}
        alt="Pirate Ship"
        className="absolute bottom-0"
        initial={{ x: "100vw" }}
        animate={{ x: ["100vw", "-100vw"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 1 }}
        style={{ width: "100px", height: "auto" }}
      />
      <motion.img
        src={shipImage3}
        alt="Pirate Ship"
        className="absolute bottom-0"
        initial={{ x: "100vw" }}
        animate={{ x: ["100vw", "-100vw"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        style={{ width: "150px", height: "auto" }}
      />
      <motion.img
        src={shipImage4}
        alt="Pirate Ship"
        className="absolute bottom-0"
        initial={{ x: "100vw" }}
        animate={{ x: ["100vw", "-100vw"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 3 }}
        style={{ width: "150px", height: "auto" }}
      />
      <motion.img
        src={Brook}
        alt="Brook"
        className="absolute left-0 bottom-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
}

export default App;
