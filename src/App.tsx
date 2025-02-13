import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [html, setHtml] = useState(0);
  const [java, setJava] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [react, setReact] = useState(0);
  const [node, setNode] = useState(0);
  const [express, setExprees] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHtml((prevHtml) => (prevHtml < 80 ? prevHtml + 1 : prevHtml));
      setJava((prevJava) => (prevJava < 60 ? prevJava + 1 : prevJava));
      setReact((prevReact) => (prevReact < 80 ? prevReact + 1 : prevReact));
      setTailwind((prevTailwind) => (prevTailwind < 60 ? prevTailwind + 1 : prevTailwind));
      setNode((prevNode) => (prevNode < 60 ? prevNode + 1 : prevNode));
      setExprees((prevExpress) => (prevExpress < 50 ? prevExpress + 1 : prevExpress));
    }, 80);

    return () => clearInterval(interval);
  }, []);





  return (
    <>

      <div className="flex flex-col items-center w-full h-screen relative bg-gray-900 overflow-x-auto">
        <img
          className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
          src="/mountain-3.jpg"
          alt="Background"
        />

        <div className="flex flex-col h-auto sm:w-[80%] w-full absolute top-0">
          <nav className="flex text-base sm:text-lg text-white mt-5 font-medium px-4 md:px-8">
            <div className="w-full cursor-pointer">Creative CV</div>
            <div className="flex justify-end gap-3 w-full">
              <p className="hover:bg-white/10 py-1 px-2 rounded-md cursor-pointer">About</p>
              <p className="hover:bg-white/10 py-1 px-2 rounded-md cursor-pointer">Skills</p>
              <p className="hover:bg-white/10 py-1 px-2 rounded-md cursor-pointer">Contact</p>
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center text-white mt-0  lg:mt-10 p-4">
            <img
              className="w-24 md:w-28 lg:w-32 rounded-full mb-4 border-4 border-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-glow"
              src="/me.jpg"
              alt="Profile"
            />

            <p className="text-2xl font-bold text-center">EH MIXAI</p>
            <p className="font-semibold text-center px-4 md:px-0">
              Web Developer, Graphic Designer, Photographer
            </p>

            <div className="flex gap-3 mt-4 flex-wrap justify-center">
              <button
                onClick={() => window.open("/cv.pdf", "_blank")}
                className="bg-green-800 py-2 px-5 rounded-md text-sm md:text-base hover:bg-green-700 transition-all duration-200"
                aria-label="Hire Me"
              >
                View CV
              </button>
              <a href="/cv.pdf" download="My_CV.pdf">
                <button
                  className="bg-green-800 py-2 px-5 rounded-md text-sm md:text-base hover:bg-green-700 transition-all duration-200"
                  aria-label="Download CV"
                >
                  Download CV
                </button>
              </a>

            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5  lg:flex-row w-[90%] lg:w-[60%] h-fit bg-white mt-24 sm:mt-10 lg:mt-8 shadow-md rounded-sm ">
          <div className="flex flex-col items-start  w-full h-full p-4">
            <p className="text-center font-semibold text-2xl mb-2">About</p>
            <span>&nbsp; &nbsp; Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</span>
            <span className="mt-3"> &nbsp; &nbsp;It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <a href="#" className="text-green-700 cursor-pointer">Learn More</a></span>
          </div>
          <div className="flex flex-col items-start w-full h-full  p-4">
            <p className="text-center font-semibold text-2xl mb-2">Basic Information</p>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="min-w-28 uppercase  font-bold">Age:</p>
                <span>30</span>
              </div>
              <div className="flex">
                <p className="min-w-28 uppercase font-bold">Email:</p>
                <span>eh.dev99117@gamil.com</span>
              </div>
              <div className="flex">
                <p className="min-w-28 uppercase font-bold">Phone:</p>
                <span>02056085825</span>
              </div>
              <div className="flex">
                <p className="min-w-28 uppercase font-bold">Address:</p>
                <span>Chommany, Saysettha, Vientiane
                  Lao PDR </span>
              </div>
              <div className="flex">
                <p className="min-w-28 uppercase font-bold">Language:</p>
                <span>Lao,Thai,English</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-2xl font-bold my-5">Professional Skills</p>
        <div className="flex flex-col gap-5  lg:flex-row w-[90%] lg:w-[60%] h-fit bg-white  shadow-md rounded-sm mb-20 sm:mb-28">
          <div className="flex flex-col gap-3.5 items-start  w-full h-full p-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between text-green-700">
                <p className="uppercase text-base">html</p>
                <p className="uppercase text-base">{html}%</p>
              </div>
              <div className="w-full relative">
                <div className="h-2 absolute bg-green-700 transition-all duration-500" style={{ width: `${html}%` }} />
                <div className="w-full h-2 bg-green-300 " />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between text-green-700">
                <p className="uppercase text-base">JavaScript</p>
                <p className="uppercase text-base">{java}%</p>
              </div>
              <div className="w-full relative">
                <div className="h-2 absolute bg-green-700 transition-all duration-500" style={{ width: `${java}%` }} />
                <div className="w-full h-2 bg-green-300 " />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between text-green-700">
                <p className="uppercase text-base">Tailwind</p>
                <p className="uppercase text-base">{tailwind}%</p>
              </div>
              <div className="w-full relative">
                <div className="h-2 absolute bg-green-700 transition-all duration-500" style={{ width: `${tailwind}%` }} />
                <div className="w-full h-2 bg-green-300 " />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5 items-start  w-full h-full p-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between text-green-700">
                <p className="uppercase text-base">react + vite</p>
                <p className="uppercase text-base">{react}%</p>
              </div>
              <div className="w-full relative">
                <div className="h-2 absolute bg-green-700 transition-all duration-500" style={{ width: `${react}%` }} />
                <div className="w-full h-2 bg-green-300 " />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between text-green-700">
                <p className="uppercase text-base">node js</p>
                <p className="uppercase text-base">{node}%</p>
              </div>
              <div className="w-full relative">
                <div className="h-2 absolute bg-green-700 transition-all duration-500" style={{ width: `${node}%` }} />
                <div className="w-full h-2 bg-green-300 " />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between text-green-700">
                <p className="uppercase text-base">express js</p>
                <p className="uppercase text-base">{express}%</p>
              </div>
              <div className="w-full relative">
                <div className="h-2 absolute bg-green-700 transition-all duration-500" style={{ width: `${express}%` }} />
                <div className="w-full h-2 bg-green-300 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-center absolute bottom-8 md:bottom-10 w-full overflow-hidden">
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-gray-500 rounded-full cursor-pointer">
          <GrFacebookOption className="text-xl md:text-2xl text-white" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-gray-500 rounded-full cursor-pointer">
          <FaXTwitter className="text-xl md:text-2xl text-white" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-gray-500 rounded-full cursor-pointer">
          <FaGithub className="text-xl md:text-2xl text-white" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-gray-500 rounded-full cursor-pointer">
          <FaGooglePlusG className="text-xl md:text-2xl text-white" />
        </div>
      </div>
    </>
  );
}

export default App;
