import { motion } from 'motion/react';
import { Heart, MessageCircle, Smile, Meh, Frown, Users } from 'lucide-react';

export function SentimentWidget({ sentiment }) {
  const total = sentiment.positive + sentiment.neutral + sentiment.negative;
  const positivePercent = (sentiment.positive / total) * 100;
  const neutralPercent = (sentiment.neutral / total) * 100;
  const negativePercent = (sentiment.negative / total) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-rose-500/15 via-orange-500/15 to-yellow-500/15 border-2 border-rose-400/30 shadow-2xl"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none"/>
      
      {/* Barre décorative */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500"/>
      
      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-rose-500/25 to-orange-500/25 border-2 border-rose-400/30 shadow-lg">
            <Heart className="w-5 h-5 text-rose-300"/>
          </div>
          <div>
            <h3 className="font-bold text-white/95">Sentiment des Fans</h3>
            <p className="text-xs text-white/60 mt-0.5">Analyse émotionnelle en direct</p>
          </div>
        </div>
        
        {/* Sentiment Distribution améliorée */}
        <div className="mb-5">
          <div className="flex items-center gap-1 h-4 rounded-full overflow-hidden bg-white/10 border border-white/20 shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${positivePercent}%` }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-lg shadow-emerald-500/50 relative"
            >
              <div className="absolute inset-0 bg-white/20"/>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${neutralPercent}%` }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 shadow-lg shadow-cyan-500/50 relative"
            >
              <div className="absolute inset-0 bg-white/20"/>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${negativePercent}%` }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-rose-500 to-red-400 shadow-lg shadow-rose-500/50 relative"
            >
              <div className="absolute inset-0 bg-white/20"/>
            </motion.div>
          </div>
        </div>
        
        {/* Sentiment Breakdown */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
          >
            <div className="flex items-center gap-2.5">
              <Smile className="w-5 h-5 text-emerald-400"/>
              <span className="text-sm font-semibold text-emerald-300">Positif</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-emerald-300">{positivePercent.toFixed(1)}%</span>
              <span className="text-xs text-white/50">({sentiment.positive.toLocaleString()})</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
          >
            <div className="flex items-center gap-2.5">
              <Meh className="w-5 h-5 text-cyan-400"/>
              <span className="text-sm font-semibold text-cyan-300">Neutre</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-cyan-300">{neutralPercent.toFixed(1)}%</span>
              <span className="text-xs text-white/50">({sentiment.neutral.toLocaleString()})</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between p-3 rounded-xl bg-rose-500/10 border border-rose-500/20"
          >
            <div className="flex items-center gap-2.5">
              <Frown className="w-5 h-5 text-rose-400"/>
              <span className="text-sm font-semibold text-rose-300">Négatif</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-rose-300">{negativePercent.toFixed(1)}%</span>
              <span className="text-xs text-white/50">({sentiment.negative.toLocaleString()})</span>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Stats */}
        <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-white/60">
            <MessageCircle className="w-3.5 h-3.5 text-orange-400"/>
            <span className="font-medium">Réactions en direct</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-400">
            <Users className="w-3.5 h-3.5"/>
            <span className="font-bold">{sentiment.totalFans} fans</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
