
import { Button } from './ui/button'

function Banner() {

  return (
<div className='min-h-screen' style={{ 
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.55)), url(https://miro.medium.com/max/1400/1*few-89t3Lc5M-WG4qQ8Uqg.jpeg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
  <div  className='w-full h-full min-h-screen'>
    <main className="flex-grow container mx-auto px-4  text-white flex items-center  py-20">
      <div className="max-w-2xl py-20 gap-6 flex flex-col">
        <h1 className="text-5xl font-bold mb-4">Watch Free Movies Anytime, Anywhere.</h1>
        <p className="text-xl mb-6">
          The seek is done! Let Flicks assist you in locating a perfect free movie to watch this evening.
        </p>
        <Button className="bg-red-600 w-fit  hover:bg-blue-700">
          Watch Free
        </Button>
      </div>
    </main>
  </div>
</div>


  )
}

export default Banner