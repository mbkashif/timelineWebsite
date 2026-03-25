import { motion } from "framer-motion";

export default function TimelineItem({ date, title, description }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        marginBottom: "40px",
        padding: "20px",
        borderLeft: "3px solid #ff4d6d",
        paddingLeft: "20px"
      }}
    >
      <h3 style={{ color: "#ff4d6d" }}>{date}</h3>
      <h2>{title}</h2>
      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
    </motion.div>
  );
}