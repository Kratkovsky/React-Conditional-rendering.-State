import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRead: false,
    }
  }

  handleRead = () => {
    this.setState({
      isRead: true,
    });
  };

  render() {
    const { messageSender } = this.props;
    const { isRead } = this.state;
    const textMessage = 'Hi!'

    return (
      <article>
        <h1>{messageSender} User says:</h1>
        <h2>{textMessage}</h2>
        <p>User's message {isRead ? 'read' : 'unread'}</p>
        <button disabled={isRead} onClick={this.handleRead}>
          Mark as read
        </button>
      </article>
    );
  }
}

export default Message;
