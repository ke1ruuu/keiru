"use client";

import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutContent from "@/components/sections/about-content";
import ContactContent from "@/components/sections/contact-content";

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-2xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
            onClick={handleModalClick}
          >
            <AboutContent compact />
            <ContactContent compact />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}