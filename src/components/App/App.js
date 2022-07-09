import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import FeedbackButtons from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import styles from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = e => {
    const key = e.currentTarget.textContent;

    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  totalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  positiveFeedbacks = () => {
    return Math.round((this.state.good / this.totalFeedbacks()) * 100);
  };

  render() {
    const keys = Object.keys(this.state);
    const total = this.totalFeedbacks();
    const positive = this.positiveFeedbacks();

    return (
      <div className={styles.main}>
        <Section
          title="Please leave feedback"
          children={keys.map(el => (
            <FeedbackButtons key={shortid.generate()} name={el} onClick={this.handleButtonClick} />
          ))}
        />

        <Section
          title="Statistics"
          children={
            <Statistics
              keys={keys}
              value={this.state}
              total={total}
              positivePercentage={positive}
            />
          }
        />
      </div>
    );
  }
}

export default App;
