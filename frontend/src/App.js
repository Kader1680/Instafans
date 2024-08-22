import{ React, useEffect, useState, useRef} from "react"

import './App.css';
import axios from 'axios'
import Navbar from "./components/navbar";
import Post from "./components/post";
import Target from "./components/target";
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';


import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import VideoPlayer from "./components/vedioPlayer";
import Home from "./pages/home";
import CreateFile from "./pages/createFile";
import UploadImage from "./components/uploadImage";
import Login from "./pages/auth/login";
import SignIn from "./pages/auth/signIn";
function App() {
  
  const [datas, setdata] = useState([]);

   
  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
          const res = await axios.get("http://127.0.0.1:8000/api/all");
           setdata(res.data.data)
      } catch (error) {
          console.error("Error fetching data:", error);
      }
      }

  // Call the function
  fetchData();

    
  }, []);

  const getVideoUrl = (path) => {
    return `http://127.0.0.1:8000/upload/${path}`;
    };




 



  return (


    <BrowserRouter>
    <div class="app md:flex   ">
       
        <Navbar />
         
        <Routes>
        
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post  />} />
                <Route path="/vedios" element={<VideoPlayer  />} />
                <Route path="/upload" element={<CreateFile  />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/signin" element={<SignIn  />} />
          
              
            
        </Routes>
    </div>


    <div>











 <h1 className=" mt-5 mb-5  text-dark-500  text-center">DFDFDFD</h1>

        <div class=" ms-5 grid grid-cols-2 gap-3" >
                      {datas.map(e => {

                        return (
                          

                          
                          <div > 

                          <VideoPlayer src={getVideoUrl(e.path)} />
                        {/* <div  style={{ width:"35rem" }} class="  bg-white p-3">
                        <video 
                      src={} type="video/mp4" 
                    style={{ width:"35rem", height:"25rem" }}
                    controls
                    autoPlay
                      
                    playsInline
                  />
                        <ul class="mt-3 flex flex-wrap">
                            <li class="mr-auto">
                            <a href="#" class="flex text-gray-400 hover:text-gray-600">
                                <svg class="mr-0.5" style={{ width:"24px",height:"24px" }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
                                </svg>
                                1
                            </a>
                            </li>
                            <li class="mr-2">
                            <a href="#" class="flex text-gray-400 hover:text-gray-600">
                                <svg class="mr-0.5"  style={{ width:"24px",height:"24px" }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                                </svg>
                                24
                            </a>
                            </li>
                            <li class="mr-2">
                            <a href="#" class="flex text-gray-400 hover:text-gray-600">
                                <svg class="mr-0.5"  style={{ width:"24px",height:"24px" }} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                                </svg>
                                3
                            </a>
                            </li>
                            <li>
                            <a href="#" class="flex text-gray-400 hover:text-gray-600">
                                <svg class="mr-0.5"  style={{ width:"24px",height:"24px" }}  viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                </svg>
                                3
                            </a>
                            </li>
                        </ul>
                        </div> */}
                        

                        </div>
                        )
                          
                      })}
        </div>
</div>
</BrowserRouter>
   
    
  );
}

export default App;
