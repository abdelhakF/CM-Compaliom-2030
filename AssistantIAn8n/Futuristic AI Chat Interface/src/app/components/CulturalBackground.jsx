export function CulturalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Stadium lights background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1685533604934-2fb55da6601c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGN1cCUyMHN0YWRpdW0lMjBsaWdodHN8ZW58MXx8fHwxNzY3OTAwMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Motifs culturels combinés - Plus visibles */}
      <svg className="absolute inset-0 w-full h-full opacity-8" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Motif Zellige Marocain (Vert émeraude et Or) */}
          <pattern id="zellige" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L75 25 L50 50 L25 25 Z" fill="#10b981" opacity="0.4"/>
            <path d="M0 50 L25 75 L50 50 L25 25 Z" fill="#fbbf24" opacity="0.35"/>
            <path d="M50 50 L75 75 L50 100 L25 75 Z" fill="#059669" opacity="0.4"/>
            <path d="M50 50 L75 25 L100 50 L75 75 Z" fill="#f59e0b" opacity="0.35"/>
            <circle cx="50" cy="50" r="10" fill="#fbbf24" opacity="0.6"/>
            <circle cx="25" cy="25" r="7" fill="#10b981" opacity="0.5"/>
            <circle cx="75" cy="25" r="7" fill="#059669" opacity="0.5"/>
            <circle cx="25" cy="75" r="7" fill="#f59e0b" opacity="0.5"/>
            <circle cx="75" cy="75" r="7" fill="#fbbf24" opacity="0.5"/>
            <path d="M50 20 L50 30 M20 50 L30 50 M50 70 L50 80 M70 50 L80 50" stroke="#10b981" strokeWidth="2" opacity="0.4"/>
          </pattern>
          
          {/* Motif Azulejos Portugais (Bleu océan) */}
          <pattern id="azulejos" x="50" y="50" width="90" height="90" patternUnits="userSpaceOnUse">
            <rect x="5" y="5" width="80" height="80" fill="none" stroke="#0ea5e9" strokeWidth="2.5" opacity="0.4"/>
            <circle cx="45" cy="45" r="30" fill="none" stroke="#06b6d4" strokeWidth="2.5" opacity="0.5"/>
            <path d="M45 15 Q65 45 45 75 Q25 45 45 15" fill="#0284c7" opacity="0.3"/>
            <path d="M15 45 Q45 25 75 45 Q45 65 15 45" fill="#0ea5e9" opacity="0.3"/>
            <circle cx="45" cy="45" r="8" fill="#06b6d4" opacity="0.6"/>
            <path d="M45 10 L45 25 M10 45 L25 45 M45 65 L45 80 M65 45 L80 45" stroke="#0284c7" strokeWidth="2" opacity="0.4"/>
          </pattern>
          
          {/* Motif Espagnol (Rouge et Jaune) */}
          <pattern id="spanish" x="25" y="25" width="110" height="110" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="90" height="90" fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.35" rx="10"/>
            <rect x="25" y="25" width="60" height="60" fill="none" stroke="#fbbf24" strokeWidth="3" opacity="0.4" rx="8"/>
            <circle cx="55" cy="55" r="15" fill="#f59e0b" opacity="0.35"/>
            <path d="M55 30 L65 45 L55 55 L45 45 Z" fill="#ef4444" opacity="0.4"/>
            <path d="M30 55 L45 65 L55 55 L45 45 Z" fill="#fbbf24" opacity="0.4"/>
            <path d="M55 55 L65 70 L55 80 L45 70 Z" fill="#f97316" opacity="0.35"/>
            <path d="M55 55 L70 45 L80 55 L70 65 Z" fill="#fbbf24" opacity="0.4"/>
          </pattern>
        </defs>
        
        {/* Appliquer les trois motifs */}
        <rect width="100%" height="100%" fill="url(#zellige)"/>
        <rect width="100%" height="100%" fill="url(#azulejos)"/>
        <rect width="100%" height="100%" fill="url(#spanish)"/>
      </svg>
      
      {/* Gradients combinés des trois pays */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-blue-950/25 to-red-950/25"/>
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-950/20 via-cyan-950/20 to-green-950/25"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"/>
      
      {/* Effets de lumière animés - Couleurs des trois pays */}
      {/* Maroc - Vert émeraude */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"/>
      
      {/* Portugal - Bleu océan */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}/>
      
      {/* Espagne - Rouge et Jaune */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-red-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}/>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}/>
      
      {/* Centre - Or fusionné */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-amber-500/8 via-emerald-500/5 to-transparent rounded-full blur-2xl"/>
    </div>
  );
}
