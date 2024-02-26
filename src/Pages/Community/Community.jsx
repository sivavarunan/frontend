import React, { useState } from 'react';
import './Community.css';

const Community = () => {

  const [inputMessage, setInputMessage] = useState('');
  const [channels, setChannels] = useState({
    '#Python': [],
    '#Java': [],
    '#JavaScript': [],
  });
  const [selectedChannel, setSelectedChannel] = useState('#Python');

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        user: 'Username',
        content: inputMessage,
      };
      setChannels({
        ...channels,
        [selectedChannel]: [...channels[selectedChannel], newMessage],
      });
      setInputMessage('');
    }
  };

  const messages = channels[selectedChannel];

  return (
    <div className="community-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <h2>Username</h2>
        </div>
        <div className="channels">
          <h2>Channels</h2>
          <ul>
          <li className={selectedChannel === '#Python' ? 'selected-channel' : ''} onClick={() => handleChannelClick('#Python')}># Python</li>
          <li className={selectedChannel === '#Java' ? 'selected-channel' : ''} onClick={() => handleChannelClick('#Java')}># Java</li>
          <li className={selectedChannel === '#JavaScript' ? 'selected-channel' : ''} onClick={() => handleChannelClick('#JavaScript')}># JavaScript</li>
          </ul>
        </div>
      </div>
      
      {/* Chat Window */}
      <div className="chat-window">
        {/* Messages */}
        <div className="messages">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              <div className="user-avatar">
                {/* Display user avatar */}
              </div>
              <div className="message-content">
                <h4>{message.user}</h4>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="message-input">
          <input
            type="text"
            placeholder={`Type your message to ${selectedChannel} here..`}
            value={inputMessage}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Community;
