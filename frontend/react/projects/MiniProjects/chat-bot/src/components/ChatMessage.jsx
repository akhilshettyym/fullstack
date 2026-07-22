import ChatbotIcon from "./ChatbotIcon"; // Importing the chatbot icon component

// ChatMessage Component: Displays individual chat messages from the user or bot
const ChatMessage = ({ chat }) => {
  return (
    // Message container: Applies different styles based on whether it's a bot or user message
    <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>

        {/* Show the chatbot icon only if the message is from the bot */}
        {chat.role === "model" && <ChatbotIcon />}

        {/* Display the actual message text */}
        <p className="message-text">{chat.text}</p>
    </div>
  );
};

// Exporting ChatMessage component for use in the chat interface
export default ChatMessage;