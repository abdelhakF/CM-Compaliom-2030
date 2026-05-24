import { Trophy, Globe, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="relative border-b border-white/10 backdrop-blur-xl bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo et Titre avec thème fusionné */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Glow combiné des trois pays */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 via-red-500 to-yellow-500 rounded-2xl blur-xl opacity-60 animate-pulse"/>
              <div className="relative bg-gradient-to-br from-emerald-600 via-cyan-600 via-red-600 to-yellow-600 p-3 rounded-2xl shadow-2xl">
                <Trophy className="w-6 h-6 text-white" strokeWidth={2.5}/>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  Coupe du Monde 2030
                </h1>
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse"/>
              </div>
              <p className="text-xs text-white/50 mt-0.5 flex items-center gap-1">
                <span className="text-emerald-400">Maroc</span>
                <span className="text-white/30">•</span>
                <span className="text-red-400">Espagne</span>
                <span className="text-white/30">•</span>
                <span className="text-cyan-400">Portugal</span>
              </p>
            </div>
          </div>
          
          {/* Pays Hôtes avec design amélioré */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Maroc */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-br from-emerald-500/15 to-green-500/10 backdrop-blur-sm border border-emerald-500/30 shadow-lg hover:shadow-emerald-500/20 transition-all">
              <span className="text-2xl drop-shadow-lg">🇲🇦</span>
              <div>
                <p className="text-xs font-semibold text-emerald-400">Maroc</p>
                <p className="text-[10px] text-emerald-300/60">المغرب</p>
              </div>
            </div>
            
            {/* Espagne */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-br from-red-500/15 to-yellow-500/10 backdrop-blur-sm border border-red-500/30 shadow-lg hover:shadow-red-500/20 transition-all">
              <span className="text-2xl drop-shadow-lg">🇪🇸</span>
              <div>
                <p className="text-xs font-semibold text-red-400">Espagne</p>
                <p className="text-[10px] text-yellow-300/60">España</p>
              </div>
            </div>
            
            {/* Portugal */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20 transition-all">
              <span className="text-2xl drop-shadow-lg">🇵🇹</span>
              <div>
                <p className="text-xs font-semibold text-cyan-400">Portugal</p>
                <p className="text-[10px] text-cyan-300/60">Portugal</p>
              </div>
            </div>
          </div>
          
          {/* Version mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <span className="text-xl">🇲🇦</span>
            <span className="text-xl">🇪🇸</span>
            <span className="text-xl">🇵🇹</span>
          </div>
          
          {/* Sélecteur de langue */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all cursor-pointer shadow-lg">
            <Globe className="w-4 h-4 text-white/70"/>
            <span className="text-sm font-medium text-white/90">FR</span>
          </div>
        </div>
      </div>
      
      {/* Barre décorative avec les couleurs des trois pays */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600"/>
        <div className="flex-1 bg-gradient-to-r from-red-500 to-yellow-500"/>
        <div className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600"/>
      </div>
    </header>
  );
}
