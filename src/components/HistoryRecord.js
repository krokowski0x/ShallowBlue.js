import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

class HistoryRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  render() {
    const { record, key } = this.props;
    const { isOpened } = this.state;

    return (
      <li key={key}>
        <img
          alt="Chess Piece"
          draggable="false"
          src={`src/pieces/${record.piece}${record.color}.svg`}
        />
        <span className="moveRecord">
          {record.from} &#10230; {record.to}
        </span>
        {record.captured ? <span className="captureRecord">Capture!</span> : <span />}
        {record.color === 'b' ?
          <button
            onClick={() => this.setState({ isOpened: !isOpened })}
          > &#9661;
          </button> : <span />}
        <Collapse className="AIinfo" fixedHeight={40} isOpened={isOpened}>
            Fcmwioefjnwoeifjnweofiujbweofiwjfbouwefhboeufjh
        </Collapse>
      </li>
    );
  }
}

export default HistoryRecord;