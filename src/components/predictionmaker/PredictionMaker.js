import { useState } from 'react';
import TwoOptionSelector from './TwoOptionSelector';
import Card from '../../ui/Card';
import Accordion from '../../ui/Accordion';
import PredictionCard from '../PredictionsCard/PredictionCard';
import styles from './PredictionMaker.module.css'

const PredictionMaker = () => {
    const [noOfSelections, setNoOfSelections] = useState(0);
    const [disableIfNotSelected, setDisableIfNotSelected] = useState(false);
    const selectionMade = () => {
        let exactNoOfSelections = noOfSelections + 1;
        setNoOfSelections(exactNoOfSelections);
        if(exactNoOfSelections === 3) {
            setDisableIfNotSelected(true);
        }
    }
    const selectionUndone = () => {
        if(noOfSelections === 3) {
            setDisableIfNotSelected(false);
        }
        setNoOfSelections(noOfSelections - 1);
    }

    return (
        <div className={styles.wrapper}>
            <Card>
                <div className={styles['intro-text']}>
                    <h3>Time to predict!</h3>
                    <p>Take note of how many points each prediction is worth, you can only make 3! 
                        How confident do you feel? A 30 percent bonus will be applied should all your predictions come true...</p>
                </div>
                <Accordion title={"Over/under corners taken"} points={10}>
                    <TwoOptionSelector
                        optionOne={"> 10.5 Corners"} 
                        optionTwo={"< 10.5 Corners"} 
                        selectionMade={selectionMade} 
                        selectionUndone={selectionUndone} 
                        disableIfNotSelected={disableIfNotSelected} 
                    />
                </Accordion>
                <Accordion title={"Over/under yellow cards given"} points={10}>
                    <TwoOptionSelector 
                        optionOne={"> 4.5 Yellows"} 
                        optionTwo={"< 4.5 Yellows"} 
                        selectionMade={selectionMade} 
                        selectionUndone={selectionUndone} 
                        disableIfNotSelected={disableIfNotSelected} 
                    />
                </Accordion>
                <Accordion title={"Over/under goals scored"} points={10}>
                    <TwoOptionSelector 
                        optionOne={"> 2.5 Goals"} 
                        optionTwo={"< 2.5 Goals"} 
                        selectionMade={selectionMade} 
                        selectionUndone={selectionUndone} 
                        disableIfNotSelected={disableIfNotSelected}
                    />
                </Accordion>
                <Accordion title={"The winner"} points={15}>
                    <TwoOptionSelector 
                        optionOne={"Home"} 
                        optionTwo={"Away"} 
                        selectionMade={selectionMade} 
                        selectionUndone={selectionUndone} 
                        disableIfNotSelected={disableIfNotSelected} 
                    />
                </Accordion>
                <Accordion title={"The result will be a draw"} points={20}>
                    TODO
                </Accordion>
                <Accordion title={"The first Goal Scorer"} points={35}>
                    TODO
                </Accordion>
                <Accordion title={"The player to score 2 or more goals"} points={35}>
                    TODO
                </Accordion>
                <Accordion title={"The total of goals scored"} points={40}>
                    Todo
                </Accordion>
                <Accordion title={"There will be a red card"} points={40}>
                    TODO
                </Accordion>
                <Accordion title={"The final result"} points={60}>
                    TODO
                </Accordion>
                <form acion="#">
                    <div className={styles.summary} >
                        <PredictionCard />
                    </div>
                    <div className={styles['button-wrapper']} >
                        <input className={styles['confirm-button']} type="submit" value="Confirm" />
                    </div>
                </form>                
            </Card>
            
        </div>
    );
};

export default PredictionMaker;