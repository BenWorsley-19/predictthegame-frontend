import RoundPredictionSummary from '../roundpredictionssummary/RoundPredictionSummary';
import styles from './RoundSummary.module.css'

const RoundSummary = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles['page-title']}>Round 1</h1>
            <h2>17 points</h2>
            
            <RoundPredictionSummary />
        </div>
    );
};

export default RoundSummary;