import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"
  
  render() {
    return (
      <div >
        {this.props.convo.map((c, i) => {
          <div key={i}><span className="sender">{c.sender === 'self' ? 'Me' : this.props.sender}</span><span>{c.text}</span></div>
        })}
      </div>
    )
  }
}

export default Conversation;
