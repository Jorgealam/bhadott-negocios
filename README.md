# BHADOTT Negócios

Página de vendas da BHADOTT voltada a negócios locais de Castanhal e região:
sites, cardápio digital, agendamento online e sistemas sob medida.

Separada do portal institucional (`jorgealam/bhadott`) de propósito. O portal
apresenta o estúdio — games, IA, 3D. Esta página tem um único trabalho: fazer
o dono de um comércio entender o que é vendido, por quanto, em quanto tempo, e
chamar no WhatsApp.

## Como funciona

Site estático, sem build e sem dependências. O que está no repositório é
exatamente o que vai para o ar. Para ver no computador, basta abrir
`index.html` no navegador.

```
index.html      página inteira
css/style.css   tema e layout
js/main.js      configuração do WhatsApp e pequenos comportamentos
```

## Publicar no GitHub Pages

1. Criar o repositório `bhadott-negocios` na conta `jorgealam`, público.
2. Enviar estes arquivos na branch `main`, na raiz do repositório.
3. Em **Settings → Pages**, escolher Source: `Deploy from a branch`,
   Branch: `main`, pasta `/ (root)`, e salvar.
4. Em um ou dois minutos o site fica em
   `https://jorgealam.github.io/bhadott-negocios/`.

Não há GitHub Actions nem etapa de build. Cada commit na `main` atualiza o site.

## Trocar o número de WhatsApp

Uma linha só, em `js/main.js`:

```js
WHATSAPP: "5591991549435",
```

Só números, com DDI e DDD. Isso atualiza os três botões, o rodapé e o botão
flutuante de uma vez.

## Alterar preços e serviços

Os quatro serviços estão em `index.html`, na seção `#servicos`, cada um em um
bloco `<article class="card">`. Preço, título e descrição são texto direto no
HTML.

## Tema

Fundo claro em papel quente, faixas em azul profundo da marca e destaque em
âmbar. Tipografia: Fraunces nos títulos, Public Sans no corpo. Claro e escuro
acompanham a preferência do aparelho; as cores estão todas em variáveis no topo
de `css/style.css`.
