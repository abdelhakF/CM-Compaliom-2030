import { motion } from 'motion/react';
import { Send, Paperclip, Mic, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative"
    >
      {/* Glow effect avec les couleurs des trois pays */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 via-red-500 to-yellow-500 rounded-3xl blur-xl opacity-40"
        />
      )}
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative backdrop-blur-xl bg-white/12 border-2 border-white/25 rounded-3xl shadow-2xl overflow-hidden">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"/>
          
          {/* Barre décorative en haut */}
          <div className="absolute top-0 left-0 right-0 h-0.5 flex">
            <div className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600"/>
            <div className="flex-1 bg-gradient-to-r from-red-500 to-yellow-500"/>
            <div className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600"/>
          </div>
          
          <div className="relative flex items-end gap-2 p-2">
            {/* Action Buttons */}
            <div className="flex items-center gap-1 pb-2 pl-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="p-2 rounded-xl hover:bg-white/15 transition-colors text-white/70 hover:text-white/95"
              >
                <Paperclip className="w-5 h-5"/>
              </motion.button>
            </div>
            
            {/* Input */}
            <div className="flex-1 min-h-[48px] max-h-32 overflow-y-auto py-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Posez une question sur les matchs, prédictions, statistiques..."
                className="w-full bg-transparent text-white/95 placeholder-white/50 resize-none outline-none font-medium"
                rows={1}
                style={{ 
                  minHeight: '32px',
                  maxHeight: '96px',
                }}
              />
            </div>
            
            {/* Send/Voice Buttons */}
            <div className="flex items-center gap-1 pb-2 pr-2">
              {message.trim() ? (
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="relative p-3 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 via-red-500 to-yellow-500 shadow-xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <Send className="w-5 h-5 text-white relative z-10 drop-shadow-lg"/>
                </motion.button>
              ) : (
                <motion.button
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="p-3 rounded-xl hover:bg-white/15 transition-colors text-white/70 hover:text-white/95"
                >
                  <Mic className="w-5 h-5"/>
                </motion.button>
              )}
            </div>
          </div>
        </div>
        
        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 mt-3 px-2 overflow-x-auto scrollbar-hide"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 animate-pulse"/>
          {[
            'Calendrier des matchs',
            'Prédire le gagnant',
            'Statistiques équipes',
            'Réactions des fans'
          ].map((suggestion, idx) => (
            <motion.button
              key={suggestion}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (idx * 0.05) }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMessage(suggestion)}
              className="px-3 py-2 rounded-full bg-white/8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all text-xs font-medium text-white/70 hover:text-white/95 whitespace-nowrap shadow-lg"
            >
              {suggestion}
            </motion.button>
          ))}
        </motion.div>
      </form>
    </motion.div>
  );
}
