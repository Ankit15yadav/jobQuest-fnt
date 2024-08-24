import React, { useState } from 'react';
import axios from 'axios'; // Or any other HTTP client you use

const Chatbot = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChatbot = () => {
        setIsVisible(!isVisible);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (input.trim()) {
            const newMessage = { text: input, type: 'user' };
            setMessages([...messages, newMessage]);
            setInput('');

            try {
                // Send message to backend
                const response = await axios.post('/api/chat', { message: input });
                const botReply = response.data.message; // Adjust based on your backend response structure
                setMessages([...messages, newMessage, { text: botReply, type: 'bot' }]);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <>
            <button
                className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
                onClick={toggleChatbot}
            >
                Chatbot
            </button>
            {isVisible && (
                <div className="fixed bottom-4 right-4 w-80 h-96 border border-gray-300 rounded-lg bg-white shadow-lg z-50 flex flex-col">
                    <div
                        className="bg-blue-500 text-white p-3 rounded-t-lg cursor-pointer"
                        onClick={toggleChatbot}
                    >
                        Chatbot
                    </div>
                    <div className="flex-1 p-3 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-300 p-3 flex">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-blue-500 text-white p-2 rounded-r-lg"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
