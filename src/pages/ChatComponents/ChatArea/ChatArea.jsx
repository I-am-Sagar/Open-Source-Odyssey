import React from 'react';

const ChatArea = () => {
    // Sample chat messages (replace with actual data)
    const messages = [
        { id: 1, text: 'Hello! How can I help you today?', isBot: true },
        { id: 2, text: 'Hi! I need help with my account.', isBot: false },
        { id: 3, text: 'Sure! Could you please provide your account ID?', isBot: true },
        { id: 4, text: 'My account ID is 12345.', isBot: false },
    ];

    return (
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {/* Chat Messages */}
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${
                        message.isBot ? 'justify-start' : 'justify-end'
                    } mb-4`}
                >
                    <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                            message.isBot
                                ? 'bg-blue-100 text-gray-800'
                                : 'bg-green-100 text-gray-800'
                        }`}
                    >
                        <p className="text-sm">{message.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatArea;