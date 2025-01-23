import React from 'react';

import Navbar from './ChatComponents/Navbar/Navbar';
import QuestionHistory from './ChatComponents/QuestionHistory/QuestionHistory';
import ChatArea from './ChatComponents/ChatArea/ChatArea';
import MessageBox from './ChatComponents/MessageBox/MessageBox';

const ChatPage = () => {
    const handleSendMessage = (message) => {
        console.log('Message sent:', message);
        // Add logic to display the message in the chat area
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar at the top */}
            <Navbar />

            <div style={{ display: 'flex', flex: 1 }}>
                {/* Question History Sidepanel on the left */}
                <QuestionHistory />

                {/* Main Chat Area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Chat Area (scrollable) */}
                    <ChatArea />

                    {/* Message Box at the bottom */}
                    <MessageBox onSendMessage={handleSendMessage}/>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;