import shortid from "shortid";
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