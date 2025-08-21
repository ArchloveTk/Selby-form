import React from 'react'
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function Chat() {
     
    useEffect(() => {
		createChat({
			webhookUrl: 'https://archlove.app.n8n.cloud/webhook/30ee3e19-9176-4c8e-b922-a84c922d5d9b/chat'
		});
	}, []);

  return (
    <div></div>
  )
}

export default Chat
