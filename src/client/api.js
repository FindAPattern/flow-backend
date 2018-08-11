import { type Message } from 'shared/types';

export default {
  async message(): Promise<Message> {
    const response = await fetch('/api/message');
    const data = await response.json();
    
    const message: Message = {
      message: data.message,
    };

    return message;
  },
};
