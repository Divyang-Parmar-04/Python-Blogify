import { motion } from "framer-motion";
import "../../css/custom.css"

const SkeletonCard = () => {
  return (
    <motion.div
      className="card skeleton-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="card-img-box skeleton-img" />

      <div className="card-info">
        <div className="skeleton-line title" />
        <div className="skeleton-line" />
        <div className="skeleton-line short" />
        <div className="skeleton-btn" />
      </div>
    </motion.div>
  );
};

export default SkeletonCard;
