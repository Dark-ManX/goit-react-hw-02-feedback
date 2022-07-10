import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({name, onClick}) => {
    return (
        <button className={styles.button} type='button' onClick={onClick}>{name}</button>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
}

