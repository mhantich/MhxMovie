import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  useGetMovieRoadQuery,
  useGetMovieUpComingQuery,
} from "@/store/MovieApi";
import { motion } from "framer-motion";

import { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import { useNavigate } from "react-router-dom";


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

const HomeSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(activeSlide)
      const settings = {
    dots: false,
    infinite: true,
    speed:500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 18500,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
    beforeChange: (current, next) => setActiveSlide(next), // Ensure the state is updated before the slide change
  };
  const { data } = useSelector((state) => state.NewAuth);

  const { data: movieSections } = useGetMovieRoadQuery();
  const { data: movieUpCOMING } = useGetMovieUpComingQuery();
const navigatev  =useNavigate()
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
              className=" min-h-screen w-full flex flex-col md:flex-row items-center "
            >
              <div className="mb-8 bg-transparent gap-7   flex-col md:flex-row flex py-20 min-h-screen container ">
             
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

  
            <div className="container ">
              <Slider {...settings}>
                {movieUpCOMING?.results?.map((item, index) => (
                  <div key={index} >
                    <img
                    onClick={()=>{navigatev(`/MovieDetails/${item.id}`)}}
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.original_title}
                      style={{}}
                      className=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
       

          <AnimatedSection>



            <div className="container ">
              <Slider {...settings}>
                {movieSections?.results?.map((item, index) => (
                  <div key={index}>
                    <img
                                        onClick={()=>{navigatev(`/MovieDetails/${item.id}`)}}

                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.original_title}
                      style={{}}
                      className=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </AnimatedSection>

          <AnimatedSection>

          <div className="container ">
            <Slider {...settings}>
              {data?.results?.map((item, index) => (
                <div key={index}>
                  <img
                                      onClick={()=>{navigatev(`/MovieDetails/${item.id}`)}}

                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.original_title}
                    style={{}}
                  />
                </div>
              ))}
            </Slider>
          </div>

          </AnimatedSection>

          <button className="w-full  text-gray-800 py-2 rounded mt-8">
            Load more
          </button>
        </main>
      </div>
   
    </>
  );
};

export default HomeSection;
