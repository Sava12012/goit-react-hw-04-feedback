import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './Feedback.styled';

export const FeedbackOptions = ({ options, handleClick }) => {
  const optionsKey = Object.keys(options);

  return (
    <>
      <ButtonList>
        {optionsKey.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <ButtonItem key={index}>
              <Button
                type="button"
                name={option}
                onClick={() => handleClick(option)}
              >
                {label}
              </Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
