# 🎬 Movie Explorer

Projeto desenvolvido com foco em praticar consumo de API e manipulação do DOM com JavaScript puro.

Uma aplicação web para descoberta e busca de filmes, utilizando a API pública do TMDB (The Movie Database).

---

## 🚀 O que desenvolvi

Desenvolvi uma **SPA (Single Page Application)** usando **HTML, CSS e JavaScript puro**, sem frameworks.

A ideia foi criar uma experiência simples e fluida, onde o usuário consegue:
- visualizar filmes populares
- buscar por qualquer título
- acessar detalhes completos de cada filme

Tudo isso acontece em uma única página, sem recarregamentos.

---

## 🧭 Como funciona a aplicação

A aplicação possui três telas principais que são controladas via JavaScript:

### 🏠 Home
- Carrega automaticamente os filmes populares
- Possui um campo de busca

### 🔍 Resultados
- Mostra os filmes encontrados em formato de cards

### 🎥 Detalhe
- Exibe informações completas do filme:
  - banner
  - nota
  - ano
  - duração
  - sinopse

A navegação entre essas telas acontece escondendo e exibindo elementos na página, sem redirecionamento.

---

## 🧠 Principais decisões tomadas

- **Uso de JavaScript puro**  
  Optei por não usar frameworks para focar nos fundamentos e entender melhor a manipulação do DOM.

- **Separação de arquivos**  
  Organizei o projeto em `index.html`, `style.css` e `app.js` para manter tudo mais claro.

- **Função única para criação de cards (`createCard`)**  
  Evita repetição de código e facilita manutenção.

- **Uso da API com `language=pt-BR`**  
  Para deixar os dados em português quando disponível.

- **Uso de variáveis no CSS**  
  Facilita ajustes de cores e estilo.

- **Uso de localStorage**  
  Para armazenar o histórico de buscas do usuário.

---

## 🚧 O que faria diferente com mais tempo

- Implementaria paginação nos resultados  
- Criaria um sistema de favoritos  
- Adicionaria filtros (gênero, ano, nota)  
- Melhoraria o loading (ex: skeleton ao invés de tela vazia)  
- Trataria melhor erros de requisição  
- Adicionaria sugestões de filmes similares  

---

## 💡 Observação

Esse projeto foi importante para praticar:
- consumo de API REST
- manipulação do DOM
- organização de código
- lógica com JavaScript

---

## 📌 Status

✔ Funcional  
🚀 Pode evoluir com novas features  
