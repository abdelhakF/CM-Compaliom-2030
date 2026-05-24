import { motion } from 'motion/react';
import { Calendar, TrendingUp, Heart, BarChart3, Settings, MessageSquare, X } from 'lucide-react';
import { MatchWidget } from './MatchWidget';
import { PredictionWidget } from './PredictionWidget';
import { SentimentWidget } from './SentimentWidget';

export function Sidebar({ isOpen, onClose }) {
  const mockMatch = {
    team1: { name: 'Brésil', flag: '🇧🇷', score: 2 },
    team2: { name: 'Argentine', flag: '🇦🇷', score: 1 },
    date: '15 Juin 2030 • 18:00 GMT',
    location: 'Casablanca, Maroc',
    status: 'live',
    stadium: 'Grand Stade de Casablanca'
  };
  
  const mockPredictions = [
    { team: 'Espagne', flag: '🇪🇸', probability: 68 },
    { team: 'Portugal', flag: '🇵🇹', probability: 52 },
    { team: 'Maroc', flag: '🇲🇦', probability: 45 }
  ];
  
  const mockSentiment = {
    positive: 45600,
    neutral: 18300,
    negative: 8100,
    totalFans: '72K'
  };
  
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
      
      {/* Sidebar */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-black/50 backdrop-blur-2xl border-l-2 border-white/15 z-50 overflow-y-auto lg:relative lg:translate-x-0"
      >
        {/* Barre décorative latérale */}
        <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col">
          <div className="flex-1 bg-gradient-to-b from-emerald-500 to-green-600"/>
          <div className="flex-1 bg-gradient-to-b from-red-500 to-yellow-500"/>
          <div className="flex-1 bg-gradient-to-b from-cyan-500 to-blue-600"/>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-yellow-500/20 border-2 border-emerald-400/30 shadow-lg">
                <BarChart3 className="w-5 h-5 text-emerald-400"/>
              </div>
              <h2 className="font-bold text-white/95">Aperçus en Direct</h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/15 transition-colors text-white/70 hover:text-white/95 lg:hidden"
            >
              <X className="w-5 h-5"/>
            </motion.button>
          </div>
          
          {/* Actions Rapides */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { 
                icon: Calendar, 
                label: 'Calendrier', 
                color: 'from-cyan-500/20 to-blue-500/15',
                borderColor: 'border-cyan-400/30',
                iconColor: 'text-cyan-400'
              },
              { 
                icon: TrendingUp, 
                label: 'Prédictions', 
                color: 'from-purple-500/20 to-pink-500/15',
                borderColor: 'border-purple-400/30',
                iconColor: 'text-purple-400'
              },
              { 
                icon: Heart, 
                label: 'Sentiment', 
                color: 'from-rose-500/20 to-orange-500/15',
                borderColor: 'border-rose-400/30',
                iconColor: 'text-rose-400'
              },
              { 
                icon: MessageSquare, 
                label: 'Discussions', 
                color: 'from-emerald-500/20 to-teal-500/15',
                borderColor: 'border-emerald-400/30',
                iconColor: 'text-emerald-400'
              },
            ].map((action, idx) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-4 rounded-2xl backdrop-blur-xl bg-gradient-to-br ${action.color} border-2 ${action.borderColor} shadow-xl overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="relative flex flex-col items-center gap-2">
                  <action.icon className={`w-5 h-5 ${action.iconColor} drop-shadow-lg`}/>
                  <span className="text-xs font-bold text-white/90">{action.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Match en Direct */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"/>
              <h3 className="text-sm font-bold text-white/80">Match en Direct</h3>
            </div>
            <MatchWidget {...mockMatch} />
          </div>
          
          {/* Prédictions */}
          <div>
            <h3 className="text-sm font-bold text-white/80 mb-3">Favoris du Tournoi</h3>
            <PredictionWidget predictions={mockPredictions} />
          </div>
          
          {/* Sentiment */}
          <div>
            <h3 className="text-sm font-bold text-white/80 mb-3">Humeur des Fans Mondiale</h3>
            <SentimentWidget sentiment={mockSentiment} />
          </div>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6 border-t border-white/20"
          >
            <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white/8 hover:bg-white/15 border-2 border-white/15 hover:border-white/25 transition-all group shadow-lg">
              <Settings className="w-5 h-5 text-white/70 group-hover:text-white/95 group-hover:rotate-90 transition-all"/>
              <span className="text-sm font-medium text-white/80 group-hover:text-white/95 transition-colors">Paramètres & Préférences</span>
            </button>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}
