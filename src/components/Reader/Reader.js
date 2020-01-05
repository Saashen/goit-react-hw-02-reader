import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    return (
      <div>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          prevBtnDisabled={publicationIndex < 1}
          nextBtnDisabled={publicationIndex + 2 > items.length}
        />
        <Progress index={publicationIndex} length={items.length} />
        <Publication item={publication} page={publicationIndex + 1} />
      </div>
    );
  }
}
