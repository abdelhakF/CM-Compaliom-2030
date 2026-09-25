# CM-Compaliom-2030

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![n8n](https://img.shields.io/badge/Automatisation-n8n-EA4B71?logo=n8n&logoColor=white)
![Groq](https://img.shields.io/badge/LLM-Groq%20Llama%203-F55036)

Assistant conversationnel IA autour de la **Coupe du Monde 2030** (co-organisée par le Maroc, l'Espagne et le Portugal) : une interface de chat futuriste côté client et un backend d'orchestration IA (n8n) qui répond aux questions des supporters en s'appuyant sur une base de connaissances vectorielle.

## Contexte

Projet réalisé dans le cadre d'un **Atelier Génie Informatique (GI)**, autour de l'intégration d'un agent IA conversationnel (LLM + RAG) piloté par un workflow no-code (n8n) et exposé à une interface web.

## Composants du dépôt

Le dépôt regroupe deux briques distinctes :

### 1. Backend IA — `back/`
Deux workflows **n8n** exportés en JSON :
- `workflow.json` — *Supporters Needs Research (Groq)* : recherche automatisée, pays par pays (Maroc, Espagne, Portugal), des besoins des supporters (tourisme, transport, hébergement) via un modèle Groq (`llama3-70b-8192`).
- `workflow_projet.json` — agent conversationnel exposé via un **webhook** (`POST /cm2030-chat`) : reçoit un message utilisateur + un `sessionId`, le fait transiter par un **AI Agent** n8n avec :
  - **Groq Chat Model** comme LLM,
  - **Simple Memory** pour la mémoire de conversation par session,
  - **Pinecone Vector Store** + **embeddings HuggingFace** pour répondre en s'appuyant sur une base documentaire (RAG),
  - puis renvoie la réponse au format JSON (avec en-têtes CORS).

### 2. Interface de chat — `AssistantIAn8n/Futuristic AI Chat Interface/`
Application **React 18 + Vite + Tailwind CSS** (scaffoldée via Figma Make, composants **shadcn/ui** et **Radix UI**), avec :
- `ChatInterface.jsx` / `ChatInput.jsx` / `MessageBubble.jsx` — l'interface de conversation,
- `MatchWidget.jsx`, `PredictionWidget.jsx`, `SentimentWidget.jsx` — widgets thématiques (matchs, pronostics, analyse de sentiment),
- `CulturalBackground.jsx`, `Header.jsx`, `Sidebar.jsx` — habillage et navigation.

> Note : dans l'état actuel du dépôt, l'interface est une maquette fonctionnelle autonome ; le branchement vers le webhook `cm2030-chat` du backend n8n reste à câbler (`fetch`/`axios` vers l'URL du workflow) pour rendre le chat bout-en-bout.

## Stack technique

| Composant | Techno |
|---|---|
| Frontend | React 18, Vite, TypeScript/JSX, Tailwind CSS, shadcn/ui, Radix UI |
| Orchestration IA | n8n (workflows JSON) |
| LLM | Groq (Llama 3 70B) |
| Recherche vectorielle (RAG) | Pinecone + embeddings HuggingFace |

## Structure du projet

```
CM-Compaliom-2030/
├── back/
│   ├── workflow.json           # Recherche des besoins supporters (Groq)
│   └── workflow_projet.json    # Agent conversationnel (webhook + RAG)
└── AssistantIAn8n/
    └── Futuristic AI Chat Interface/
        ├── src/app/            # Composants React du chat
        ├── src/styles/         # Thème / Tailwind
        └── package.json
```

## Démarrage

### Interface de chat

```bash
cd "AssistantIAn8n/Futuristic AI Chat Interface"
npm i
npm run dev
```

### Backend IA (n8n)

1. Importer `back/workflow_projet.json` (et éventuellement `back/workflow.json`) dans une instance n8n.
2. Configurer les identifiants **Groq**, **HuggingFace** et **Pinecone** utilisés par les nodes correspondants.
3. Activer le workflow : le webhook expose l'endpoint `POST /cm2030-chat` (`{ chatInput, sessionId }` → `{ text }`).

## Licence

Projet académique — usage pédagogique (Atelier GI).
