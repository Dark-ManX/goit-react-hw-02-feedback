import React, { Component } from "react";
import shortid from "shortid";
import FeedbackButtons from "./FeedbackButtons";
import FeedbackStatistic from "./StatisticItem/StatisticItem";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleButtonClick = (e) => {
        const key = e.currentTarget.textContent;

        this.setState((prevState) => {
        return ({[key]: prevState[key] + 1});
    })
    };

    totalFeedbacks = () => {
        return (Object.values(this.state).reduce((acc, item) => (acc += item), 0));
    }

    positiveFeedbacks = () => {
        return (Math.round((this.state.good / this.totalFeedbacks())*100))
    }

    render() {

        const keys = Object.keys(this.state);
        const total = this.totalFeedbacks();

        return (
            <div>
                <p>Please leave feedback</p>             

                {keys.map(el => 
                <FeedbackButtons 
                key={shortid.generate()} 
                name={el} 
                onClick={this.handleButtonClick} 
                />
                )}

                <p>Statistic</p>
                
                {!total
                    ? 'No feedback given'
                    : <div>
                        <ul>
                            {(keys.map(el => 
                                <FeedbackStatistic 
                                    key={shortid.generate()} 
                                    title={el} 
                                    value={this.state[el]} 
                                />
                            ))}
                        </ul>
                        <p>Total: <span>{this.totalFeedbacks()}</span></p>
                        <p>Positive feedback: <span>{this.positiveFeedbacks()}%</span></p>
                    </div>
                }
                
            </div>
        )
    }
}

export default Feedback;