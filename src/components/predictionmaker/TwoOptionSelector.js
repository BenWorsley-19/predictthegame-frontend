import { useState } from 'react';
import PredictionOptionItem from './PredictionOptionItem';
import styles from './TwoOptionSelector.module.css'

const TwoOptionSelector = (props) => {
    const [optionOneDisabled, setOptionOneDisabled] = useState(false);
    const [optionTwoDisabled, setOptionTwoDisabled] = useState(false);

    const handleSelection = (name, isSelected) => {
        if(props.optionOne === name) {
            setOptionTwoDisabled(isSelected === true)    
        }
        else {
            setOptionOneDisabled(isSelected === true)
        }
        if(isSelected) {
            props.selectionMade();
        }
        else {
            props.selectionUndone();
        }
    };

    return (
        <div className={styles['options-grid']}>
            <PredictionOptionItem 
                name={props.optionOne} 
                disableIfNotSelected={props.disableIfNotSelected} 
                disabled={optionOneDisabled} 
                onSelect={handleSelection} 
            />
            <PredictionOptionItem 
                name={props.optionTwo} 
                disableIfNotSelected={props.disableIfNotSelected} 
                disabled={optionTwoDisabled} 
                onSelect={handleSelection} 
            />
        </div>
    );
};

export default TwoOptionSelector;