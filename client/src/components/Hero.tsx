import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [showStartBtn, setShowStartBtn] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowStartBtn(true);
    }, 1200);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-4xl">Ignite Your Inner Memory </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/762393586254741516/1145664082708545617/141cfc45-8a43-4af5-b92b-5c45e905d4ec-image.png"
            alt="hero image"
            width={400}
          />
        </motion.div>

        {showStartBtn && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={'/game'}>
              <p className="text-xl py-2 px-6 border border-black">Play now!</p>
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
};
