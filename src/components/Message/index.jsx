import React, { Component } from 'react';

class Message extends Component {
  state = {
    isRead: false,
  };

  handleRad = () => {
    this.setState({
      isRead: true,
    });
  };

  render() {
    const { messageSender, textMessage } = this.props;

    return (
      <section>
        <p>{messageSender} says:</p>
        <input>Check this</input>
        <p>{textMessage}</p>
        <button onClick={this.handleRad} disabled={this.isRead}>
          Mark as read
        </button>
      </section>
    );
  }
}

export default Message;
