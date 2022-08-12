import { Fragment } from 'react';
import MatchResult from '../matchresult/MatchResult';
import RoundPredictionSummary from '../roundpredictionssummary/RoundPredictionSummary';
import styles from './RoundSummary.module.css'

const RoundSummary = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles['page-title']}>Round 1</h1>
            <h2>17 points</h2>
            <MatchResult />
            <RoundPredictionSummary />
        </div>
    );
};

export default RoundSummary;