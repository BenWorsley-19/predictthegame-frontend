import { useState } from 'react';
import styles from './PredictionOptionItem.module.css';

const PredictionOptionItem = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const disabled = (props.disableIfNotSelected & !isSelected === true) ? true : props.disabled;


    const toggleSelected = () => {
        props.onSelect(props.name, !isSelected);
        setIsSelected(!isSelected);
    };

    return (
        <div className={styles['prediction-options-item']}>
            <button
                disabled={disabled} 
                onClick={toggleSelected}
                className={`${styles['prediction-options-button']} ${isSelected && styles.selected} ${disabled && styles.disabled}`}
            >
                {props.name}
            </button>
        </div>
    );
};

export default PredictionOptionItem;
