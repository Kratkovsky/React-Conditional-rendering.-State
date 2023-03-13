import React from 'react';
import './App.css';
import Message from './components/Message';

class App extends React.Component {
  state = {
    isRead: false,
  };
  render () {
    return (
    <main>
      <p>Check {Message}</p>
      </main>
      )
    }
  }

export default App;
