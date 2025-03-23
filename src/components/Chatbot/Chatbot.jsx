import { useState, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  // Greeting messages array
  const greetings = [
    "Welcome to Dough & Delight! How can we make your day sweeter?",
    "Hi there! Welcome to Dough & Delight. What delicious treat can we help you with today?",
    "Hello and welcome to Dough & Delight! We're here to satisfy your cravings. How can we assist you?",
    "Welcome to Dough & Delight! Need help with a cake, pastry, or something else?",
    "Good day! You've reached Dough & Delight. Ready to indulge in some fresh baked goodness?",
    "Hi! You've come to the right place for delicious treats. How can we assist you today at Dough & Delight?"
  ];

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Select a random greeting when component mounts or chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      const randomGreeting = greetings[randomIndex];
      setGreeting(randomGreeting);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;
  
    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    
    // Add loading message
    setIsLoading(true);
    
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userInput })
      });
  
      const data = await response.json();
      console.log("API Response:", data); // Debugging
  
      // Extract only the message value
      const botMessageText = data.response || "No response received";
      const botMessage = { sender: "bot", text: botMessageText };
      
      // Remove loading state and add the bot message
      setIsLoading(false);
      setMessages((prev) => [...prev, botMessage]);
  
    } catch (error) {
      console.error("Error fetching response:", error);
      // Show error message and remove loading state
      setIsLoading(false);
      setMessages((prev) => [...prev, { 
        sender: "bot", 
        text: "Sorry, I couldn't process your request. Please try again." 
      }]);
    }
  
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
   
  return (
    <div className={`chatbot-wrapper ${isOpen ? 'open' : 'closed'}`}>
      {!isOpen ? (
        <div className="chat-icon" onClick={toggleChat}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.957 9.957 0 0 1-4.708-1.175L2 22l1.176-5.29A9.966 9.966 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 2a8 8 0 0 0-8 8c0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349A7.955 7.955 0 0 0 12 20a8 8 0 0 0 0-16zm1 3v5h4v2h-6V7h2z" fill="currentColor"/>
          </svg>
        </div>
      ) : (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Chat Support</h3>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-box">
            {messages.length === 0 ? (
              <div className="empty-chat">
                <p>{greeting}</p>
              </div>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                  >
                    <span className="message-text">{msg.text}</span>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="message bot-message">
                    <span className="message-text loading-dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;