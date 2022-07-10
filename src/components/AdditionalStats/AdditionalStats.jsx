import PropTypes from 'prop-types';

const AdditionalStats = ({total, positive}) => {
    return (
        <div>
            <p>Total: {total}</p>
            <p>Positive feedbacks: {positive}%</p>
        </div>    
    )
}

export default AdditionalStats;

AdditionalStats.propTypes = {
    total: PropTypes.number,
    positive: PropTypes.number,
}