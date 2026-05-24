import { useState } from 'react';
import { CulturalBackground } from './components/CulturalBackground';
import { Header } from './components/Header';
import { ChatInterface } from './components/ChatInterface';
import { Sidebar } from './components/Sidebar';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Arrière-plan culturel combiné des trois pays */}
      <CulturalBackground />
      
      {/* Conteneur principal de l'app */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header avec thème des trois pays */}
        <Header />
        
        {/* Zone de contenu principale */}
        <div className="flex-1 flex overflow-hidden">
          {/* Interface de Chat */}
          <div className="flex-1 overflow-hidden">
            <ChatInterface onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          </div>
          
          {/* Sidebar - Masquée sur mobile, visible sur grands écrans */}
          <div className="hidden lg:block w-96 flex-shrink-0">
            <Sidebar isOpen={true} onClose={() => {}} />
          </div>
          
          {/* Sidebar Mobile */}
          <div className="lg:hidden">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
