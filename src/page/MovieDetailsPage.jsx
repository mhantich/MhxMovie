import {  CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Share2, PlayCircle } from "lucide-react";
import {
  useGetMovieDetailsQuery,
  useGetMovieDetailsRevQuery,
} from "@/store/MovieApi";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import { loading } from "@/animation";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
const MovieDetailsPage = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data, isLoading } = useGetMovieDetailsQuery(id);

 

    if (isLoading ) {
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

  const reviw = [
    "Seattle Times",
    "MovieFreak.com",
    "Premiere Magazine",
    "MovieFreak.com",
    "Premiere Magazine",
    "MovieFreak.com",
    "Premiere Magazine",
  ];
  return (
    <div className="bg-black text-white mt-14 ">
      <main className=" mx-auto px-1 py-1">
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)), url( https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path})`,
          }}
          className="md:col-span-2"
        >
          <AnimatedSection>
          <div className="  min-h-screen h-dvh  flex items-center justify-center container">
            <CardContent className="p-6">
              <div className="flex items-start flex-col  space-x-4 md:flex-row">
                <div className="md:w-1/3">
                  <div className="aspect-w-2 aspect-h-3  rounded-lg">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="text-2xl font-bold mb-2">
                    {" "}
                    {data?.original_title}
                  </h2>
                  <div className="flex items-center space-x-2 mb-4">
                    <span>{data?.release_date}</span>
                    <span>•</span>
                    <span>R</span>
                    <span>•</span>
                    <span>{data?.runtime}Min</span>
                  </div>
                  <div className="flex gap-1">
                    {data?.genres.map((item, index) => (
                      <Button className="bg-black" key={index}>
                        {item.name}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {data?.production_companies.map((item, index) => (
                      <p className="text-white" key={index}>
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {data?.production_countries.map((item, index) => (
                      <p className="text-white" key={index}>
                        {item.name}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="text-yellow-400" />
                    <span className="font-bold">4.5</span>
                  </div>
                  <p className="text-gray-400 mb-4">{data?.overview}</p>
                  <div className="flex space-x-2">
                    <Button>
                      <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
                    </Button>
                    <Button variant="outline">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>

</AnimatedSection>
        </div>
        <AnimatedSection>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">
            Watch {data?.original_title}
          </h3>
          <div className="flex ">
            <div className="aspect-w-16  md: aspect-h-9 bg-gray-900 w-full md:w-1/3 flex-none px-2 py-4">
              <img
                className="h-full "
                src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="aspect-w-16  md: aspect-h-9 bg-gray-900 w-full md:w-1/3 flex-none px-2 py-4">
              <img
                className="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${data?.belongs_to_collection?.poster_path}`}
                alt=""
              />
            </div>
            <div className="aspect-w-16  md: aspect-h-9 bg-gray-900 w-full md:w-1/3 flex-none px-2 py-4">
              <img
                className="h-full"
                src={`https://image.tmdb.org/t/p/w500/${data?.belongs_to_collection?.backdrop_path}`}
                alt=""
              />
            </div>
          </div>
        </div>

</AnimatedSection>

        <AnimatedSection>
        <div>
          <h3 className="text-xl font-bold mb-4">Cast & Crew</h3>
          <div className="flex items-center justify-start gap-3 overflow-x-auto">
            {data?.credits?.cast.map((name, index) => (
              <div key={index} className="text-center ">
                <Avatar className=" w-36  h-36 mx-auto mb-2">
                  <AvatarFallback>{name.name}</AvatarFallback>
                  <AvatarImage
                    src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${name.profile_path}`}
                  />
                </Avatar>

                <p className="text-sm">{name.name}</p>
                <p className="text-xs text-gray-400">Character</p>
              </div>
            ))}
          </div>
        </div>

</AnimatedSection>
        <AnimatedSection>
        <h3 className="text-xl font-bold mt-8 mb-4 ">Reviews</h3>
        <div className="w-full flex items-center gap-2 overflow-x-auto container">
          {reviw.map((source, index) => (
            <div
              key={index}
              className="bg-gray-900 w-full md:w-1/3 flex-none px-2 py-4"
            >
              <p className="text-sm">{source}</p>
              <div className="flex items-center w-full">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-4 h-4" />
                ))}
              </div>
            </div>
          ))}
        </div>

</AnimatedSection>


        <AnimatedSection>
        <div className="flex container overflow-x-auto gap-5 mt-9">
          {data?.videos?.results?.map((item, index) => (
            
            <iframe
              key={index}
              width="540"
              src={`https://www.themoviedb.org/video/play?key=${item.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div> 

</AnimatedSection>
      </main>
    </div>
  );
};

export default MovieDetailsPage;
