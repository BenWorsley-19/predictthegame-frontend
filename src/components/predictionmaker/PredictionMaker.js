import TwoOptionSelector from './TwoOptionSelector';
import PredictionOptionItem from './PredictionOptionItem';
import Card from '../../ui/Card';
import Accordion from '../../ui/Accordion';
import styles from './PredictionMaker.module.css'


const DUMMY_PREDICTION_OPTIONS = [
    { id: 1, name: "Final Result", value: "", points: "50"},
    { id: 2, name: "Winner", detail: "Spain", points: "10", correct: true},
    { id: 3, name: "Corners", detail: "<5", points: "7", correct: true}
];

const PredictionMaker = () => {
    return (
        // maybe this should be a fractal or whatever it's
        <div className={styles.wrapper}>
            <Card>
                <div className={styles['intro-text']}>
                    <h3>Time to predict!</h3>
                    <p>Take note of how many points each prediction is worth, you can only make 3 predictions! 
                        How confident do you feel? A 30 percent bonus will be applied should all your predictions come true...</p>
                </div>
                <Accordion title={"The winner"} points={10}>
                    <TwoOptionSelector optionOne={"Home"} optionTwo={"Away"} />
                </Accordion>
                <Accordion title={"The number of corners taken"} points={10}>
                    <TwoOptionSelector optionOne={"> 10.5 Corners"} optionTwo={"< 10.5 Corners"} />
                </Accordion>
                <Accordion title={"The number of yellow cards given"} points={10}>
                <TwoOptionSelector optionOne={"> 4.5 Yellows"} optionTwo={"< 4.5 Yellows"} />
                </Accordion>
                <Accordion title={"The total of goals scored"} points={25}>
                    <TwoOptionSelector optionOne={"> 2.5 Goals"} optionTwo={"< 2.5 Goals"} />
                </Accordion>
                <Accordion title={"The result will be a draw"} points={15}>
                    TODO
                </Accordion>
                <Accordion title={"The player to score first"} points={30}>
                    TODO
                </Accordion>
                <Accordion title={"The player to score 2 or more goals"} points={25}>
                    TODO
                </Accordion>
                <Accordion title={"The first Goal Scorer"} points={35}>
                    TODO
                </Accordion>

                <Accordion title={"There will be a red card"} points={35}>
                    TODO
                </Accordion>
                <Accordion title={"The final result"} points={50}>
                    TODO
                </Accordion>
            </Card>
            {/*
            <form acion="#">
                <p>in form</p>
                <div className={styles.button}>
                    <input type="submit" value="Confirm" />
                </div>   
            </form> */}
        </div>
    );
};

export default PredictionMaker;