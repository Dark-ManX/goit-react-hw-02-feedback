import PropTypes from 'prop-types';
import styles from './FeedbackButtons.module.css';

const FeedbackButtons = ({name, onClick}) => {
    return (
        <button className={styles.button} type='button' onClick={onClick}>{name}</button>
    )
}

export default FeedbackButtons;

FeedbackButtons.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
}

