import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { MatchWidget } from './MatchWidget';
import { Menu, Sparkles } from 'lucide-react';

export function ChatInterface({ onToggleSidebar }) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'ai',
      content: "¡Hola! مرحبا! Olá! Bonjour! Bienvenue à votre compagnon IA personnel pour la Coupe du Monde 2030! 🇲🇦 🇪🇸 🇵🇹 Je peux vous aider avec les calendriers des matchs, les mises à jour en direct, les prédictions, les statistiques des équipes et les discussions des fans à travers le Maroc, l'Espagne et le Portugal. Que souhaitez-vous savoir? ⚽✨",
      timestamp: 'À l\'instant',
      sentiment: 'positive'
    }
  ]);
  
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (content) => {
    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      sentiment: 'positive'
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simuler une réponse IA
    setTimeout(() => {
      let aiResponse;
      
      if (content.toLowerCase().includes('match') || content.toLowerCase().includes('calendrier')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: (
            <div className="space-y-4">
              <p className="font-medium">Voici un match passionnant à ne pas manquer! 🎯</p>
              <MatchWidget
                team1={{ name: 'France', flag: '🇫🇷' }}
                team2={{ name: 'Allemagne', flag: '🇩🇪' }}
                date="18 Juin 2030 • 20:00 GMT"
                location="Madrid, Espagne"
                status="upcoming"
                stadium="Santiago Bernabéu"
              />
              <p className="text-sm text-white/70 mt-3">
                Ce sera un affrontement incroyable entre deux puissances européennes! 
                Voulez-vous que j'analyse leurs statistiques face-à-face?
              </p>
            </div>
          ),
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          showStats: false
        };
      } else if (content.toLowerCase().includes('préd') || content.toLowerCase().includes('gagnant')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Basé sur une analyse complète des performances d'équipe, de la forme des joueurs, des données historiques et des approches tactiques, j'ai calculé les probabilités pour les favoris du tournoi. L'Espagne (🇪🇸) montre la plus forte probabilité à 68% grâce à son avantage à domicile et sa forme récente. Le Portugal (🇵🇹) suit avec 52% avec son effectif équilibré, tandis que le Maroc (🇲🇦) a une solide chance de 45%, surtout avec le soutien passionné à domicile. Ces prédictions prennent en compte plus de 1 000 points de données avec une précision historique de 87%! 📊",
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          showStats: true,
          sentiment: 'positive'
        };
      } else if (content.toLowerCase().includes('stat') || content.toLowerCase().includes('équipe')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Je peux fournir des statistiques détaillées pour n'importe quelle équipe! Voici quelques informations fascinantes: Le Brésil mène en buts de tournoi (237), l'Allemagne détient le plus de titres de Coupe du Monde (4), et Cristiano Ronaldo du Portugal détient des records pour le plus de buts internationaux. Pour le Maroc et l'Espagne en tant qu'hôtes, les données historiques montrent que les nations hôtes remportent 30% de matchs en plus. Quelle équipe ou statistique spécifique souhaitez-vous explorer? 🏆📈",
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          showStats: true,
          sentiment: 'positive'
        };
      } else if (content.toLowerCase().includes('réaction') || content.toLowerCase().includes('fan') || content.toLowerCase().includes('sentiment')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Le sentiment des fans est incroyablement positif en ce moment! 📊 Dans les trois nations hôtes, 63,3% des fans expriment des émotions positives, avec un soutien passionné du Maroc (🇲🇦), de l'Espagne (🇪🇸) et du Portugal (🇵🇹). L'excitation monte à l'approche du tournoi! L'engagement sur les réseaux sociaux est à son plus haut niveau avec plus de 72K fans participant activement aux discussions. Le mélange culturel et l'unité à travers les trois pays hôtes sont vraiment inspirants! 🎉",
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          showStats: true,
          sentiment: 'positive'
        };
      } else {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          content: "Excellente question! Je suis là pour vous aider avec tout ce qui concerne la Coupe du Monde 2030. Je peux fournir:\n\n⚽ Mises à jour et scores des matchs en direct\n📅 Calendrier complet des matchs au Maroc, en Espagne et au Portugal\n📊 Statistiques des équipes et des joueurs\n🎯 Prédictions de matchs alimentées par l'IA\n💬 Sentiment et réactions des fans\n🌍 Support multilingue (Arabe, Espagnol, Portugais, Français)\n\nQuelle information spécifique souhaitez-vous explorer?",
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          showStats: false,
          sentiment: 'positive'
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Mobile Header */}
      <div className="lg:hidden border-b-2 border-white/10 backdrop-blur-xl bg-black/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-yellow-500 rounded-xl blur-md opacity-60 animate-pulse"/>
            <div className="relative bg-gradient-to-br from-emerald-600 via-cyan-600 to-yellow-600 p-2 rounded-xl shadow-lg">
              <Sparkles className="w-4 h-4 text-white drop-shadow-lg"/>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white/95">Compagnon IA</h2>
            <p className="text-xs text-white/50">Toujours là pour vous aider</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleSidebar}
          className="p-2 rounded-xl bg-white/10 hover:bg-white/15 border-2 border-white/15 transition-colors shadow-lg"
        >
          <Menu className="w-5 h-5 text-white/80"/>
        </motion.button>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              type={message.type}
              content={message.content}
              timestamp={message.timestamp}
              sentiment={message.sentiment}
              showStats={message.showStats}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input Area */}
      <div className="border-t-2 border-white/10 backdrop-blur-xl bg-black/30 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
