import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Slide() {
  const { data} = useSelector((state) => state.NewAuth);

  const customScrollbarStyle = `
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      border: transparent;
    }
  `;

  return (
    <div>
      <style>{customScrollbarStyle}</style>
      <div className="bg-gradient-to-r from-red-700 to-red-900 p-3 overflow-hidden">
        <h2 className="text-white text-3xl font-bold mb-4">Playing now on Flicks</h2>
        <div className="custom-scrollbar flex space-x-4 overflow-x-auto pb-4">
          {data?.results?.map((movie, index) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay:0.1 + index * 0.1 }}
              key={movie.id}
              className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="w-36 h-54 object-cover rounded-lg shadow-lg"
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;
