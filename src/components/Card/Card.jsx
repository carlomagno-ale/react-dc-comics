import styles from './Card.module.css'
export default function Card({ image, title }) {

    return (
        <div>
            <div className={styles.card}>
                <img src={image} alt={title} />
                <div>{title}</div>
            </div>
        </div>
    )

}