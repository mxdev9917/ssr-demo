import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaGooglePlusG } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center h-screen w-full relative bg-gray-900">
      <img
        className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover"
        src="public/mountain-3.jpg"
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

        <div className="flex flex-col items-center justify-center text-white mt-10 p-4">
          <img
            className="w-24 md:w-28 lg:w-32 rounded-full mb-4 border-4 border-white"
            src="public/me.jpg"
            alt="Profile"
          />
          <p className="text-2xl font-bold text-center">EH MIXAI</p>
          <p className="font-semibold text-center px-4 md:px-0">
            Web Developer, Graphic Designer, Photographer
          </p>

          <div className="flex gap-3 mt-4 flex-wrap justify-center">
            <button className="bg-green-800 py-2 px-5 rounded-md text-sm md:text-base">Hire Me</button>
            <button className="bg-green-800 py-2 px-5 rounded-md text-sm md:text-base">Download CV</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col w-[70%] h-96 bg-white mt-8 shadow-md rounded-sm">
        <div className="flex flex-col w-full h-full bg-amber-300">
          dsd
        </div>
        <div className="w-full h-full bg-amber-900">
          dsds
        </div>

      </div>



      <div className="flex gap-3 justify-center absolute bottom-8 w-full">
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full">
          <GrFacebookOption className="text-xl md:text-2xl text-white" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full">
          <FaXTwitter className="text-xl md:text-2xl text-white" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full">
          <FaGithub className="text-xl md:text-2xl text-white" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full">
          <FaGooglePlusG className="text-xl md:text-2xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default App;
