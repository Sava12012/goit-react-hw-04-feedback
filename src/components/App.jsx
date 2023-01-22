import React, { useState } from 'react';
import Statistic from './Statistic';
import Section from './Section';
import Notification from './Notification';
import FeedbackOptions from './Feedback';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const totalVotes = good + neutral + bad;
  const positivePercentage = Math.round((good / totalVotes) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          handleClick={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {!totalVotes ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            totalVotes={totalVotes}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;
