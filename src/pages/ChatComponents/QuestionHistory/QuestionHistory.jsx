import React from 'react';

const QuestionHistory = () => {
    // Sample data for question history
    const questions = [
        "What is the capital of France?",
        "How does photosynthesis work?",
        "Tell me about quantum computing.",
        "What are the benefits of AI?",
        "Explain the theory of relativity.",
    ];

    return (
        <div className="w-64 bg-gray-100 p-4 border-r border-gray-200 h-screen overflow-y-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Question History</h2>
            <ul className="space-y-2">
                {questions.map((question, index) => (
                    <li key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <p className="text-sm text-gray-700">{question}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionHistory;