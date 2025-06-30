# 👟 Drip Store Project



> **Nota do Projeto:** Este repositório contém o projeto de **front-end** desenvolvido como parte da avaliação do curso de Desenvolvimento Web Full Stack. O objetivo foi aplicar conceitos de React, componentização, roteamento e consumo de APIs em um ambiente prático.






## 📖 Sobre o Projeto

O objetivo deste projeto foi desenvolver uma aplicação web de e-commerce ("Drip Store") utilizando **React JS**. A aplicação foi construída para atender a uma série de requisitos mínimos, focando na criação de uma experiência de usuário coesa e na aplicação de boas práticas de desenvolvimento. O projeto abrange desde a componentização de elementos de UI até a criação de páginas navegáveis com roteamento e o consumo de dados de uma API externa.

As páginas principais desenvolvidas foram:

  - **Página Inicial:** Apresenta os destaques e promoções da loja.
  - **Página de Listagem de Produtos:** Exibe os produtos com opções visuais de filtro.
  - **Página de Visualização do Produto:** Mostra os detalhes de um item específico.

## ✨ Funcionalidades

  - [x] **Página Inicial** com um carrossel de banners dinâmico e seções de destaque.
  - [x] **Página de Listagem de Produtos** com cards e elementos visuais para filtros.
  - [x] **Página de Detalhes do Produto** com galeria de imagens, descrição, opções de tamanho/cor e produtos relacionados.
  - [x] **Roteamento Dinâmico** para acessar a página de cada produto individualmente através do seu ID.
  - [x] **Componentização Limpa** seguindo a estrutura de pastas definida.
  - [x] **Consumo de API** para buscar informações dos produtos (utilizando a Fake Store API).
  - [x] **Design Responsivo** (Básico), adaptando-se a diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

  - **React:** Biblioteca principal para a construção da interface de usuário.
  - **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido.
  - **React Router DOM:** Para gerenciamento das rotas e navegação entre as páginas.
  - **Styled Components:** Para a estilização dos componentes de forma encapsulada e dinâmica.
  - **PrimeReact:** Biblioteca de componentes de UI para agilizar o desenvolvimento de elementos como botões, carrossel e inputs.
  - **Axios:** Cliente HTTP para realizar as chamadas à API de produtos.
  - **PrimeIcons:** Biblioteca de ícones utilizada em conjunto com o PrimeReact.

## 📁 Estrutura de Pastas

A estrutura de pastas do projeto foi organizada para separar responsabilidades, facilitando a manutenção e escalabilidade do código.

```
DRIP_STORE_PROJECT/
├── public/               # Arquivos estáticos
├── src/
│   ├── assets/           # Imagens, fontes, etc.
│   ├── components/       # Componentes reutilizáveis (Header, Card, etc.)
│   ├── pages/            # Componentes que representam as páginas
│   │   ├── HomePage/
│   │   ├── ProductListingPage/
│   │   └── ProductViewPage/
│   ├── utils/            # Funções úteis e estilos globais
│   │   └── globalStyles.jsx
│   ├── App.jsx           # Componente principal e configuração de rotas
│   └── main.jsx          # Ponto de entrada da aplicação
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
$ git clone https://github.com/RafaelHFSousa/Project_DripStore_DigitalCollege.git

# 2. Navegue até o diretório do projeto
$ cd [NOME-DO-REPOSITORIO]

# 3. Instale as dependências
$ npm install

# 4. Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor será iniciado em http://localhost:5173
```

## 🌐 Deploy

Uma versão de demonstração desta aplicação foi publicada e pode ser acessada através do link abaixo:

➡️ **[Acessar a Drip Store](projectdripstory.vercel.app)**


## 👨‍💻 Autor

Desenvolvido por **Rafael Holanda**.

  - **GitHub:** [@RafaelHFSousa](https://github.com/RafaelHFSousa)
  - **LinkedIn:** [Rafael Holanda F. de Sousa](https://linkedin.com/in/rafael-holanda-f-de-sousa-336a27224)

-----
