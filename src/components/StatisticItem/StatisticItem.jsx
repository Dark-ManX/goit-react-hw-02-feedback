import PropTypes from 'prop-types';
import styles from './StatisticItem.module.css'

const StatisticItem = ({title, value}) => {
    return (
        <li className={styles.listItem}>{title}:<span>{value}</span></li>
    )
}

export default StatisticItem;

StatisticItem.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
}