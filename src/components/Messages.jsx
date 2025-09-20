import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Search, ChevronDown, Bookmark, 
  MoreHorizontal, Check, Paperclip, Send, MessageCircle 
} from 'lucide-react';

const initialConversations = {
  1: {
    id: 1,
    name: 'Example client',
    avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=88&auto=format&fit=crop',
    tag: { text: 'Follow Up', color: '#c89143', bg: 'rgba(200,145,67,0.10)', border: 'rgba(200,145,67,0.25)' },
    lastSeen: 'Last seen 07:20 PM',
    messages: [
      { from: 'in', text: 'Hello! Could you share a simple 7-day meal plan?', time: '07:15 PM' },
      { from: 'out', text: 'Absolutely. Any dietary preferences I should consider?', time: '07:16 PM' },
      { from: 'in', text: 'Vegetarian if possible. Also quick breakfast ideas!', time: '07:18 PM' },
    ],
  },
  2: {
    id: 2,
    name: 'Another client',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=88&auto=format&fit=crop',
    tag: { text: 'General', color: '#16a34a', bg: 'rgba(22,163,74,0.10)', border: 'rgba(22,163,74,0.20)' },
    lastSeen: 'Last seen 12:05 PM',
    messages: [
      { from: 'in', text: 'Is Greek yogurt okay for a high-protein snack?', time: '12:00 PM' },
      { from: 'out', text: 'Yes, great choice! Add nuts or fruit for balance.', time: '12:02 PM' },
      { from: 'in', text: 'Thanks! I\'ll try that.', time: '12:03 PM' },
    ],
  },
  3: {
    id: 3,
    name: 'Third client',
    avatar: 'https://images.unsplash.com/photo-1519345511563-1b1b0b2a4a9e?q=80&w=88&auto=format&fit=crop',
    tag: { text: 'Follow Up', color: '#c89143', bg: 'rgba(200,145,67,0.10)', border: 'rgba(200,145,67,0.25)' },
    lastSeen: 'Online',
    messages: [
      { from: 'in', text: 'Can we reschedule to Friday?', time: 'Yesterday' },
      { from: 'out', text: 'Friday 3 PM works. Sending invite now.', time: 'Yesterday' },
    ],
  },
};

const ConversationItem = ({ conversation, isActive, onSelect }) => {
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  return (
    <button onClick={onSelect} className={`w-full text-left px-3 py-3 rounded-md transition-colors flex items-center gap-3 ${isActive ? 'bg-[#F7F7FA]' : 'hover:bg-[#F7F7FA]'}`}>
      <img src={conversation.avatar} alt={conversation.name} className="h-9 w-9 rounded-full object-cover ring-1" style={{ ringColor: 'rgba(0,0,0,0.05)' }} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[14px] font-medium tracking-tight">{conversation.name}</span>
          <span className="text-[12px] text-[#888888]">{lastMessage.time}</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ color: conversation.tag.color, background: conversation.tag.bg, border: `1px solid ${conversation.tag.border}` }}>{conversation.tag.text}</span>
          <span className="truncate text-[13px] text-[#888888]">{lastMessage.text}</span>
        </div>
      </div>
      <Bookmark className="w-4.5 h-4.5 text-black/60" strokeWidth={1.5} />
    </button>
  );
};

const ConversationList = ({ conversations, activeConvId, onSelectConv }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <aside className="md:col-span-4 lg:col-span-4 border-r border-r-[rgba(90,82,76,0.10)]">
      <div className="p-4 sm:p-5">
        <div className="relative">
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="inline-flex items-center gap-2 h-9 px-3 rounded-md transition hover:bg-[#F7F7FA] hover:ring-1 hover:ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c89143]/50 bg-white border border-[rgba(90,82,76,0.12)]">
            <span className="text-[13px] font-medium">All clients</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-1 w-44 bg-white rounded-md shadow-lg border border-[rgba(90,82,76,0.1)]">
              <ul className="py-1">
                {['All clients', 'Follow Up', 'New', 'Archived'].map(item => (
                  <li key={item}>
                    <button className="w-full text-left px-3 h-9 hover:bg-[#F7F7FA] text-[13px]">{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <ul className="mt-3 divide-y divide-[rgba(90,82,76,0.10)]">
          {Object.values(conversations).map((conv, index) => (
            <li key={conv.id} className={index > 0 ? 'pt-1' : ''}>
              <ConversationItem conversation={conv} isActive={conv.id === activeConvId} onSelect={() => onSelectConv(conv.id)} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const MessageBubble = ({ message, senderAvatar, senderName }) => {
  if (message.from === 'out') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%]">
          <div className="px-3 py-2 rounded-lg rounded-tr-sm bg-[rgba(200,145,67,0.15)] border border-[rgba(90,82,76,0.10)]">
            <p className="text-[14px]">{message.text}</p>
          </div>
          <div className="mt-1 flex items-center justify-end gap-1 text-[12px] text-[#888888]">
            <Check className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{message.time}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-end gap-2 max-w-[80%]">
      <img src={senderAvatar} className="h-8 w-8 rounded-full object-cover ring-1 self-start" style={{ ringColor: 'rgba(0,0,0,0.05)' }} alt={senderName} />
      <div>
        <div className="px-3 py-2 rounded-lg rounded-tl-sm bg-[#F5F4F0] border border-[rgba(90,82,76,0.10)]">
          <p className="text-[14px]">{message.text}</p>
        </div>
        <div className="mt-1 text-[12px] text-[#888888]">{message.time}</div>
      </div>
    </div>
  );
};

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);
  
  const autosizeTextarea = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);
  
  const handleInputChange = (e) => { 
    setText(e.target.value); 
    autosizeTextarea(); 
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text.trim());
      setText('');
      setTimeout(() => { 
        if(textareaRef.current) textareaRef.current.style.height = 'auto'; 
      }, 0);
    }
  };
  
  const handleKeyDown = (e) => { 
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault(); 
      handleSubmit(e); 
    } 
  };
  
  return (
    <div className="px-4 sm:px-5 py-3 border-t border-t-[rgba(90,82,76,0.10)]">
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <div className="flex-1 relative">
          <textarea 
            ref={textareaRef} 
            value={text} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
            rows="1" 
            placeholder="Write a message..." 
            className="w-full max-h-40 resize-none rounded-md pr-12 pl-3 py-2 outline-none focus:ring-2 transition text-[14px] bg-white border border-[rgba(90,82,76,0.12)] caret-[#c89143]" 
          />
          <button type="button" className="absolute right-2 bottom-2 inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-[#F7F7FA] transition" aria-label="Attach">
            <Paperclip className="w-4.5 h-4.5" strokeWidth={1.5} />
          </button>
        </div>
        <button type="submit" className="h-10 w-10 rounded-full text-white flex items-center justify-center transition-transform active:translate-y-px hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c89143]/50 bg-[#c89143]">
          <Send className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
        </button>
      </form>
      <div className="mt-2 text-[12px] text-[#888888]">Press Enter to send • Shift + Enter for new line</div>
    </div>
  );
};

const ChatWindow = ({ conversation, onSendMessage }) => {
  const scrollRef = useRef(null);
  useEffect(() => { 
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; 
  }, [conversation?.messages]);
  
  if (!conversation) return (
    <section className="md:col-span-8 lg:col-span-8 flex items-center justify-center text-gray-500">
      Select a conversation.
    </section>
  );
  
  return (
    <section className="md:col-span-8 lg:col-span-8 flex flex-col h-[calc(100vh-210px)] md:h-auto">
      <div className="px-4 sm:px-5 py-3 flex items-center justify-between border-b border-b-[rgba(90,82,76,0.10)]">
        <div className="flex items-center gap-3 min-w-0">
          <img src={conversation.avatar} alt={conversation.name} className="h-9 w-9 rounded-full object-cover ring-1" style={{ ringColor: 'rgba(0,0,0,0.05)' }} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-medium tracking-tight truncate">{conversation.name}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ color: conversation.tag.color, background: conversation.tag.bg, border: `1px solid ${conversation.tag.border}` }}>{conversation.tag.text}</span>
            </div>
            <div className="text-[12px] text-[#888888]">{conversation.lastSeen}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-[#F7F7FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c89143]/50 transition" aria-label="Search in chat">
            <Search className="w-4.5 h-4.5" strokeWidth={1.5} />
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-[#F7F7FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c89143]/50 transition" aria-label="More">
            <MoreHorizontal className="w-4.5 h-4.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex-1 px-4 sm:px-5 py-4 overflow-y-auto">
        <div className="space-y-3">
          {conversation.messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} senderAvatar={conversation.avatar} senderName={conversation.name} />
          ))}
        </div>
      </div>
      <MessageInput onSendMessage={onSendMessage} />
    </section>
  );
};

const Messages = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeConvId, setActiveConvId] = useState(1);
  const [activeTab, setActiveTab] = useState('open');

  const activeConversation = conversations[activeConvId];

  const handleSendMessage = (text) => {
    const newMessage = {
      from: 'out',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    const updatedConversations = JSON.parse(JSON.stringify(conversations));
    updatedConversations[activeConvId].messages.push(newMessage);
    setConversations(updatedConversations);
  };

  const handleSelectConversation = (id) => {
    setActiveConvId(id);
  };

  const TabButton = ({ tabId, children }) => (
    <button 
      onClick={() => setActiveTab(tabId)} 
      className={`relative py-3 text-[14px] transition ${
        activeTab === tabId ? 'text-[#333333] font-medium' : 'text-[#888888] hover:text-[#333333]'
      }`}
    >
      <span>{children}</span>
      <span className={`absolute bottom-0 left-0 right-0 h-[2px] transition-colors ${
        activeTab === tabId ? 'bg-[#333333]' : 'bg-transparent'
      }`}></span>
    </button>
  );

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-[#F7F7FA]/80 backdrop-blur border-[#333333]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Messages</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 lg:gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#888888]" strokeWidth={1.5} />
                <input 
                  type="text" 
                  placeholder="Search clients, plans..." 
                  className="w-full rounded-md border pl-10 pr-3 py-2.5 text-sm placeholder-[#888888] shadow-sm focus:border-[#c89143]/50 focus:ring-2 focus:ring-[#c89143]/30 outline-none bg-[#F5F4F0] border-[#5a524c]/10" 
                />
              </div>
              <div className="inline-flex items-center gap-3 rounded-md border px-3 py-2 shadow-sm hover:shadow transition bg-[#F5F4F0] border-[#5a524c]/10">
                <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&h=128&fit=crop" alt="Dr. Adam Vasylenko" className="w-full h-full object-cover" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">Dr. Adam Vasylenko</div>
                  <div className="text-xs text-[#888888]">Dietician</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="rounded-lg shadow-sm bg-white border border-[rgba(90,82,76,0.10)]">
          <div className="px-4 sm:px-5 border-b border-b-[rgba(90,82,76,0.10)] bg-white">
            <div className="flex items-center gap-6">
              <TabButton tabId="unread">Unread conversations</TabButton>
              <TabButton tabId="open">Open conversations</TabButton>
              <TabButton tabId="archived">Archived conversations</TabButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <ConversationList conversations={conversations} activeConvId={activeConvId} onSelectConv={handleSelectConversation} />
            <ChatWindow conversation={activeConversation} onSendMessage={handleSendMessage} />
          </div>
        </div>
      </main>
      
      <button className="fixed right-5 bottom-5 h-12 w-12 rounded-full shadow-sm flex items-center justify-center transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c89143]/50 bg-[#c89143]" aria-label="Support">
        <MessageCircle className="w-5.5 h-5.5 text-white" strokeWidth={1.5} />
      </button>
    </>
  );
};

export default Messages;