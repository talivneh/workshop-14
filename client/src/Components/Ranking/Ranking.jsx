import styles from "./Ranking.module.css";
import rated from "../../assets/rated_star.png";
import unRated from "../../assets/empty_star.png";

export default function Ranking({ isRankedStar }) {
  return (
    <img
      className={styles.star}
      src={isRankedStar ? rated : unRated}
      alt="star"
    />
  );
}
