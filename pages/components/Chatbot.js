import { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newChat = [...chat, { role: 'user', content: message }];
    setChat(newChat);
    setMessage('');

    try {
      const response = await axios.post('http://your-backend-url/chat', { message });
      setChat([...newChat, { role: 'assistant', content: response.data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className="border p-4 rounded-md h-96 overflow-y-auto">
        {chat.map((msg, index) => (
          <div key={index} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <p className={msg.role === 'user' ? 'bg-blue-500 text-white p-2 inline-block rounded' : 'bg-gray-300 p-2 inline-block rounded'}>
              {msg.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 p-2 border rounded-l-md" placeholder="Type a message..." />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Send</button>
      </div>
    </div>
  );
}
