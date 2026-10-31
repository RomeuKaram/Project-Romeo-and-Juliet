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
5. Use o arquivo WebP correspondente. Exemplo: `./images/arena timão.webp`. As versões JPG originais foram mantidas na pasta `images/` como cópia de segurança.

O campo `themeKey` define o tema visual do slide. Não altere esse campo se quiser manter o tema atual.

## Imagens e desempenho
- As 28 imagens usadas pelo álbum estão em formato WebP, com qualidade 82.
- Os arquivos JPG originais foram preservados como backup.
- Para trocar uma imagem, envie o novo arquivo para `images/` e atualize o caminho `imageSrc` no `js/app.js`.

## Publicação
O projeto continua compatível com GitHub Pages. A aplicação não utiliza React nem exige instalação de dependências ou processo de build.
