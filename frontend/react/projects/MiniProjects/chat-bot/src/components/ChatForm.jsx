import { useRef } from "react";

// ChatForm Component: Handles user input and sends messages to the chatbot
const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    // useRef to get a reference to the input field
    const inputRef = useRef();

    // Function to handle form submission when the user sends a message
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing on form submit

        // Get the user's input message, remove extra spaces
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return; // Do nothing if input is empty
        inputRef.current.value = ""; // Clear the input field after submission

        // Update chat history by adding the user's message
        setChatHistory(history => [...history, { role: "user", text: userMessage }]);

        // Temporarily show "Thinking..." as the bot's response before generating the real reply
        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
            
            // Call function to get the bot's response based on updated chat history
            generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
        }, 600); // Delay response slightly to mimic a real chat experience
    };

    return (
        // Form element to handle user message input and submission
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            {/* Input field for user to type messages */}
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Message..." 
                className="message-input" 
                required 
            />
            {/* Submit button (arrow icon) to send the message */}
            <button type="submit" className="material-symbols-rounded">
                arrow_upward
            </button>
        </form>
    );
};

// Exporting ChatForm component for use in other parts of the app
export default ChatForm;