import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bg, setbg] = useState("white");
  const colorRed = () => {
    setbg("red");
  };
  const colorGreen = () => {
    setbg("green");
  };
  const colorBlue = () => {
    setbg("blue");
  };
  const colorOlive = () => {
    setbg("#808000");
  };
  const colorGrey = () => {
    setbg("grey");
  };
  const colorYellow = () => {
    setbg("yellow");
  };
  const colorPink = () => {
    setbg("pink");
  };
  const colorPurple = () => {
    setbg("purple");
  };
  const colorLav = () => {
    setbg("#E6E6FA");
  };
  const colorBlack = () => {
    setbg("black");
  };
  const colorWhite = () => {
    setbg("white");
  };
  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: bg }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
            <button
              type="button"
              className="rounded-full border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-white hover:bg-red-600 transition-colors"
              onClick={colorRed}
            >
              RED
            </button>
            <button
              type="button"
              className="rounded-full border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 hover:text-white hover:bg-green-600 transition-colors"
              onClick={colorGreen}
            >
              GREEN
            </button>
            <button
              type="button"
              className="rounded-full border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600   hover:text-white hover:bg-blue-600 transition-colors"
              onClick={colorBlue}
            >
              BLUE
            </button>
            <button
              type="button"
              className="rounded-full border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 hover:text-white hover:bg-yellow-600 transition-colors"
              onClick={colorOlive}
            >
              OLIVE
            </button>
            <button
              type="button"
              className="rounded-full border border-gray-600 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 hover:text-white hover:bg-gray-600 transition-colors"
              onClick={colorGrey}
            >
              GREY
            </button>
            <button
              type="button"
              className="rounded-full border border-yellow-400 px-3 py-2 text-sm font-semibold text-yellow-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 hover:text-white hover:bg-yellow-400 transition-colors"
              onClick={colorYellow}
            >
              YELLOW
            </button>
            <button
              type="button"
              className="rounded-full border border-pink-300 px-3 py-2 text-sm font-semibold text-pink-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-300 hover:text-white hover:bg-pink-300 transition-colors"
              onClick={colorPink}
            >
              PINK
            </button>
            <button
              type="button"
              className="rounded-full border border-purple-700 px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 hover:text-white hover:bg-purple-700 transition-colors"
              onClick={colorPurple}
            >
              PURPLE
            </button>
            <button
              type="button"
              className="rounded-full border border-gray-400 px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 hover:text-black hover:bg-gray-400 transition-colors"
              onClick={colorLav}
            >
              LAVENDER
            </button>
            <button
              type="button"
              className="rounded-full border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-white hover:bg-black transition-colors"
              onClick={colorBlack}
            >
              BLACK
            </button>
            <button
              type="button"
              className="rounded-full border  px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:text-black hover:bg-white transition-colors"
              onClick={colorWhite}
            >
              WHITE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
