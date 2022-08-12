const CompletedPrediction = (props) => {
    return (
        <li>
            <p>{props.name} {props.detail} {props.points} {props.correct.toString()}</p>
        </li>
    );
};

export default CompletedPrediction;