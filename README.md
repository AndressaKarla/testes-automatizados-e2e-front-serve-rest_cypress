---
# :test_tube: Projeto de Testes Funcionais Automatizados E2E (Ponta a Ponta) | Cypress v13.15.0 | Javascript | Commands | App Actions | GitHub Actions 
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
---
# :information_source: Introdução
Esse projeto "testes-automatizados-e2e-front-serve-rest_cypress" é executado em um ambiente de produção no ["front"](https://front.serverest.dev) e na ["API REST"](https://serverest.dev) do ["ServeRest"](https://github.com/ServeRest) que simula uma loja virtual, nos navegadores Chrome e Firefox; nos Sistemas Operacionais Windows 10 e Linux Ubuntu 22.04, com o objetivo de praticar ainda mais testes automatizados e2e (ponta a ponta) em Cypress v13.15.0, Javascript, Commands, App Actions e GitHub Actions.

- Documentações de referência
  - Cypress:
    - https://www.cypress.io/
    - https://example.cypress.io/commands/actions
    - https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-Structure

---
# :warning: _Instruções considerando Windows 10, para outras versões do Windows ou outros sistemas operacionais talvez seja necessário algumas adaptações_

# :dart: Executar testes e Gerar os resultados dos testes no GitHub Actions
## :triangular_flag_on_post: Executar os testes automatizados E2E (ponta a ponta) no navegador chrome, firefox, etc em modo headless (2° plano) em um ambiente de produção e Gerar os resultados dos testes no GitHub Actions
- Nesse repositório, acessar a aba "Actions"
- Na seção "Actions", clicar em "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress"
- Em "This workflow has a workflow_dispatch event trigger.", clicar em "Run workflow" > "Run workflow" para executar os testes automatizados E2E (ponta a ponta) no navegador chrome, firefox, em modo headless (2° plano) em um ambiente de produção no GitHub Actions [com os conteúdos de "secrets.USUARIO_ENV", etc (baseado nos arquivos ["usuario.example.json"](https://github.com/AndressaKarla/testes-automatizados-e2e-front-serve-rest_cypress/blob/main/cypress/fixtures/usuario.example.json), etc, e configurados na aba "Settings" desse repositório > "Secrets and variables" > "Actions" > "Secrets" > "Repository secrets") que foram redirecionados para os arquivos "usuario.json"]
- Após o término da execução, clicar na run "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress"
- Na seção "Artifacts", clicar em "cypress-videos-chrome"
- Na janela aberta, escolher um diretório para baixar a pasta compactada "cypress-videos-chrome.zip"
- Na seção "Artifacts", clicar em "cypress-screenshots-chrome", "cypress-screenshots-firefox", etc
- Na janela aberta, escolher um diretório para baixar a pasta compactada "cypress-screenshots-chrome.zip", "cypress-screenshots-firefox.zip", etc

# :mag_right: Verificar os vídeos gerados e armazenados anteriormente no GitHub Actions e descompactados no computador 
- No Windows 10, abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi baixada a pasta compactada "cypress-videos-chrome.zip" anteriormente
- Descompactar a pasta
- Acessar a pasta descompactada "cypress-videos-chrome"
- Clicar 2 vezes sob os vídeos gerados e armazenados anteriormente no GitHub Actions e descompactados para ser abertos e verificados no computador

Ex.:
```
login.cy.js.mp4
``` 

# :mag_right: Verificar os screenshots gerados e armazenados anteriormente no GitHub Actions e descompactados no computador 
- Abrir uma outra janela do "Windows Explorer"
- Acessar o diretório onde foi baixada a pasta compactada "cypress-screenshots-chrome.zip", "cypress-screenshots-firefox.zip", etc anteriormente
- Descompactar a pasta
- Na pasta descompactada "cypress-screenshots-chrome", "cypress-screenshots-firefox", etc, acessar "nome-suite-testes.cy.js"

Ex.:
```
login.cy.js
``` 
- Clicar 2 vezes sob os screenshots gerados e armazenados anteriormente no GitHub Actions e descompactados para ser abertos e verificados no computador

Ex.:
```
Funcionalidade Tela Cadastro de usuários ... -- Então na tela de Cadastro deverá apresentar a mensagem ... (failed).png
. . .
Funcionalidade Tela Login ... -- Então deverá apresentar a tela Home ... -- after each hook.png
. . .
Funcionalidade Tela Login ... -- Então na tela Login deverá apresentar a mensagem ... -- after each hook.png
```  

---
# :warning: Antes de clonar ou executar esse projeto localmente no computador, é necessário ter os pré-requisitos e seguir as instruções abaixo :point_down:

## :hammer_and_wrench: Sistema Operacional 
- macOS 10.9 ou superior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux Ubuntu 20.04 ou superior, Fedora 21 e Debian 8 (x86_64 ou Arm 64 bits (x64 ou arm64)) 
- Windows 10 ou superior (apenas 64 bits)

## :hammer_and_wrench: Hardware
- Mínimo de 2 CPUs para rodar o Cypress
- 1 CPU adicional se a gravação de vídeo estiver ativada

## :hammer_and_wrench: Memória RAM
- 8 GB ou superior para execuções de teste mais longos

## :hammer_and_wrench: Janela do "Windows Explorer" > aba "Exibir" e marcar algumas opções
- Abrir uma janela do "Windows Explorer"
- Clicar na aba "Exibir" 
- Marcar a opção "Extensões de nomes de arquivos"
- Marcar a opção "Itens ocultos"

## :hammer_and_wrench: Baixar e instalar o git e gitbash; configurar o git
- Caso ainda não tenha o git e gitbash baixado e instalado, acessar o link do [git e gitbash](https://git-scm.com/download/win), baixar e instalar como administrador
- Caso ainda não tenha configurado o git, seguir os passos apresentados nesse link [Configure a ferramenta](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/#:~:text=Configure%20a%20ferramenta) e configurar

## :hammer_and_wrench: Instalar algumas dependências necessárias 
### Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento
- Seguir os passos apresentados nesse link ["Guia Passo a Passo para Remover o Node.js no Windows"](https://cursos.qaxperience.com/pt/blog/guia-passo-a-passo-para-remover-o-node-no-windows)
  
### Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo gitbash ou outro terminal 
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
```
v18.12.1
```
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
```
8.19.2
```
- Fechar esse gitbash ou terminal

---
# :hammer_and_wrench: Clonar o projeto
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde será clonado o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
- Copiar esse diretório
- Abrir um novo gitbash
- Informar o comando abaixo para acessar onde será clonado o projeto
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação"
```
- Informar o comando abaixo para clonar este repositório via "HTTPS"

```
git clone https://github.com/AndressaKarla/testes-automatizados-e2e-front-serve-rest_cypress.git
```

- Ou informar o comando abaixo para clonar este repositório via "SSH"

```
git clone git@github.com:AndressaKarla/testes-automatizados-e2e-front-serve-rest_cypress.git
```

# :hammer_and_wrench: Instalar mais algumas dependências necessárias
- No gitbash aberto anteriormente, informar o comando abaixo para acessar o projeto “testes-automatizados-e2e-front-serve-rest_cypress” clonado anteriormente
```
cd testes-automatizados-e2e-front-serve-rest_cypress
```
Ex.: 
```
C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress
```
- Informar o comando abaixo para forçar, mesmo tendo possíveis conflitos, a instalação das dependências do projeto
```
npm install --force
```

# :hammer_and_wrench: Instalar as extensões no Visual Studio Code (VS Code)
- Caso ainda não tenha o VS Code baixado e instalado, acessar o site do [Visual Studio Code](https://code.visualstudio.com/download), baixar e instalar com a opção "System Installer"
- Com o Visual Studio Code aberto, caso seja apresentado alguma mensagem de "Instalar pacote de idiomas ...", clicar no ícone de configurações > "Don't Show Again"
- Clicar na opção "Manage > Profiles > Create Profile"
- Em "Profile name", informar "Cypress"
- Clicar na opção "Create"
- Clicar na opção "Extensions", informar e instalar as extensões abaixo:
  - Hyper Term Theme
    - HasseNasse
      - Clicar na opção "Hyper Term Black" apresentada para habilitar a extensão
  - Material Icon Theme
    - Philipp Kief
      - Clicar na opção "Material Icon Theme" apresentada para habilitar a extensão 
  - Cypress Snippets
    - Cliff Su
- Fechar o VS Code
        
# :bookmark_tabs: Abrir o VS Code diretamente na pasta do projeto "testes-automatizados-e2e-front-serve-rest_cypress"
- No gitbash aberto anteriormente, informar o comando abaixo para abrir o VS Code diretamente na pasta do projeto "testes-automatizados-e2e-front-serve-rest_cypress"
```
code .
```
- Aguardar o VS Code ser aberto
- Fechar esse gitbash
- No VS Code aberto, caso seja apresentado "Do you trust the authors on the files in this folder?", marcar a opção "Trust the authors of all files in the parent folder ...."
  - Clicar no botão "Yes, I trust the authors ...."

# :hammer_and_wrench: Criar arquivos "usuario.json", etc, informando os dados com base nos arquivos "usuario.example.json", etc
- No VS Code aberto anteriormente, acessar "cypress > fixtures"
- Criar o arquivo "usuario.json"
  - Informar os dados com base no arquivo ["usuario.example.json"](https://github.com/AndressaKarla/testes-automatizados-e2e-front-serve-rest_cypress/blob/main/cypress/fixtures/usuario.example.json)
    - Salvar o arquivo "usuario.json" com os dados informados anteriormente
  
---
# :dart: Executar testes e Gerar os resultados dos testes no computador
## :triangular_flag_on_post: Executar os testes automatizados E2E (ponta a ponta) no navegador chrome em um ambiente de produção na interface gráfica do Cypress e Gerar os resultados dos testes no computador (cypress > screenshots)
- Ter o navegador Chrome instalado
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-e2e-front-serve-rest_cypress”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para abrir a interface gráfica do Cypress 
```
npm run cy:open
```
- NÃO fechar esse gitbash
- Na interface gráfica do Cypress, clicar em "Continue"
- Em "Welcome to Cypress!", clicar em "E2E Testing"
- Em "Choose a browser", clicar em "Chrome"
- Clicar em "Start E2E Testing in Chrome"
- Em "testes-automatizados-e2e-front-serve-rest_cypress" > "Specs"> "E2E specs" > "cypress\e2e", clicar em "login", "cadastro-usuarios", etc
- Após executar os testes, fechar todas as interfaces gráficas do Cypress
- Fechar esse gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados E2E (ponta a ponta) no navegador chrome em modo headless (2° plano) em um ambiente de produção e Gerar os resultados dos testes no computador (cypress > screenshots; cypress > videos)
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-e2e-front-serve-rest_cypress”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em modo headless (2º plano) em um ambiente de produção (comando semelhante ao que é utilizado no "Passo 3" do job "cypress-chrome" da "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress" em ".github > workflows > [workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml](https://github.com/AndressaKarla/testes-automatizados-e2e-front-serve-rest_cypress/blob/main/.github/workflows/workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml)" no GitHub Actions) e Gerar os resultados dos testes no computador (cypress > screenshots; cypress > videos):
```
npm run test
```
- Após executar os testes, fechar esse gitbash

## :triangular_flag_on_post: Executar os testes automatizados E2E (ponta a ponta) no navegador firefox em um ambiente de produção na interface gráfica do Cypress no computador (cypress > screenshots)
- Ter o navegador Firefox instalado
- Abrir uma janela do "Windows Explorer"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-e2e-front-serve-rest_cypress”
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para abrir a interface gráfica do Cypress 
```
npm run cy:open
```
- NÃO fechar esse gitbash
- Na interface gráfica do Cypress, clicar em "Continue"
- Em "Welcome to Cypress!", clicar em "E2E Testing"
- Em "Choose a browser", clicar em "Firefox"
- Clicar em "Start E2E Testing in Firefox"
- Em "testes-automatizados-e2e-front-serve-rest_cypress" > "Specs"> "E2E specs" > "cypress\e2e", clicar em "login", "cadastro-usuarios", etc
- Após executar os testes, fechar todas as interfaces gráficas do Cypress
- Fechar esse gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados e2e (ponta a ponta) no navegador firefox em modo headless (2° plano) em um ambiente de produção e Gerar os resultados dos testes no computador (cypress > screenshots)
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
- Copiar esse diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
```
cd "<diretório\copiado\anteriormente>"
```
Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador firefox em modo headless (2º plano) em um ambiente de produção (comando semelhante ao que é utilizado no "Passo 3" do job "cypress-firefox" da "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress" em ".github > workflows > [workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml](https://github.com/AndressaKarla/testes-automatizados-e2e-front-serve-rest_cypress/blob/main/.github/workflows/workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml)" no GitHub Actions) e Gerar os resultados dos testes no computador (cypress > screenshots):
```
npm run test:ff
```
- Após executar os testes, fechar esse gitbash

---
# :mag_right: Verificar os resultados das execuções dos testes automatizados E2E (ponta a ponta) no computador 
## :bookmark_tabs: Vídeos no computador
- No VS Code aberto anteriormente, acessar "cypress > videos"
  
Ex.:
```
login.cy.js.mp4
```

## :bookmark_tabs: Screenshots no computador
- No VS Code aberto anteriormente, em "cypress > screenshots", acessar "nome-suite-testes.cy.js"

Ex.:
```
login.cy.js
``` 
- Clicar 2 vezes sob os screenshots 
  
Ex.:
```
Cadastrar usuários -- Cenário Cadastrar usuário válido ou inválido ... - Apresentar mensagem ... (failed).png
. . .
Login -- Cenário Login com usuário administrador - Apresentar tela Home ... -- after each hook.png
. . .
Login -- Cenário Login com usuário inválido ... - Apresentar mensagem ... -- after each hook.png
```   

---
### Feito com ❤️ por Andressa Karla :wave: 

### [![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla) [![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla/)](https://www.linkedin.com/in/andressakarla/)

---
