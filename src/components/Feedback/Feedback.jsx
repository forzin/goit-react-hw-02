import styles from './Feedback.module.css'

const Feedback = ({ reviews, totalFeedback }) => {
    return (
        <div>
            <ul className={styles.feedbackList}>
                <li>
                    <p className={styles.feedbackGood}>Good: {reviews.good}</p>
                </li>
                <li>
                    <p className={styles.feedbackNeutral}>Neutral: {reviews.neutral}</p>
                </li>
                <li>    
                    <p className={styles.feedbackBad}>Bad: {reviews.bad}</p>
                </li>
                <li>
                    <p>Total: {totalFeedback}</p>
                </li>
                <li>
                    <p>Positive: {Math.round((reviews.good / totalFeedback) * 100)}%</p>
                </li>
            </ul>
        </div>
    );
}

export default Feedback;