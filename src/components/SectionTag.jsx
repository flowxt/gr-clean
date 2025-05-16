import { motion } from 'framer-motion';

export default function SectionTag({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="mb-8 text-center"
    >
      <span className="inline-block py-1 px-3 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full">
        {text}
      </span>
    </motion.div>
  );
} 