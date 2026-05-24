import { motion } from 'motion/react';
import { Bot, User, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export function MessageBubble({ type, content, timestamp, sentiment, showStats }) {
  const isAI = type === 'ai';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={`flex gap-4 ${isAI ? 'flex-row' : 'flex-row-reverse'} mb-6`}
    >
      {/* Avatar avec thème fusionné */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
        className="flex-shrink-0"
      >
        {isAI ? (
          <div className="relative">
            {/* Glow avec les couleurs des trois pays */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 via-red-500 to-yellow-500 rounded-2xl blur-lg opacity-70 animate-pulse"/>
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 via-cyan-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-2xl">
              <Bot className="w-5 h-5 text-white drop-shadow-lg" strokeWidth={2.5}/>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/30 flex items-center justify-center backdrop-blur-sm shadow-lg">
            <User className="w-5 h-5 text-white/90" strokeWidth={2}/>
          </div>
        )}
      </motion.div>
      
      {/* Contenu du message */}
      <div className={`flex-1 max-w-2xl ${!isAI && 'flex flex-col items-end'}`}>
        <motion.div
          initial={{ opacity: 0, x: isAI ? -10 : 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className={`
            relative px-6 py-4 rounded-3xl backdrop-blur-xl border shadow-2xl
            ${isAI 
              ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 rounded-tl-md' 
              : 'bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-blue-500/20 border-cyan-400/30 rounded-tr-md'
            }
          `}
        >
          {/* Effet glassmorphism amélioré */}
          <div className={`absolute inset-0 rounded-3xl ${isAI ? 'rounded-tl-md' : 'rounded-tr-md'} bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none`}/>
          
          {/* Bordure décorative pour AI */}
          {isAI && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 via-red-500 to-yellow-500 rounded-l-3xl"/>
          )}
          
          <div className="relative">
            {isAI && (
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse"/>
                <span className="text-xs font-semibold bg-gradient-to-r from-emerald-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                  Assistant IA Mundial 2030
                </span>
              </div>
            )}
            
            <div className="text-white/95 leading-relaxed">
              {content}
            </div>
            
            {showStats && (
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5"/>
                  <span>Confiance: 85%</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400">
                  <CheckCircle className="w-3.5 h-3.5"/>
                  <span>Données vérifiées</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Timestamp et Sentiment */}
        <div className={`flex items-center gap-2 mt-2 px-2 ${!isAI && 'flex-row-reverse'}`}>
          {timestamp && (
            <span className="text-xs text-white/30">{timestamp}</span>
          )}
          {sentiment && (
            <div className={`
              w-1.5 h-1.5 rounded-full
              ${sentiment === 'positive' ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : ''}
              ${sentiment === 'neutral' ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : ''}
              ${sentiment === 'negative' ? 'bg-red-400 shadow-lg shadow-red-400/50' : ''}
            `}/>
          )}
        </div>
      </div>
    </motion.div>
  );
}
