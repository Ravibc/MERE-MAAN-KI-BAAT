import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';

function SendMessage({ setMessages }) {
    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault();
        
        if (!msg.trim()) return;

        // Add user's message to the chat UI
        setMessages(prevMessages => [...prevMessages, { text: msg, sender: 'user' }]);

        // Call the AI API (OpenAI GPT example)
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",  // Choose appropriate model
                messages: [{ role: "user", content: msg }],
                max_tokens: 500,
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
                    'Content-Type': 'application/json'
                }
            }
        );

        // Add AI response to chat
        setMessages(prevMessages => [
            ...prevMessages, 
            { text: response.data.choices[0].message.content, sender: 'ai' }
        ]);

        setMsg('');
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input 
                        style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} 
                        value={msg} 
                        onChange={(e) => setMsg(e.target.value)} 
                        placeholder="Ask something..." 
                    />
                    <Button 
                        style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} 
                        type="submit" 
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMessage;
