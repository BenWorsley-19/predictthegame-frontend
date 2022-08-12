import { Fragment } from 'react';
import CompletedPrediction from '../completedprediction/CompletedPrediction';
import styles from './RoundPredictionSummary.module.css'

const DUMMY_PREDICTIONS = [
    { id: 1, name: "Final Result", detail: "3-2", points: "50", correct: false},
    { id: 2, name: "Winner", detail: "Spain", points: "10", correct: true},
    { id: 3, name: "Corners", detail: "<5", points: "7", correct: true}
];

const RoundPredictionSummary = () => {
    const predictions = DUMMY_PREDICTIONS;

    return (
        <div className={styles.wrapper}>
          <p>Your predictions...</p>
          <ul className={styles.list}>
            {predictions.map((prediction) => (
              <CompletedPrediction
                key={prediction.id}
                id={prediction.id}
                name={prediction.name}
                detail={prediction.detail}
                points={prediction.points}
                correct={prediction.correct}
              />
            ))}
          </ul>
        </div>
    );
};

export default RoundPredictionSummary;