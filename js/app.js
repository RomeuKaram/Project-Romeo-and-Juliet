// ROMEU & TALITA — álbum em JavaScript puro (sem React ou JSX).
// Edite títulos e imagens na seção CONFIGURAÇÃO DOS SLIDES.

const THEMES = {
  "corinthians": {
    "key": "corinthians",
    "fontTitle": "'Bebas Neue', sans-serif",
    "fontSubtitle": "'Bebas Neue', sans-serif",
    "bg": "linear-gradient(145deg, #000000 0%, #111111 20%, #1a1a1a 45%, #f5f5f5 75%, #ffffff 100%)",
    "text": "#f2f2f2",
    "titleColor": "#FFCC00",
    "accent": "#FFCC00",
    "description": "Timão até o fim",
    "phrase": "Do terrão ao mundão. Cada foto nossa tem o preto e branco no coração e o dourado de campeão."
  },
  "quadrinhos": {
    "key": "quadrinhos",
    "fontTitle": "'Bangers', cursive",
    "fontSubtitle": "'Bangers', cursive",
    "bg": "linear-gradient(135deg, #FFEB00 0%, #FFD700 100%)",
    "text": "#000000",
    "titleColor": "#FF0000",
    "accent": "#000000",
    "description": "POW! Super casal",
    "phrase": "Bang! Pow! Nossa história em quadrinhos favorita — dois heróis contra o mundo."
  },
  "coringa": {
    "key": "coringa",
    "fontTitle": "'Creepster', cursive",
    "fontSubtitle": "'Bungee', cursive",
    "bg": "linear-gradient(135deg, #4B0082 0%, #2d0050 35%, #1a0033 55%, #00FF7F 100%)",
    "text": "#ffffff",
    "titleColor": "#00FF7F",
    "accent": "#00FF7F",
    "description": "Caos e amor",
    "phrase": "Por que tão sérios? Nós dois no caos, rindo juntos até o último ato."
  },
  "aot": {
    "key": "aot",
    "fontTitle": "'Anton', sans-serif",
    "fontSubtitle": "'Anton', sans-serif",
    "bg": "linear-gradient(180deg, #2F3532 0%, #1e2321 40%, #3a0a0a 80%, #8B0000 100%)",
    "text": "#e8e8e8",
    "titleColor": "#ff2a2a",
    "accent": "#8B0000",
    "description": "Shinzou wo Sasageyo!",
    "phrase": "Lutamos contra titãs, mas o maior deles é ficar longe um do outro. Seguimos em frente."
  },
  "winx": {
    "key": "winx",
    "fontTitle": "'Great Vibes', cursive",
    "fontSubtitle": "'Fredoka', sans-serif",
    "bg": "linear-gradient(135deg, #FFB6E6 0%, #ffc6ec 25%, #d4b5ff 50%, #A8E6FF 100%)",
    "text": "#5a189a",
    "titleColor": "#9d4edd",
    "accent": "#ff70d9",
    "description": "Magia e brilho",
    "phrase": "Enchantix! Transformação de fada, brilho infinito e um amor que voa."
  },
  "demon": {
    "key": "demon",
    "fontTitle": "'Cinzel Decorative', serif",
    "fontSubtitle": "'Cinzel', serif",
    "bg": "radial-gradient(circle at 50% 30%, #6b0000 0%, #3a0000 25%, #1A0000 60%, #000000 100%)",
    "text": "#ffd6d6",
    "titleColor": "#FF2400",
    "accent": "#FF2400",
    "description": "Respiração do fogo",
    "phrase": "Como Tanjiro e Nezuko, protegendo um ao outro com respiração total... do amor."
  },
  "dbAnime": {
    "key": "dbAnime",
    "fontTitle": "'Luckiest Guy', cursive",
    "fontSubtitle": "'Luckiest Guy', cursive",
    "bg": "linear-gradient(135deg, #FF8C00 0%, #FFA500 25%, #ff6a00 45%, #0070FF 85%, #0047ab 100%)",
    "text": "#ffffff",
    "titleColor": "#ffffff",
    "accent": "#FF8C00",
    "description": "Kamehameha!",
    "phrase": "Juntamos as esferas, pedimos o mesmo desejo: mais uma aventura juntos."
  },
  "dbLive": {
    "key": "dbLive",
    "fontTitle": "'Russo One', sans-serif",
    "fontSubtitle": "'Russo One', sans-serif",
    "bg": "linear-gradient(135deg, #E65100 0%, #BF360C 50%, #3e1f0a 100%)",
    "text": "#ffe0b2",
    "titleColor": "#FF8C00",
    "accent": "#E65100",
    "description": "Live action saga",
    "phrase": "Versão live-action do nosso poder. Mais real, mais intenso, mesmo ki."
  },
  "dnd": {
    "key": "dnd",
    "fontTitle": "'MedievalSharp', cursive",
    "fontSubtitle": "'Cinzel', serif",
    "bg": "radial-gradient(ellipse at center, #5D2E0F 0%, #3D1C02 45%, #1a0a00 100%)",
    "text": "#f5deb3",
    "titleColor": "#D4AF37",
    "accent": "#D4AF37",
    "description": "Role um D20",
    "phrase": "Rolamos 20 natural quando nos encontramos. A campanha mais linda começou."
  },
  "ghibli": {
    "key": "ghibli",
    "fontTitle": "'Patrick Hand', cursive",
    "fontSubtitle": "'Caveat', cursive",
    "bg": "linear-gradient(135deg, #E6F4EA 0%, #c8e6c9 30%, #a5d6a7 60%, #81C784 100%)",
    "text": "#2E7D32",
    "titleColor": "#1B5E20",
    "accent": "#81C784",
    "description": "Vento e memórias",
    "phrase": "Se fosse um filme do Miyazaki, seria sobre uma tarde chuvosa e nós dois no Totoro."
  },
  "gta": {
    "key": "gta",
    "fontTitle": "'Anton', sans-serif",
    "fontSubtitle": "'Bebas Neue', sans-serif",
    "bg": "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 70%, #CCFF00 95%)",
    "text": "#CCFF00",
    "titleColor": "#CCFF00",
    "accent": "#CCFF00",
    "description": "WANTED",
    "phrase": "Missão: roubar o coração um do outro. Status: WANTED em Los Santos e em todo lugar."
  },
  "looney": {
    "key": "looney",
    "fontTitle": "'Fredoka One', cursive",
    "fontSubtitle": "'Fredoka', sans-serif",
    "bg": "linear-gradient(180deg, #00A8FF 0%, #57c7ff 35%, #b3e5fc 65%, #FFD700 100%)",
    "text": "#000000",
    "titleColor": "#000000",
    "accent": "#FFD700",
    "description": "Isso é tudo, pessoal!",
    "phrase": "Coelhos, patos e muita confusão. Nosso amor é desenho animado que nunca acaba."
  },
  "mario": {
    "key": "mario",
    "fontTitle": "'Press Start 2P', cursive",
    "fontSubtitle": "'Press Start 2P', cursive",
    "bg": "linear-gradient(180deg, #049CD8 0%, #5cc8ff 30%, #E52521 70%, #8B0000 100%)",
    "text": "#ffffff",
    "titleColor": "#FFD700",
    "accent": "#E52521",
    "description": "Level up!",
    "phrase": "Player 1 e Player 2. Pulando juntos por todos os mundos até salvar o final feliz."
  },
  "matrix": {
    "key": "matrix",
    "fontTitle": "'Share Tech Mono', monospace",
    "fontSubtitle": "'Share Tech Mono', monospace",
    "bg": "linear-gradient(180deg, #000000 0%, #001100 50%, #000000 100%)",
    "text": "#00FF41",
    "titleColor": "#00FF41",
    "accent": "#00FF41",
    "description": "Follow the white rabbit",
    "phrase": "Você tomaria a pílula vermelha comigo? Escolhemos acordar juntos na realidade."
  },
  "incredibles": {
    "key": "incredibles",
    "fontTitle": "'Fredoka One', cursive",
    "fontSubtitle": "'Fredoka', sans-serif",
    "bg": "linear-gradient(135deg, #CC0000 0%, #8B0000 30%, #1a0000 60%, #000000 100%)",
    "text": "#FFD700",
    "titleColor": "#FFD700",
    "accent": "#CC0000",
    "description": "Sem limites",
    "phrase": "Sem capa, mas com superpoder: fazer o outro sorrir mesmo no caos."
  },
  "spiderman": {
    "key": "spiderman",
    "fontTitle": "'Bangers', cursive",
    "fontSubtitle": "'Caveat', cursive",
    "bg": "radial-gradient(circle at 30% 20%, #1E90FF 0%, #104e8b 30%, #B22222 70%, #5a0000 100%)",
    "text": "#ffffff",
    "titleColor": "#ffffff",
    "accent": "#1E90FF",
    "description": "Com grandes poderes...",
    "phrase": "Em todo universo, em toda linha do tempo, é você. Minha MJ, meu lar."
  },
  "lotr": {
    "key": "lotr",
    "fontTitle": "'Cinzel Decorative', serif",
    "fontSubtitle": "'Cinzel', serif",
    "bg": "radial-gradient(ellipse at center, #3d2816 0%, #2B1B0E 25%, #1A2B1A 60%, #0a0a0a 100%)",
    "text": "#D4AF37",
    "titleColor": "#FFD700",
    "accent": "#D4AF37",
    "description": "Um anel para todos",
    "phrase": "Nem Mordor nos separa. Levo você até o fim, Sam e Frodo que somos."
  },
  "simpsons": {
    "key": "simpsons",
    "fontTitle": "'Luckiest Guy', cursive",
    "fontSubtitle": "'Patrick Hand', cursive",
    "bg": "linear-gradient(135deg, #FFD90F 0%, #ffea70 50%, #2E86AB 85%, #1a4a5a 100%)",
    "text": "#000000",
    "titleColor": "#000000",
    "accent": "#2E86AB",
    "description": "D'oh!",
    "phrase": "Mais uma foto amarela pra coleção da família mais icônica da TV."
  },
  "witcher": {
    "key": "witcher",
    "fontTitle": "'Cinzel', serif",
    "fontSubtitle": "'MedievalSharp', cursive",
    "bg": "linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 40%, #3a0a0a 80%, #8B0000 100%)",
    "text": "#C0C0C0",
    "titleColor": "#e0e0e0",
    "accent": "#8B0000",
    "description": "Toss a coin",
    "phrase": "Monstros lá fora, mas aqui dentro só tem poção de amor e uma moeda pro seu bruxo."
  },
  "deadpool": {
    "key": "deadpool",
    "fontTitle": "'Bangers', cursive",
    "fontSubtitle": "'Anton', sans-serif",
    "bg": "linear-gradient(135deg, #9A0000 0%, #5a0000 40%, #000000 75%, #1a0000 100%)",
    "text": "#ffffff",
    "titleColor": "#ffffff",
    "accent": "#9A0000",
    "description": "Maximum effort",
    "phrase": "Quarto muro? Quebrado. Regras? Ignoradas. Só nós dois vale a pena."
  },
  "moto": {
    "key": "moto",
    "fontTitle": "'Rye', serif",
    "fontSubtitle": "'Special Elite', cursive",
    "bg": "linear-gradient(135deg, #2B1B12 0%, #1a0f0a 50%, #3a3a3a 90%, #C0C0C0 100%)",
    "text": "#E0C097",
    "titleColor": "#FFDAB9",
    "accent": "#C0C0C0",
    "description": "Estrada sem fim",
    "phrase": "Capacete, jaqueta e estrada. O vento leva, mas a gente fica."
  },
  "romeujulieta": {
    "key": "romeujulieta",
    "fontTitle": "'Great Vibes', cursive",
    "fontSubtitle": "'Cormorant Garamond', serif",
    "bg": "linear-gradient(135deg, #4A0E0E 0%, #2a0a0a 30%, #5a1a1a 60%, #FFDAB9 150%)",
    "text": "#FFDAB9",
    "titleColor": "#FFDAB9",
    "accent": "#FFDAB9",
    "description": "Amor eterno",
    "phrase": "Ó Romeu, Romeu, por que és tu Romeu? Porque nosso final é diferente: feliz."
  },
  "superheroes": {
    "key": "superheroes",
    "fontTitle": "'Bangers', cursive",
    "fontSubtitle": "'Anton', sans-serif",
    "bg": "linear-gradient(135deg, #0A1931 0%, #162a5c 35%, #c00000 70%, #FFD700 100%)",
    "text": "#FFD700",
    "titleColor": "#FFD700",
    "accent": "#FF0000",
    "description": "Liga do amor",
    "phrase": "Nem Marvel nem DC definem. A gente é a própria liga, invencível juntos."
  },
  "corinthiansSimpsons": {
    "key": "corinthiansSimpsons",
    "fontTitle": "'Bebas Neue', 'Luckiest Guy', sans-serif",
    "fontSubtitle": "'Luckiest Guy', cursive",
    "bg": "linear-gradient(135deg, #000000 0%, #1a1a1a 30%, #FFD90F 70%, #FFCC00 100%)",
    "text": "#ffffff",
    "titleColor": "#FFD90F",
    "accent": "#FFCC00",
    "description": "Timão até nos desenhos",
    "phrase": "Homer no Timão? Só se for pra gritar gol com a Talita do lado. Vai Corinthians!"
  }
};

// ===== CONFIGURAÇÃO DOS SLIDES =====
const SLIDES = [
  {
      "id": 1,
      "title": "romeu e julieta",
      "imageSrc": "./images/romeu e julieta.webp",
      "fileName": "romeu e julieta",
      "themeKey": "romeujulieta"
    },
  {
      "id": 2,
      "title": "estilo ghibli",
      "imageSrc": "./images/estilo ghibli.webp",
      "fileName": "estilo ghibli",
      "themeKey": "ghibli"
    },
  {
      "id": 3,
      "title": "capa quadrinhos super casal",
      "imageSrc": "./images/capa quadrinhos super casal.webp",
      "fileName": "capa quadrinhos super casal",
      "themeKey": "quadrinhos"
    },
  {
      "id": 4,
      "title": "estilo clube das winx",
      "imageSrc": "./images/estilo clube das winx.webp",
      "fileName": "estilo clube das winx",
      "themeKey": "winx"
    },
  {
      "id": 5,
      "title": "estilo os incriveis",
      "imageSrc": "./images/estilo os incriveis.webp",
      "fileName": "estilo os incriveis",
      "themeKey": "incredibles"
    },
  {
      "id": 6,
      "title": "estilo looney tunes",
      "imageSrc": "./images/estilo looney tunes.webp",
      "fileName": "estilo looney tunes",
      "themeKey": "looney"
    },
  {
      "id": 7,
      "title": "estilo simpsons",
      "imageSrc": "./images/estilo simpsons.webp",
      "fileName": "estilo simpsons",
      "themeKey": "simpsons"
    },
  {
      "id": 8,
      "title": "estilo mario",
      "imageSrc": "./images/estilo mario.webp",
      "fileName": "estilo mario",
      "themeKey": "mario"
    },
  {
      "id": 9,
      "title": "estilo dragon ball anime",
      "imageSrc": "./images/estilo dragon ball anime.webp",
      "fileName": "estilo dragon ball anime",
      "themeKey": "dbAnime"
    },
  {
      "id": 10,
      "title": "estilo dragon ball live action",
      "imageSrc": "./images/estilo dragon ball live action.webp",
      "fileName": "estilo dragon ball live action",
      "themeKey": "dbLive"
    },
  {
      "id": 11,
      "title": "estilo demon slayer",
      "imageSrc": "./images/estilo demon slayer.webp",
      "fileName": "estilo demon slayer",
      "themeKey": "demon"
    },
  {
      "id": 12,
      "title": "estilo attack on titan",
      "imageSrc": "./images/estilo attack on titan.webp",
      "fileName": "estilo attack on titan",
      "themeKey": "aot"
    },
  {
      "id": 13,
      "title": "estilo peter e mary jane",
      "imageSrc": "./images/estilo peter e mary jane.webp",
      "fileName": "estilo peter e mary jane",
      "themeKey": "spiderman"
    },
  {
      "id": 14,
      "title": "estilo peter e MJ",
      "imageSrc": "./images/estilo peter e MJ.webp",
      "fileName": "estilo peter e MJ",
      "themeKey": "spiderman"
    },
  {
      "id": 15,
      "title": "Super Heroes",
      "imageSrc": "./images/Super Heroes.webp",
      "fileName": "Super Heroes",
      "themeKey": "superheroes"
    },
  {
      "id": 16,
      "title": "coringa e arlequina",
      "imageSrc": "./images/coringa e arlequina.webp",
      "fileName": "coringa e arlequina",
      "themeKey": "coringa"
    },
  {
      "id": 17,
      "title": "estilo wade deadpool e vanessa",
      "imageSrc": "./images/estilo wade deadpool e vanessa.webp",
      "fileName": "estilo wade deadpool e vanessa",
      "themeKey": "deadpool"
    },
  {
      "id": 18,
      "title": "estilo GTA",
      "imageSrc": "./images/estilo GTA.webp",
      "fileName": "estilo GTA",
      "themeKey": "gta"
    },
  {
      "id": 19,
      "title": "motoqueiros",
      "imageSrc": "./images/motoqueiros.webp",
      "fileName": "motoqueiros",
      "themeKey": "moto"
    },
  {
      "id": 20,
      "title": "estilo matrix",
      "imageSrc": "./images/estilo matrix.webp",
      "fileName": "estilo matrix",
      "themeKey": "matrix"
    },
  {
      "id": 21,
      "title": "estilo dungeons and dragons",
      "imageSrc": "./images/estilo dungeons and dragons.webp",
      "fileName": "estilo dungeons and dragons",
      "themeKey": "dnd"
    },
  {
      "id": 22,
      "title": "estilo the witcher",
      "imageSrc": "./images/estilo the witcher.webp",
      "fileName": "estilo the witcher",
      "themeKey": "witcher"
    },
  {
      "id": 23,
      "title": "senhor dos aneis",
      "imageSrc": "./images/senhor dos aneis.webp",
      "fileName": "senhor dos aneis",
      "themeKey": "lotr"
    },
  {
      "id": 24,
      "title": "estilo senhor dos aneis self",
      "imageSrc": "./images/estilo senhor dos aneis self.webp",
      "fileName": "estilo senhor dos aneis self",
      "themeKey": "lotr"
    },
  {
      "id": 25,
      "title": "estilo senhor dos aneis",
      "imageSrc": "./images/estilo senhor dos aneis.webp",
      "fileName": "estilo senhor dos aneis",
      "themeKey": "lotr"
    },
  {
      "id": 26,
      "title": "arena timão",
      "imageSrc": "./images/arena timão.webp",
      "fileName": "arena timão",
      "themeKey": "corinthians"
    },
  {
      "id": 27,
      "title": "simpsons arena corinthians",
      "imageSrc": "./images/simpsons arena corinthians.webp",
      "fileName": "simpsons arena corinthians",
      "themeKey": "corinthiansSimpsons"
    },
  {
      "id": 28,
      "title": "vai corinthians",
      "imageSrc": "./images/vai corinthians.webp",
      "fileName": "vai corinthians",
      "themeKey": "corinthians"
    }
];

const root = document.querySelector("#root");
let current = 0, startX = null, startY = null;
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const slide = () => SLIDES[current];
const theme = () => THEMES[slide().themeKey] || THEMES.corinthians;
const go = i => { current = (i + SLIDES.length) % SLIDES.length; render(); preload(); };
const previous = () => go(current - 1);
const next = () => go(current + 1);
function preload(){ [-1,1].forEach(n=>{const img=new Image();img.src=SLIDES[(current+n+SLIDES.length)%SLIDES.length].imageSrc;}); }

function render(){
 const p=slide(), t=theme(), n=String(current+1).padStart(2,"0"), total=String(SLIDES.length).padStart(2,"0");
 const dark=["quadrinhos","winx","ghibli","looney","simpsons"].includes(t.key);
 const shadow=["quadrinhos","looney","simpsons"].includes(t.key)?"3px 3px 0 #000":t.key==="matrix"?`0 0 12px ${t.accent}`:t.key==="mario"?"4px 4px 0 #000":"0 8px 30px rgba(0,0,0,.25)";
 const texture=t.key==="quadrinhos"?"radial-gradient(#000 2.5px,transparent 3px)":t.key==="matrix"?"repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,65,.04) 2px,rgba(0,255,65,.04) 3px)":"none";
 root.innerHTML=`
 <div class="album-shell relative flex flex-col select-none overflow-x-clip" style="box-sizing:border-box;background:${t.bg};color:${t.text}">
 <div class="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" style="background-image:${texture};background-size:${t.key==="quadrinhos"?"18px 18px":"auto"}"></div>
 <div class="pointer-events-none absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full blur-[90px] opacity-30" style="background:${t.accent}"></div>
 <div class="pointer-events-none absolute -bottom-32 -right-32 w-[50vw] h-[50vw] rounded-full blur-[80px] opacity-20" style="background:${t.titleColor}"></div>
 <header class="relative z-20 w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
 <div class="flex flex-col leading-none"><span class="text-[11px] sm:text-xs tracking-[0.25em] uppercase opacity-70 font-bold" style="font-family:'Bebas Neue',sans-serif">ÁLBUM DE FOTOS</span><span class="text-[18px] sm:text-[22px] font-black tracking-tight leading-none mt-0.5" style="font-family:'Bebas Neue',sans-serif">ROMEU &amp; TALITA</span></div>
 <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"><div class="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black tracking-[0.18em] border shadow-sm" style="background:#FFCC00;color:#000;font-family:'Bebas Neue',sans-serif">${n} / ${total}</div></div><div class="w-[120px] sm:w-[160px]"></div></header>
 <main class="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 pb-6 gap-6 lg:gap-10 max-w-[1600px] mx-auto w-full">
 <button data-action="previous" aria-label="Anterior" class="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border bg-black/20 backdrop-blur-md text-xl" style="border-color:#ffffff26;color:${t.text}">‹</button>
 <section class="w-full lg:w-[52%] flex flex-col items-center"><div class="relative w-full max-w-[520px] aspect-[4/5]" data-theme="${esc(t.key)}">
 <div class="absolute inset-0 rounded-[inherit] blur-[18px] opacity-40 -z-10" style="background:${t.accent}"></div><div class="photo-frame frame-animate relative w-full h-full overflow-hidden bg-black/30 backdrop-blur-sm flex flex-col"><div class="flex-1 relative w-full h-full overflow-hidden">
 <img id="album-photo" src="${esc(p.imageSrc)}" alt="${esc(p.title)}" class="w-full h-full object-cover" draggable="false" loading="eager" decoding="async" fetchpriority="high">
 <div id="image-error" class="hidden absolute inset-0 flex-col items-center justify-center gap-4 p-8 bg-black/70 text-center"><div class="text-5xl">📷</div><strong>Imagem não encontrada</strong><span class="text-sm break-all">${esc(p.imageSrc)}</span><span class="text-xs opacity-70">Confira o caminho em CONFIGURAÇÃO DOS SLIDES no arquivo js/app.js.</span></div>
 <div class="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none"><span class="px-2.5 py-1 rounded-full text-[9px] font-black tracking-[0.18em] uppercase border backdrop-blur-md" style="background:#0009;border-color:#ffffff2e;color:#fff;font-family:'Bebas Neue',sans-serif">${esc(t.description)}</span><span class="w-7 h-7 rounded-full flex items-center justify-center border text-[10px] font-bold" style="background:${t.accent};color:${dark?"#000":"#fff"}">${n}</span></div>
 <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div><div class="pointer-events-none absolute bottom-3 left-3 right-3 flex justify-between items-end"><div class="flex flex-col"><span class="text-[10px] tracking-[0.2em] uppercase opacity-80 text-white font-bold" style="font-family:'Bebas Neue',sans-serif">Romeu &amp; Talita</span><span class="text-[10px] text-white/70 font-mono">${new Date().getFullYear()} • ${esc(t.key.toUpperCase())}</span></div><span class="text-white">✦</span></div></div></div>
 ${t.key==="gta"?'<div class="absolute right-0 top-0 bottom-0 w-10 bg-[#CCFF00] flex items-center justify-center"><span class="rotate-90 text-black font-black text-[10px] tracking-[0.3em]">WANTED</span></div>':""}</div>
 <div class="lg:hidden mt-3 flex gap-3"><button data-action="previous" aria-label="Foto anterior" class="w-9 h-9 rounded-full bg-black/30 border border-white/15 text-white">‹</button><button data-action="next" aria-label="Próxima foto" class="w-9 h-9 rounded-full bg-black/30 border border-white/15 text-white">›</button></div></section>
 <section class="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4">
 <div class="subtitle-animate flex items-center gap-3"><span class="h-px w-8 sm:w-12" style="background:${t.accent}"></span><span class="text-[13px] sm:text-[14px] tracking-[0.22em] uppercase font-bold opacity-80" style="font-family:${t.fontSubtitle};color:${t.text}">ROMEU &amp; TALITA</span><span class="h-px w-8 sm:w-12 lg:hidden" style="background:${t.accent}"></span></div>
 <h1 class="title-animate text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] leading-[0.92] tracking-[-0.02em] font-black break-words max-w-[14ch]" style="font-family:${t.fontTitle};color:${t.titleColor};text-shadow:${shadow};line-height:${t.key==="mario"?"1.2":".92"};${t.key==="mario"?"font-size:clamp(18px,3.6vw,30px)":""}">${esc(p.title)}</h1>
 <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mt-1"><span class="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black tracking-[0.18em] uppercase border" style="background:${t.accent}22;border-color:${t.accent}55;color:${t.text};font-family:'Bebas Neue',sans-serif">Tema: ${esc(t.key)}</span><span class="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide border bg-black/20" style="border-color:#ffffff26;color:${t.text}">${esc(t.description)}</span></div>
 <p class="mt-2 sm:mt-3 max-w-[42ch] text-[16px] sm:text-[18px] leading-relaxed opacity-[0.88]" style="font-family:${t.key==="romeujulieta"?"'Cormorant Garamond',serif":"'Caveat',cursive"};line-height:1.5;color:${t.text}">${esc(t.phrase)}</p>
 <div class="mt-6 sm:mt-8 w-full max-w-[420px]"><div class="flex items-center justify-between mb-3"><span class="text-[10px] tracking-[0.2em] uppercase font-bold opacity-40" style="font-family:'Bebas Neue',sans-serif">Navegação • ${SLIDES.length} temas</span><span class="text-[10px] font-mono opacity-40">${n} / ${total}</span></div>
 <nav class="no-scrollbar flex flex-wrap gap-[7px] sm:gap-2" aria-label="Navegação dos slides">${SLIDES.map((s,i)=>`<button data-index="${i}" aria-label="Ir para ${esc(s.title)}" aria-current="${i===current}" class="relative flex-shrink-0 transition-all duration-300 rounded-full ${i===current?"w-10 sm:w-12 h-2 sm:h-2.5":"w-2.5 h-2.5 hover:scale-125"}" style="background:${i===current?t.accent:"rgba(255,255,255,.28)"};box-shadow:${i===current?"0 0 12px "+t.accent:"none"}"></button>`).join("")}</nav></div></section>
 <button data-action="next" aria-label="Próximo" class="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border bg-black/20 text-xl" style="border-color:#ffffff26;color:${t.text}">›</button></main>
 <footer class="relative z-10 w-full px-4 sm:px-8 py-4 flex items-center justify-center opacity-40"><span class="text-[10px] font-mono tracking-wide">ROMEU &amp; TALITA • 2025 • álbum • ${n} / ${total}</span></footer></div>`;
 document.querySelector("#album-photo").addEventListener("error",()=>{const e=document.querySelector("#image-error");e.classList.remove("hidden");e.classList.add("flex");document.querySelector("#album-photo").classList.add("hidden");},{once:true});
}
root.addEventListener("click",e=>{const b=e.target.closest("[data-action]");if(b){b.dataset.action==="previous"?previous():next();return;}const dot=e.target.closest("[data-index]");if(dot)go(Number(dot.dataset.index));});
window.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")previous();if(e.key==="ArrowRight")next();});
root.addEventListener("touchstart",e=>{startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY;},{passive:true});
root.addEventListener("touchend",e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>50)dx<0?next():previous();startX=startY=null;},{passive:true});
render();preload();
