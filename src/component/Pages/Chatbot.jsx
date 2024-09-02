import React, { useState } from 'react';
import axios from 'axios';

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
        if (input.trim() === '') return;

        // Add user message to chat
        setMessages((prevMessages) => [...prevMessages, { type: 'user', text: input }]);
        setInput('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/queryresult', {
                prompt: input,
            });

            // Extract the text from the response
            const botResponseText = response.data.result.output_text;

            // Add chatbot response to chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: 'bot', text: botResponseText }
            ]);
        } catch (error) {
            console.error("Error sending message to the chatbot: ", error);
        }
    };

    return (
        <>
            <button
                className="fixed bottom-4 right-4 bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 transition-transform transform hover:scale-105"
                onClick={toggleChatbot}
            >
                Chatbot
            </button>
            {isVisible && (
                <div className={` fixed  bg-opacity-10 backdrop-blur-sm  z-[1000] bottom-4 right-4 w-80 h-96 border border-gray-300 rounded-lg bg-gray-100 shadow-lg  flex flex-col ${isVisible ? 'animate-slideIn' : 'animate-slideOut'}`}>
                    <div className="flex items-center justify-between bg-blue-400 text-white p-3 rounded-t-lg cursor-pointer">
                        <span onClick={toggleChatbot}>Chatbot</span>
                        <button
                            className=" w-fitbg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded-full"
                            onClick={toggleChatbot}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="flex-1 p-3 overflow-y-auto bg-gray-200">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-300 text-right text-gray-800' : 'bg-gray-300 text-left text-gray-800'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className=" p-3 flex bg-gray-100 gap-x-1">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ask me question.."
                            className="flex-1 p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-400 bg-white text-gray-700"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-lg"
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
