import shortid from "shortid";
import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem/StatisticItem';
import AdditionalStats from "../AdditionalStats/AdditionalStats";

const Statistics = ({keys, value, total, positivePercentage}) => {
    
    return (
        <div>
                
            {!total
                ? 'No feedback given'
                : <div>
                    <ul>
                        {(keys.map(el => 
                                <StatisticItem
                                    key={shortid.generate()} 
                                    title={el} 
                                    value={value[el]} 
                                />
                        ))}
                    </ul>
                    
                    <AdditionalStats total={total} positive={positivePercentage} />
                </div>
            }
        </div>
    )
}

export default Statistics;

Statistics.propTypes = {
    keys: PropTypes.array,
    value: PropTypes.shape({}),
}