import { motion } from 'motion/react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function MatchWidget({ team1, team2, date, location, status, stadium }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/12 to-white/5 border-2 border-white/25 shadow-2xl"
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent pointer-events-none"/>
      
      {/* Barre décorative en haut avec couleurs des pays */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600"/>
        <div className="flex-1 bg-gradient-to-r from-red-500 to-yellow-500"/>
        <div className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600"/>
      </div>
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`
          px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-2 shadow-lg
          ${status === 'live' ? 'bg-gradient-to-r from-red-500/30 to-red-600/30 border-2 border-red-500/60 text-red-300' : ''}
          ${status === 'upcoming' ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/60 text-cyan-300' : ''}
          ${status === 'finished' ? 'bg-white/15 border-2 border-white/30 text-white/70' : ''}
        `}>
          {status === 'live' && (
            <>
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"/>
              EN DIRECT
            </>
          )}
          {status === 'upcoming' && 'À VENIR'}
          {status === 'finished' && 'TERMINÉ'}
        </div>
      </div>
      
      <div className="relative p-6">
        {/* Teams */}
        <div className="flex items-center justify-between mb-5">
          {/* Team 1 */}
          <div className="flex items-center gap-3 flex-1">
            <div className="text-5xl drop-shadow-2xl">{team1.flag}</div>
            <div>
              <p className="font-bold text-white/95 text-lg">{team1.name}</p>
              {status === 'live' && <p className="text-xs text-emerald-400 mt-1">Domicile</p>}
            </div>
          </div>
          
          {/* Score ou VS */}
          <div className="flex items-center gap-4 px-5">
            {(status === 'live' || status === 'finished') && team1.score !== undefined && team2.score !== undefined ? (
              <div className="flex items-center gap-4">
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-4xl font-black text-white/95 min-w-[2ch] text-center drop-shadow-lg"
                >
                  {team1.score}
                </motion.span>
                <span className="text-white/40 text-2xl font-bold">-</span>
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-4xl font-black text-white/95 min-w-[2ch] text-center drop-shadow-lg"
                >
                  {team2.score}
                </motion.span>
              </div>
            ) : (
              <div className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border-2 border-white/20 shadow-lg">
                <span className="text-base font-black text-white/80">VS</span>
              </div>
            )}
          </div>
          
          {/* Team 2 */}
          <div className="flex items-center gap-3 flex-1 flex-row-reverse">
            <div className="text-5xl drop-shadow-2xl">{team2.flag}</div>
            <div className="text-right">
              <p className="font-bold text-white/95 text-lg">{team2.name}</p>
              {status === 'live' && <p className="text-xs text-cyan-400 mt-1">Extérieur</p>}
            </div>
          </div>
        </div>
        
        {/* Match Info */}
        <div className="space-y-2.5 pt-4 border-t border-white/20">
          <div className="flex items-center gap-2.5 text-sm text-white/70">
            <Calendar className="w-4 h-4 text-emerald-400"/>
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-cyan-400"/>
            <span className="font-medium">{location}</span>
            {stadium && <span className="text-white/50">• {stadium}</span>}
          </div>
        </div>
        
        {status === 'live' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-yellow-400"/>
            <span className="text-sm text-white/70">
              <span className="text-yellow-400 font-bold">127.5K</span> supporters en ligne
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
