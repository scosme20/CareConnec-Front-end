# CareConnect

## Sumário
- [Introdução](#introdução)
- [Visão Geral](#visão-geral)
- [Recursos e Funcionalidades](#recursos-e-funcionalidades)
  - [Famílias](#famílias)
  - [Doações](#doações)
  - [Albergues](#albergues)
  - [Homeless](#homeless)
  - [Voluntários](#voluntários)
- [Arquitetura e Padrões de Design](#arquitetura-e-padrões-de-design)
  - [Princípios SOLID](#princípios-solid)
  - [Padrões de Design](#padrões-de-design)
- [Gerenciamento de Estado com Redux](#gerenciamento-de-estado-com-redux)
- [Ferramentas e Tecnologias](#ferramentas-e-tecnologias)
- [CRUDs Implementados](#cruds-implementados)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Contribuição](#contribuição)

## Introdução

CareConnect é uma aplicação voltada para conectar famílias, doadores, albergues, pessoas em situação de rua e voluntários. Nosso objetivo é criar uma rede de apoio que facilite a assistência a quem precisa, promovendo um impacto social positivo.

## Visão Geral

A CareConnect oferece uma plataforma integrada onde:
- Famílias podem buscar apoio e assistência.
- Doadores podem contribuir com recursos financeiros ou materiais.
- Albergues podem gerenciar e divulgar seus serviços.
- Pessoas em situação de rua (homeless) podem encontrar ajuda.
- Voluntários podem se inscrever para contribuir com seu tempo e habilidades.

## Recursos e Funcionalidades

### Famílias
- Registro e gerenciamento de perfis familiares.
- Solicitação de assistência e acompanhamento do status.
- Conexão com doadores e voluntários.

### Doações
- Plataforma para doadores fazerem contribuições financeiras ou de bens.
- Rastreamento de doações e seu impacto.
- Relatórios e feedback para doadores.

### Albergues
- Cadastro e gerenciamento de albergues.
- Publicação de vagas e serviços disponíveis.
- Conexão com voluntários e famílias.

### Homeless
- Registro e gerenciamento de perfis para pessoas em situação de rua.
- Acesso a recursos e serviços oferecidos por albergues e voluntários.

### Voluntários
- Registro e gerenciamento de perfis de voluntários.
- Inscrição em atividades e projetos.
- Relatórios de impacto e feedback.

## Arquitetura e Padrões de Design

### Princípios SOLID

A arquitetura da CareConnect segue os princípios SOLID para garantir que o sistema seja fácil de manter e expandir:

- **S**ingle Responsibility Principle: Cada classe tem uma única responsabilidade.
- **O**pen/Closed Principle: Os componentes do sistema estão abertos para extensão, mas fechados para modificação.
- **L**iskov Substitution Principle: As subclasses devem ser substituíveis pelas suas superclasses.
- **I**nterface Segregation Principle: Muitas interfaces específicas são melhores do que uma interface geral.
- **D**ependency Inversion Principle: Dependa de abstrações, não de implementações concretas.

### Padrões de Design

Utilizamos diversos padrões de design, incluindo:
- **MVC (Model-View-Controller)**: Separação clara entre lógica de negócios, apresentação e controle.
- **Factory Method**: Criação de objetos sem expor a lógica de instância.
- **Observer**: Implementação de um mecanismo de escuta para mudanças no estado dos objetos.

## Gerenciamento de Estado com Redux

O Redux é usado para gerenciar o estado global da aplicação, garantindo que todas as partes do aplicativo possam acessar e atualizar o estado de forma consistente e previsível. As principais funcionalidades do Redux na CareConnect incluem:
- **Store**: Armazena o estado da aplicação.
- **Reducers**: Funções puras que especificam como o estado muda em resposta a ações.
- **Actions**: Objetos que descrevem mudanças de estado.
- **Middlewares**: Estendem a funcionalidade do Redux, permitindo interceptar ações ou realizar operações assíncronas.

## Ferramentas e Tecnologias

A CareConnect foi desenvolvida utilizando uma variedade de ferramentas e tecnologias modernas, incluindo:
- **React**: Biblioteca para construção de interfaces de usuário.
- **Redux**: Gerenciamento de estado.
- **Styled-Components**: Estilização de componentes.
- **Framer Motion**: Animações.
- **React-Slick**: Carrossel de imagens.
- **Express.js**: Servidor backend.
- **MongoDB**: Banco de dados NoSQL.
- **Node.js**: Ambiente de execução JavaScript no servidor.

## CRUDs Implementados

Os principais CRUDs (Create, Read, Update, Delete) implementados na CareConnect incluem:
- **Famílias**: Cadastro, visualização, edição e exclusão de perfis familiares.
- **Doações**: Registro, consulta, atualização e remoção de doações.
- **Albergues**: Gerenciamento completo dos dados dos albergues.
- **Homeless**: Cadastro e atualização de informações de pessoas em situação de rua.
- **Voluntários**: Registro e gerenciamento de perfis de voluntários.

## Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/careconnect.git
   cd careconnect
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor backend:**
   ```bash
   cd backend
   npm start
   ```

4. **Inicie o frontend:**
   ```bash
   cd frontend
   npm start
   ```

5. **Abra o navegador e acesse:**
   ```
   http://localhost:3000
   ```

## Contribuição

Contribuições são bem-vindas! Para contribuir com a CareConnect, siga os passos abaixo:

1. **Fork o repositório:**
   Clique no botão "Fork" no topo da página do GitHub.

2. **Clone o repositório forkado:**
   ```bash
   git clone https://github.com/seu-usuario/careconnect.git
   cd careconnect
   ```

3. **Crie uma nova branch:**
   ```bash
   git checkout -b minha-contribuicao
   ```

4. **Faça as alterações desejadas e commit:**
   ```bash
   git commit -m "Descrição das minhas alterações"
   ```

5. **Envie para o repositório forkado:**
   ```bash
   git push origin minha-contribuicao
   ```

6. **Crie um Pull Request:**
   Acesse o repositório original e clique no botão "New Pull Request".

Agradecemos por sua contribuição para tornar a CareConnect uma plataforma melhor para todos!
