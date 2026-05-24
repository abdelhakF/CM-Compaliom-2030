import { motion } from 'motion/react';
import { TrendingUp, BarChart3, Target, Zap } from 'lucide-react';

export function PredictionWidget({ predictions }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-emerald-500/15 border-2 border-purple-400/30 shadow-2xl"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none"/>
      
      {/* Barre décorative */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500"/>
      
      <div className="relative p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/25 to-blue-500/25 border-2 border-purple-400/30 shadow-lg">
            <TrendingUp className="w-5 h-5 text-purple-300"/>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white/95">Prédictions IA</h3>
            <p className="text-xs text-white/60 mt-0.5">Analyse avancée en temps réel</p>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse"/>
          </div>
        </div>
        
        {/* Predictions */}
        <div className="space-y-4">
          {predictions.map((pred, idx) => (
            <motion.div
              key={pred.team}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl drop-shadow-lg">{pred.flag}</span>
                <span className="text-sm font-bold text-white/90">{pred.team}</span>
                <span className="ml-auto text-xl font-black bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  {pred.probability}%
                </span>
              </div>
              
              {/* Progress Bar améliorée */}
              <div className="relative h-3 rounded-full bg-white/10 overflow-hidden border border-white/20 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pred.probability}%` }}
                  transition={{ delay: 0.2 + (0.1 * idx), duration: 0.8, ease: 'easeOut' }}
                  className={`
                    absolute inset-y-0 left-0 rounded-full shadow-lg
                    ${idx === 0 ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-emerald-500/50' : ''}
                    ${idx === 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-400 shadow-cyan-500/50' : ''}
                    ${idx === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-400 shadow-purple-500/50' : ''}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"/>
                  <div className="absolute inset-0 animate-pulse bg-white/10"/>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Footer */}
        <div className="mt-5 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-white/60">
            <BarChart3 className="w-3.5 h-3.5 text-purple-400"/>
            <span className="font-medium">Basé sur 1,000+ données</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Target className="w-3.5 h-3.5"/>
            <span className="font-bold">87% précision</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
