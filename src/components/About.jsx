import { Earth, Film, Package, TvMinimalPlay } from 'lucide-react';
import { Button } from './ui/button';

function About() {
    const futures = [
        { title: "Global Reach", description: "Access content from various countries worldwide.",icon:Earth },
        { title: "Extensive Library", description: "Choose from a wide range of movies, shows, and more." ,icon:TvMinimalPlay },
        { title: "Always Free", description: "Enjoy content without any subscription fees.",icon:Package  },
        { title: "Multi-Device Support", description: "Stream on your favorite devices, including mobile and smart TVs.",icon:Film  }
    ]
  return (

<div className='flex min-h-screen py-6 flex-wrap  text-white bg-black md:divide-x-2 '>
<div className='flex flex-col w-full    items-center text-center gap-4 md:w-fit px-9 justify-between  text-white'>

{futures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center w-64 px-9 justify-center ">
              <div className="w-14 h-14  flex items-center justify-center rounded-full mb-4">
                <feature.icon/>
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
</div>

<div className="  px-6 text-center  text-white py-8 md:px-64 md:max-w-6xl mx-auto">
      <div className="mb-12 md:px-9">
        <h1 className="text-4xl font-bold mb-4">
          Streaming free movies online is now easier than ever.
        </h1>
        <p className="text-lg mb-6">
          Well maintain your place on the screen as long as you are logged in once you create a free account with Flicks. Your free movies will easily continue where you left off on any device you choose.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg">
          Watch Free
        </Button>
      </div>
      
      <div className="relative ">
        <img 
          src="/ac5Lkh8Tv3GKz8zVFDbxdi-1200-80-removebg-preview.png" 
          alt="Laptop showing streaming service interface" 
          className="relative z-10 rounded-lg shadow-xl "
        />
      </div>
    </div>

</div>
      );
    }
    

  

export default About