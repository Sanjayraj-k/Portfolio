import React, { useState, useRef, useEffect } from 'react';
import { FaCommentDots, FaPaperPlane, FaTimes } from 'react-icons/fa';
import profile from '../../assets/images/profile.png';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Sanjay's AI Assistant. Ask me anything about his projects, skills, or experience!",
            sender: 'bot'
        }
    ]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const formatMessage = (text) => {
        // First handle newlines to preserve structure
        let formatted = text.replace(/\n/g, '<br/>');

        // Handle bold text (**text**)
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Convert URLs to clickable links
        // Updated regex that excludes trailing punctuation
        const urlRegex = /(https?:\/\/[^\s<]+[^<.,:;?!\)\]\s])|(www\.[^\s<]+[^<.,:;?!\)\]\s])/g;
        formatted = formatted.replace(urlRegex, (url) => {
            // Add https:// if the URL starts with www.
            const href = url.startsWith('www.') ? `https://${url}` : url;
            return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${url}</a>`;
        });

        return formatted;
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputText,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText("");
        setIsLoading(true);
        // https://portfolio-1-5qy6.onrender.com/chat

        try {
            // Replace with your actual backend URL if different
            const response = await fetch('http://localhost:10000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage.text }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            const botMessage = {
                id: Date.now() + 1,
                text: data.response,
                sender: 'bot'
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Chat Error:', error);
            const errorMessage = {
                id: Date.now() + 1,
                text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h3>
                        <img src={profile} alt="AI" className="bot-avatar" /> Assistant
                    </h3>
                    <button className="close-btn" onClick={toggleChat}>
                        <FaTimes />
                    </button>
                </div>

                <div className="chatbot-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
                        </div>
                    ))}

                    {isLoading && (
                        <div className="typing-indicator">
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                            <div className="typing-dot"></div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chatbot-input-form" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        className="chatbot-input"
                        placeholder="Type your message..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button type="submit" className="send-btn" disabled={isLoading || !inputText.trim()}>
                        <FaPaperPlane />
                    </button>
                </form>
            </div>

            <button className="chatbot-toggle" onClick={toggleChat}>
                {isOpen ? <FaTimes /> : <FaCommentDots />}
            </button>
        </div>
    );
};

export default Chatbot;