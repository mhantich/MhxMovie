
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const NewRelease = () => {
    const { data, error, loading } = useSelector((state) => state.NewAuth);
console.log(data)
  return (
    <div className="bg-white p-8 ">
      <h2 className="text-3xl font-bold mb-6">New Release</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2    mb-4 md:mb-0 md:pr-8">
          <img 
      src={`https://image.tmdb.org/t/p/w500${data?.results[10].poster_path}`}
      alt="The Last Samurai Poster" 
            className=" h-96 w-96 rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="md:w-1/2 py-20">
          <h3 className="text-4xl font-semibold text-red-600 mb-2">{data?.results[10].title}</h3>

          <div className="mb-4">
            <span className="text-gray-600 mr-4">HBO Series</span>
            <span className="text-gray-600">2 Seasons</span>
          </div>
          <p className="text-gray-700 mb-6">
       {data?.results[7].overview}

          </p>
          <div className="space-x-4">
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              View more information
            </Button>
            <Button variant="outline" className="text-gray-700 border-gray-700 hover:bg-gray-50">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRelease;