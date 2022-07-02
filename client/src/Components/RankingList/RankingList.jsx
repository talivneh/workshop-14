// import styles from "./RankingList.module.css";
import Ranking from "../Ranking/Ranking";

export default function RankingList({ numberOfStars }) {
  return (
    <div>
      <Ranking isRankedStar={numberOfStars > 0.5} />
      <Ranking isRankedStar={numberOfStars > 1.5} />
      <Ranking isRankedStar={numberOfStars > 2.5} />
      <Ranking isRankedStar={numberOfStars > 3.5} />
      <Ranking isRankedStar={numberOfStars > 4.5} />
    </div>
  );
}
