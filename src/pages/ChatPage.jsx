import React, { useState } from 'react';

import Navbar from './ChatComponents/Navbar/Navbar';
import QuestionHistory from './ChatComponents/QuestionHistory/QuestionHistory';
import ChatArea from './ChatComponents/ChatArea/ChatArea';
import MessageBox from './ChatComponents/MessageBox/MessageBox';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        const newMessage = {
            id: messages.length + 1,
            text: message,
            isBot: false,
        };
        setMessages([...messages, newMessage]);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: 'Thank you for your message. How can I assist you further?',
                isBot: true,
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 1000);
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar at the top */}
            <Navbar />
    
            <div className="flex flex-1 mt-16">
                {/* Question History Sidepanel on the left */}
                <QuestionHistory />
    
                {/* Main Chat Area */}
                <div className="flex flex-1 flex-col">
                    {/* Chat Area (scrollable) */}
                    <div className="flex-1 overflow-y-auto">
                        <ChatArea messages={messages} />
                    </div>
    
                    {/* Message Box at the bottom */}
                    <div className="sticky bottom-0">
                        <MessageBox onSendMessage={handleSendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;