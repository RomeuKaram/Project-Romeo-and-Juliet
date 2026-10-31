# Romeu & Talita — Álbum

## Estrutura
- `index.html`: estrutura básica e carregamento dos arquivos.
- `css/style.css`: estilos visuais, temas, fontes e responsividade.
- `js/app.js`: lógica do álbum, navegação e configuração dos slides.
- `images/`: as 28 imagens do álbum.

## Como trocar uma imagem ou título
1. Abra `js/app.js`.
2. Procure por `CONFIGURAÇÃO DOS SLIDES`.
3. Altere o campo `title` para mudar o título exibido.
4. Altere `imageSrc` para apontar para outro arquivo dentro de `images/`.
5. Preserve o nome e a extensão exatos do arquivo. Exemplo: `./images/arena timão.jpg`.

O campo `themeKey` define o tema visual do slide. Não altere esse campo se quiser manter o tema atual.

## Publicação
O projeto continua compatível com GitHub Pages. Não é necessário instalar dependências nem executar um processo de build.
