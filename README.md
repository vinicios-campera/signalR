# Sistema de Chamada de Senhas

Repositório com projeto para chamada de senhas em tempo real utilizando SignalR no backend e React com TypeScript e Next.js no frontend.

## Funcionalidades

- **Chamada de Senhas em Tempo Real:** Visualização instantânea das senhas chamadas.
- **Painel de Atendimento:** Interface para o atendente chamar a próxima senha.
- **Painel de Visualização:** Interface para os usuários acompanharem as senhas chamadas.
- **Histórico de Chamadas (Opcional):** Possibilidade de visualizar senhas já chamadas (se implementado).

## Tecnologias Utilizadas

- **Backend:**
  - ASP.NET Core (ou a tecnologia backend que hospeda o SignalR)
  - SignalR (para comunicação em tempo real)
- **Frontend:**
  - React
  - Next.js
  - TypeScript
- **Banco de Dados (Opcional):**
  - (Especifique o banco de dados, se houver, ex: SQL Server, PostgreSQL, MongoDB)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [.NET SDK](https://dotnet.microsoft.com/download)
- Um editor de código de sua preferência (ex: [Visual Studio Code](https://code.visualstudio.com/))

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### 1. Clonar o Repositório

```bash
git clone https://github.com/vinicios-campera/password-caller
cd password-caller
```

### 2. Configurar e Rodar o Backend (SignalR)

```bash
cd src/Api
```

**Restaurar dependências:**

```bash
dotnet restore
```

**Configurar variáveis de ambiente (se necessário):**
Verifique se há um arquivo `appsettings.Development.json` ou similar para configurar strings de conexão ou outras chaves. Pode ser necessário criar um a partir de um `appsettings.json` ou um template.

**Executar o projeto backend:**

```bash
dotnet run
```

O backend estará rodando em uma porta específica (ex: `http://localhost:5000` ou `https://localhost:5001`). Verifique os logs do console para a URL exata.

### 3. Configurar e Rodar o Frontend (Next.js)

```bash
cd src/Web
```

**Instalar dependências:**

```bash
npm install
# ou
yarn install
```

**Configurar variáveis de ambiente (se necessário):**
Crie um arquivo `.env.local` na raiz da pasta do frontend para configurar a URL do backend SignalR, por exemplo:

```env
NEXT_PUBLIC_SIGNALR_HUB_URL=http://localhost:5000/nomeDoSeuHub # Adapte esta URL
```

_Substitua `http://localhost:5000/nomeDoSeuHub` pela URL correta e nome do seu Hub SignalR._

**Executar o projeto frontend:**

```bash
npm run dev
# ou
yarn dev
```

A aplicação frontend estará acessível em `http://localhost:3000` (ou outra porta, se configurada).

### 4. Acessar a Aplicação

Abra seu navegador e acesse:

- **Frontend:** `http://localhost:3000` (ou a porta informada pelo Next.js)

## Estrutura do Projeto (Sugestão)

_Adapte esta estrutura para refletir a organização real do seu projeto._

```
/password-caller
  ├── /src
  │   ├── /Api
  │   │   ├── Hubs            # Contém os Hubs do SignalR (ex: PasswordHub.cs)
  │   └── ...                 # Outras pastas do backend
  ├── /src
  │   ├── /Web                # Projeto React com Next.js e TypeScript
  │   ├── /components
  │   ├── /pages
  │   ├── /services           # Onde pode estar a lógica de conexão com SignalR
  │   └── ...                 # Outras pastas do frontend
  └── README.md
```

## Endpoints Importantes (SignalR Hub)

- **Hub Endpoint:** `/SenhaHub` (Exemplo, verifique a configuração no seu backend em `Startup.cs` ou `Program.cs`)

## Contribuição

Contribuições são bem-vindas! Se você tem sugestões para melhorar este projeto, sinta-se à vontade para:

1.  Fazer um Fork do projeto.
2.  Criar uma Branch para sua Feature (`git checkout -b feature/NovaFuncionalidade`).
3.  Adicionar suas mudanças (`git add .`).
4.  Comitar suas mudanças (`git commit -m 'Adiciona NovaFuncionalidade'`).
5.  Fazer o Push para a Branch (`git push origin feature/NovaFuncionalidade`).
6.  Abrir um Pull Request.
