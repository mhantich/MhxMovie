import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {

    useGetTradingDayQuery,
  useGetTradingQuery,
 
} from "@/store/MovieApi";
import { motion } from "framer-motion";

import { useState } from "react";
import Slider from "react-slick";

import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { loading } from "@/animation";


const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Tranding = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    afterChange: (current) => setActiveSlide(current),
    beforeChange: (current, next) => setActiveSlide(next), // Ensure the 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const { data: movieUpCOMING ,isLoading} = useGetTradingQuery();
  const { data: movieUpCOMINGDAY,isLoading:laod } = useGetTradingDayQuery();
  
  if (isLoading,laod ) {
    return (
      <div className="w-full bg-white fixed top-0 bottom-0 right-0 left-0 z-50 min-h-screen flex justify-center items-center">
        {" "}
        <Lottie
          style={{ width: "Irem", height: "16rem" }}
          animationData={loading}
          loop={true}
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex overflow-x-hidden  bg-black text-gray-800">
        {/* Sidebar */}

        {/* Main content */}
        <main className=" w-full  min-h-screen text-white ">
          <AnimatedSection>
            <div
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)), url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieUpCOMING?.results[activeSlide]?.backdrop_path})`,
              }}
              className="  min-h-screen h-dvh   w-full flex flex-col md:flex-row items-center "
            >
              <div className="mb-8 bg-transparent gap-7 items-center  flex-col md:flex-row flex py-20 min-h-screen container ">
             
                  <div className="py-5  h-[32rem] md:w-[32rem] overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieUpCOMING?.results[activeSlide].poster_path}`}
                      className=" object-cover rounded-lg w-full shadow-lg h-full"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
         <div className=" items-start flex md:items-center md:w-1/2 px-5">

      
             
                    <div className="flex flex-col md:flex-row items-center">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          {movieUpCOMING?.results[activeSlide].original_title}
                        </h2>
                        <p className="text-gray-100 mb-4">
                          {movieUpCOMING?.results[activeSlide].release_date} •{" "}
                          2h • Romatic
                        </p>
                        <p className="text-gray-100 mb-4  text-sm">
                          {movieUpCOMING?.results[activeSlide].overview}
                        </p>
                     
                        <p className="mb-4">
                          Rating: 8/10
                        </p>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                          Watch Now - Free
                        </button>
                      </div>
                    </div>
            
                  </div>
           
                 </div>
            </div>
          </AnimatedSection>

  
            <div className="container my-9 ">
                <h1 className="text-3xl capitalize font-bold mb-3"> trending this week</h1>
              <Slider {...settings}>
                {movieUpCOMING?.results?.map((item, index) => (
                  <div key={index} >
                    <img
                    // onClick={()=>{navigatev(`/MovieDetails/${item.id}`)}}
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.original_title}
                      style={{}}
                      className=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="container my-9 ">
                <h1 className="text-3xl capitalize font-bold mb-3">trending today</h1>
              <Slider {...settings}>
                {movieUpCOMINGDAY?.results?.map((item, index) => (
                  <div key={index} >
                    <img
                    // onClick={()=>{navigatev(`/MovieDetails/${item.id}`)}}
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.original_title}
                      style={{}}
                      className=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
       





          <button className="w-full  text-gray-800 py-2 rounded mt-8">
            Load more
          </button>
        </main>
      </div>
   
    </>
  );
};

export default Tranding;