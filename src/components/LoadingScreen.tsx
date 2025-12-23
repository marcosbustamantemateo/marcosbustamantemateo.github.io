import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto relative"
        >
          <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-60 animate-glow-pulse" />
          <div className="relative w-full h-full bg-gradient-primary rounded-full flex items-center justify-center border-4 border-primary/50 overflow-hidden">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texto de carga */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center space-x-2"
        >
          <div className="flex space-x-1">
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
            />
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
            />
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
