# Lineage II — Shield of the Kingdom

Cinematic landing page for a Lineage II game server, built with Next.js. Dark
gothic look with golden accents, an epic display typeface and smooth scroll
animations.

🔗 **Live:** https://lineage-ii.vercel.app

## ✨ Sections

- **Hero** — full-screen video background with call-to-actions
- **Server stats** — live rates and player count
- **Features** — what makes the world unique
- **Legendary Classes** — character roster cards with roles and skills
- **Epic Bosses** — raid schedule and rewards
- **Community** — download & Discord call-to-action
- **Footer** — navigation, socials and legal

## 🛠️ Stack

| Categoría   | Tecnologías                       |
| ----------- | --------------------------------- |
| Framework   | Next.js 14 (App Router), React 18 |
| Lenguaje    | TypeScript                        |
| Estilos     | Tailwind CSS                      |
| Animaciones | Framer Motion                     |
| Iconos      | react-icons                       |
| Tipografía  | Cinzel + Roboto (next/font)       |
| Despliegue  | Vercel                            |

## 🚀 Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # análisis estático
```

## 📁 Estructura

```
src/
├── app/                  # layout, estilos globales, metadatos
├── components/           # Navbar, Hero, Stats, Features, CardGrid, Card,
│                         # EpicBosses, Community, Footer, helpers
└── data/                 # nav, features, bosses, classes
```

## ⚖️ Aviso

Fan project. Not affiliated with or endorsed by NCSOFT. Lineage II and all
related assets are property of their respective owners.
