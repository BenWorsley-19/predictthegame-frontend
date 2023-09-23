import styles from './PredictionCard.module.css';

const DUMMY_DATA = [
    { id: 1, name: "Winner", detail: "Home", points: "15"},
    { id: 2, name: "Over/under goals scored", detail: "> 2.5", points: "10"},
    { id: 3, name: "Over/under yellow cards", detail: "< 4.5", points: "10"}
];

const PredictionCard = (props) => {
    const predictions = DUMMY_DATA;

    const calculateTotalPoints = () => {
        let total = 0;
        predictions.forEach(p => {
            total = total + Number(p.points);
        });
        return total;
    };

    return (
        <div className={styles.wrapper}> 
            <div className={styles['title']}>
                <p className={styles['title-text']}>Your 3 Predictions</p>
            </div>            
            <div className={styles['content']}>
                <table>
                    <thead>
                        <tr>
                            <td>Prediction</td>
                            <td>Detail</td>
                            <td>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        {predictions.map((row) => {
                            return <tr className={styles['main-table-item']}>
                                <td>{row.name}</td>
                                <td>{row.detail}</td>
                                <td>{row.points}</td>
                            </tr>
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total: {calculateTotalPoints()}</td>
                        </tr>
                    </tbody>    
                </table>
            </div>
        </div>
    );
};

export default PredictionCard;