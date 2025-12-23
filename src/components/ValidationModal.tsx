import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

interface ValidationModalProps {
  isOpen: boolean;
  errors: string[];
  onClose: () => void;
  title?: string;
}

export const ValidationModal = ({
  isOpen,
  errors,
  onClose,
  title = "Validación",
}: ValidationModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal - Centrado */}
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="pointer-events-auto w-full max-w-md mx-4"
            >
              <div className="glass rounded-xl p-8 border-2 border-secondary/30 shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">
                      {title}
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Errors List */}
                <div className="space-y-3 mb-8">
                  {errors.map((error, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">{error}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <Button
                  onClick={onClose}
                  className="w-full bg-gradient-primary hover:shadow-neon hover:scale-105 transition-all duration-300 font-mono"
                >
                  Entendido
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
