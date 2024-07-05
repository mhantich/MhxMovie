import { Indexerror, loading } from "@/animation";
import { useGetMovieQuery } from "@/store/MovieApi";
import Lottie from "lottie-react";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

function Movie() {
  const { loading: isloading, data, error } = useGetMovieQuery();

  const [activeSlide, setActiveSlide] = useState(0);

  console.log(activeSlide);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: false,
    autoplaySpeed: 8500,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
    beforeChange: (current, next) => setActiveSlide(next), // Ensure the state is updated before the slide change
  };

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        {" "}
        <Lottie
          style={{ width: "Irem", height: "16rem" }}
          animationData={Indexerror}
          loop={false}
        />
      </div>
    );
  }

  if (isloading) {
    return (
      <div>
        {isloading && (
          <div className="w-full  min-h-screen flex justify-center items-center">
            {" "}
            <Lottie
              style={{ width: "16rem", height: "16rem" }}
              animationData={loading}
              loop={true}
            />
          </div>
        )}
      </div>
    );
  }
  return (
    <>
        <NavBar  />
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.results[activeSlide]?.poster_path})`,
          backgroundSize: "cover",
        }}
        className="bg-black min-h-screen "
      >
        <div
        className="min-h-screen"
          style={{
            backdropFilter: "blur(5px) saturate(180%)",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
           
          }}
        >
          <motion.div
            key={activeSlide} // Using key to ensure a re-render for animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center container py-20 md:px-20"
          >
            <div className="flex flex-col justify-center items-center py-9 text-center px-2 gap-6 md:w-1/2">
              <h1 className="text-5xl text-white font-extrabold">
                {data?.results[activeSlide]?.original_title}
              </h1>
              <p className="text-sm text-white">
                {data?.results[activeSlide]?.overview}
              </p>

              <button className="text-xl capitalize bg-primary px-2 py-1 text-white font-medium">
                watch now
              </button>
            </div>
          </motion.div>

          <div className="container ">
            <Slider {...settings}>
              {data?.results?.map((item, index) => (
                <div key={index} onClick={() => setActiveSlide(index)}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.original_title}
                    style={{ }}
                    className={`${activeSlide === index ? "flep" : "flepx"}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
