
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-red-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      <div>
          <h2 className="text-lg font-semibold">MhxMovie</h2>
    
        </div>
        <div>
          <h2 className="text-lg font-semibold">Company</h2>
          <ul>
            <li><a href="#" className=" text-gray-400 hover:underline">About</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Careers</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Our Culture</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Giving</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Partners</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Press Room</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Plex Gear</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">The Plex Blog</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Download</h2>
          <ul>
            <li><a href="#" className=" text-gray-400 hover:underline">Plex Media Server</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Apps & Devices</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Where to Watch</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Watch Free</h2>
          <ul>
            <li><a href="#" className=" text-gray-400 hover:underline">TV Channel Finder</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">What to Watch</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">What to Watch on Hulu</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">A24 Collection</a></li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-2xl hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="container mx-auto text-center text-sm mt-8">
        <p>Copyright © 2024 Plex | Privacy & Legal | Accessibility | Manage Cookie | Language: English (US)</p>
        <p className="capitalize text-white underline font-bold">created by Mhantich</p>
      </div>
    </footer>
  );
};

export default Footer;
