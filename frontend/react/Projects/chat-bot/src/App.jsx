import { useEffect, useState, useRef } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

// Main Chatbot App Component
const App = () => {
  // State to store chat messages
  const [chatHistory, setChatHistory] = useState([]);

  // Reference for the chat body (used for auto-scrolling)
  const chatBodyRef = useRef();

  // Function to generate a bot response using an API call
  const generateBotResponse = async (history) => {
    // Helper function to update chat history and remove "Thinking..." placeholder
    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text }]);
    };

    // Format chat history for API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    // API request settings
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // Call the API to get the bot's response
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();

      console.log("API Response:", JSON.stringify(data, null, 2)); // Log API response for debugging

      // Handle API errors
      if (!response.ok) throw new Error(data.error?.message || "Something went wrong!");

      // Ensure the API response has the expected structure
      if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
        throw new Error("Unexpected API response format");
      }

      // Extract and clean up the bot's response text
      const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

      // Update chat history with the bot's response
      updateHistory(apiResponse);

    } catch (error) {
      console.error("Error fetching response:", error);
      updateHistory("Sorry, I encountered an error."); // Show error message to the user
    }
  };

  // Auto-scroll to the latest message whenever chat history updates
  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon /> {/* Display chatbot icon */}
            <h2 className="logo-text">ChatNest</h2> {/* Chatbot title */}
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button> {/* Button to collapse chatbot */}
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          {/* Initial greeting message from the bot */}
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hey there!👋<br /> How can I assist you today? </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer - Input field for user messages */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};

export default App;