const AdditionalStats = ({total, positive}) => {
    return (
        <div>
            <p>Total: {total}</p>
            <p>Positive feedbacks: {positive}%</p>
        </div>    
    )
}

export default AdditionalStats;