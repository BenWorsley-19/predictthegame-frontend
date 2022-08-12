import { useState } from 'react';
import styles from './PredictionOptionItem.module.css';

const PredictionOptionItem = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelected = () => {
        setIsSelected(!isSelected);
        console.log(isSelected);
    };

    return (
        <div className={styles['prediction-options-item']}>
            <button 
                onClick={toggleSelected}
                className={`${styles['prediction-options-button']} ${isSelected && styles.selected}`}
            >
                {props.name}
            </button>
        </div>
    );
};

export default PredictionOptionItem;
