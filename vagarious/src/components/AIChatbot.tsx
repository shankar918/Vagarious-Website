// import { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { motion, AnimatePresence } from "framer-motion";




// interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }

// export function AIChatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: 'assistant',
//       content: 'Hello! I\'m your AI assistant. How can I help you today?',
//     },
//   ]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = input.trim();
//     setInput('');
//     setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
//     setIsTyping(true);

//     // Simulate AI response
//     setTimeout(() => {
//       const responses = [
//         'I can help you with information about our AI solutions, cloud services, and automation tools. What would you like to know more about?',
//         'Our AI-powered solutions can transform your business operations. Would you like to schedule a demo?',
//         'We specialize in Cloud AI, Automation, Data Intelligence, and Security Solutions. Which area interests you most?',
//         'That\'s a great question! Our team of experts can provide detailed insights. Would you like me to connect you with a specialist?',
//         'We offer cutting-edge AI technology tailored to your business needs. Let me help you find the perfect solution.',
//       ];
      
//       const randomResponse = responses[Math.floor(Math.random() * responses.length)];
//       setMessages((prev) => [...prev, { role: 'assistant', content: randomResponse }]);
//       setIsTyping(false);
//     }, 1500);
//   };

//   return (
//     <>
//       {/* Chat Button */}
//       <AnimatePresence>
//         {!isOpen && (
//           <motion.button
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsOpen(true)}
//             className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center group"
//           >
//             <MessageCircle className="text-white" size={28} />
//             <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            
//             {/* Glow effect */}
//             <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 opacity-75 group-hover:opacity-100 blur-xl transition-opacity" />
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.95 }}
//             className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden"
//           >
//             {/* Header */}
//             <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                   <Sparkles className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-white">AI Assistant</h3>
//                   <p className="text-white/80 text-xs">Always here to help</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {messages.map((message, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-[80%] rounded-2xl px-4 py-3 ${
//                       message.role === 'user'
//                         ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white'
//                         : 'bg-gray-100 text-gray-900'
//                     }`}
//                   >
//                     <p className="text-sm">{message.content}</p>
//                   </div>
//                 </motion.div>
//               ))}
              
//               {isTyping && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex justify-start"
//                 >
//                   <div className="bg-gray-100 rounded-2xl px-4 py-3">
//                     <div className="flex gap-1">
//                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
//                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
//                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
//               <div className="flex gap-2">
//                 <Input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                   placeholder="Type your message..."
//                   className="flex-1 bg-white"
//                 />
//                 <Button
//                   onClick={handleSend}
//                   disabled={!input.trim()}
//                   className="bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
//                 >
//                   <Send size={20} />
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
