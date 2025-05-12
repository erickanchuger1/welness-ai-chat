   import React, { useState } from "react";

   const initialMessages = [
     {
       sender: "ai",
       text: "Hi Alex! Welcome to Wellness AI. How can I help you today?",
     },
   ];

   export default function App() {
     const [messages, setMessages] = useState(initialMessages);
     const [input, setInput] = useState("");

     const handleSend = (e) => {
       e.preventDefault();
       if (!input.trim()) return;
       setMessages([...messages, { sender: "user", text: input }]);
       // Simulate AI response
       setTimeout(() => {
         setMessages((msgs) => [
           ...msgs,
           {
             sender: "ai",
             text: getAIResponse(input),
           },
         ]);
       }, 800);
       setInput("");
     };

     // Simple AI response logic for demo
     function getAIResponse(userInput) {
       if (userInput.toLowerCase().includes("sleep")) {
         return (
           <>
             Here’s your sleep data for the past 7 days:
             <br />
             <img
               src="https://placehold.co/300x100?text=Sleep+Graph"
               alt="Sleep Graph"
               style={{ margin: "8px 0" }}
             />
             <br />
             You averaged 6.8 hours per night.
           </>
         );
       }
       if (userInput.toLowerCase().includes("log my lunch")) {
         return (
           <>
             Please upload a photo of your meal.
             <br />
             <input type="file" disabled style={{ marginTop: 8 }} />
           </>
         );
       }
       return "I'm here to help with your wellness! Try asking about your sleep, steps, or log a meal.";
     }

     return (
       <div style={styles.container}>
         <div style={styles.header}>Wellness AI</div>
         <div style={styles.chatWindow}>
           {messages.map((msg, idx) => (
             <div
               key={idx}
               style={{
                 ...styles.message,
                 alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                 background: msg.sender === "user" ? "#DCF8C6" : "#F1F0F0",
               }}
             >
               {typeof msg.text === "string" ? msg.text : msg.text}
             </div>
           ))}
         </div>
         <form style={styles.inputBar} onSubmit={handleSend}>
           <input
             style={styles.input}
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="Type your message…"
           />
           <button style={styles.sendBtn} type="submit">
             Send
           </button>
         </form>
       </div>
     );
   }

   const styles = {
     container: {
       maxWidth: 420,
       margin: "40px auto",
       border: "1px solid #ddd",
       borderRadius: 12,
       boxShadow: "0 2px 12px #0001",
       display: "flex",
       flexDirection: "column",
       height: "80vh",
       fontFamily: "system-ui, sans-serif",
       background: "#fff",
     },
     header: {
       padding: "16px 20px",
       fontWeight: 700,
       fontSize: 22,
       borderBottom: "1px solid #eee",
       background: "#f7f7f7",
       borderTopLeftRadius: 12,
       borderTopRightRadius: 12,
     },
     chatWindow: {
       flex: 1,
       padding: 20,
       display: "flex",
       flexDirection: "column",
       gap: 12,
       overflowY: "auto",
       background: "#fafbfc",
     },
     message: {
       maxWidth: "80%",
       padding: "12px 16px",
       borderRadius: 16,
       fontSize: 16,
       lineHeight: 1.5,
       wordBreak: "break-word",
     },
     inputBar: {
       display: "flex",
       borderTop: "1px solid #eee",
       padding: 12,
       background: "#f7f7f7",
       borderBottomLeftRadius: 12,
       borderBottomRightRadius: 12,
     },
     input: {
       flex: 1,
       fontSize: 16,
       padding: "10px 12px",
       borderRadius: 8,
       border: "1px solid #ddd",
       outline: "none",
       marginRight: 8,
     },
     sendBtn: {
       fontSize: 16,
       padding: "10px 18px",
       borderRadius: 8,
       border: "none",
       background: "#4F8CFF",
       color: "#fff",
       fontWeight: 600,
       cursor: "pointer",
     },
   };
