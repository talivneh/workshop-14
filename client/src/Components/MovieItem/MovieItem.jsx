import styles from "./MovieItem.module.css";
import RankingList from "../RankingList/RankingList";

export default function MovieItem({ id, title, synopsis, year, img, rating }) {
  return (
    <section className={styles.wrapper}>
      <div>
        <h2 className={styles.header}>{title}</h2>
        <p className={styles.p}>{synopsis}</p>
      </div>
      <div>
        <img src={img} alt={title} />
        <RankingList numberOfStars={rating} />
      </div>
      <div></div>
    </section>
  );
}
