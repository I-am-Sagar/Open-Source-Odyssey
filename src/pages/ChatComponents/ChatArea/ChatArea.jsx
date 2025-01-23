import React from 'react';

const ChatArea = ({ messages }) => {
    return (
        <div className="flex-1 p-4 overflow-y-auto">
            {/* If messages are empty, display an improved default UI */}
            {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    {/* Add an icon */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" 
                        alt="Chat Icon"
                        className="w-24 h-24 mb-4 opacity-70"
                    />
                    {/* Add a friendly message */}
                    <p className="text-gray-500 text-lg mb-2">
                        No messages yet!
                    </p>
                    {/* Add a call-to-action */}
                    <p className="text-gray-400 text-sm mb-4">
                        Start the conversation by typing your message below.
                    </p>
                </div>
            ) : (
                // If messages exist, render them
                messages.map((message) => (
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
                ))
            )}
        </div>
    );
};

export default ChatArea;