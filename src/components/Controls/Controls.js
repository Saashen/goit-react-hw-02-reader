import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  onIncrement,
  onDecrement,
  prevBtnDisabled,
  nextBtnDisabled,
}) => (
  <section>
    <button type="button" onClick={onDecrement} disabled={prevBtnDisabled}>
      Назад
    </button>
    <button type="button" onClick={onIncrement} disabled={nextBtnDisabled}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
