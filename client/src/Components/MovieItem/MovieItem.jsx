import styles from "./MovieItem.module.css";

export default function MovieItem({id, title, synopsis, year, img}) {
    return <section className={styles.wrapper}>
        <div>
            <h2 className={styles.header}>{title}</h2>
            <p className={styles.p}>{synopsis}</p>
        </div>
        <div>
            <img src={img} alt={title}/>
        </div>
    </section>;
}