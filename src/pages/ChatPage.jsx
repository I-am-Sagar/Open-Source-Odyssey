import React, { useState } from 'react';

import Navbar from './ChatComponents/Navbar/Navbar';
import QuestionHistory from './ChatComponents/QuestionHistory/QuestionHistory';
import ChatArea from './ChatComponents/ChatArea/ChatArea';
import MessageBox from './ChatComponents/MessageBox/MessageBox';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello! How can I help you today?', isBot: true },
        { id: 2, text: 'Hi! I need help with my account.', isBot: false },
        { id: 3, text: 'Sure! Could you please provide your account ID?', isBot: true },
        { id: 4, text: 'My account ID is 12345.', isBot: false },
    ]);

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
                        <ChatArea messages={messages}/>
                    </div>

                    {/* Message Box at the bottom */}
                    <div className="sticky bottom-0">
                        <MessageBox onSendMessage={handleSendMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;