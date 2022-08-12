import PredictionOptionItem from './PredictionOptionItem';
import styles from './TwoOptionSelector.module.css'

const TwoOptionSelector = (props) => {
    return (
        <div className={styles['options-grid']}>
            <PredictionOptionItem name={props.optionOne} />
            <PredictionOptionItem name={props.optionTwo} />
        </div>
    );
};

export default TwoOptionSelector;