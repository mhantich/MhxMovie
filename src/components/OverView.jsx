

function OverView() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative"
      
      
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25)), url(https://miro.medium.com/max/1400/1*few-89t3Lc5M-WG4qQ8Uqg.jpeg)`,
      
      
      backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className=" bg-black bg-opacity-50">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h2 className="text-2xl font-bold mb-4">We are compatible.</h2>
                <p className="mb-4">Stream Plex from just about any phone, tablet, smart TV, gaming consoles, or PC.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Stream Free Now</button>
              </div>
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <h2 className="text-2xl font-bold mb-4">Dont forget free TV.</h2>
                <p className="mb-4">A Live TV free for all has begun. Enjoy instant access to 600+ channels for the whole family anywhere, on any device.</p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">See Whats On</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-black text-white">
  <div className="container mx-auto px-4 text-center">
    <h3 className="text-2xl font-bold mb-8">Proud Partners with:</h3>
    <div className="flex flex-wrap justify-center md:justify-between items-center space-y-4 md:space-y-0">
      <img src="/partner-light-01.png" alt="Partner 1" className="h-12 w-full md:w-auto md:h-16" />
      <img src="/partner-light-02.png" alt="Partner 2" className="h-12 w-full md:w-auto md:h-16" />
      <img src="/partner-light-03.png" alt="Partner 3" className="h-12 w-full md:w-auto md:h-16" />
      <img src="/partner-light-04.png" alt="Partner 4" className="h-12 w-full md:w-auto md:h-16" />
    </div>
  </div>
</div>

    </div>
  )
}

export default OverView