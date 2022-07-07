import PropTypes from 'prop-types';

const FeedbackButtons = ({name, onClick}) => {
    return (
        <button type='button' onClick={onClick}>{name}</button>
    )
}

export default FeedbackButtons;

FeedbackButtons.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
}

