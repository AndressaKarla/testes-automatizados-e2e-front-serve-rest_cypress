---
# :test_tube: Projeto de Testes Funcionais Automatizados E2E (Ponta a Ponta) | Cypress v13.15.0 | mochawesome-reporter v4.0.2 | mocha-junit-reporter v2.2.1 | Javascript | Commands | App Actions | GitHub Actions | GitHub Pages | Azure Pipelines
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
---
# :information_source: Introdução
Este projeto "testes-automatizados-e2e-front-serve-rest_cypress" é executado em um ambiente de produção no ["front"](https://front.serverest.dev) e na ["API REST"](https://serverest.dev) do ["ServeRest"](https://github.com/ServeRest) que simula uma loja virtual, nos navegadores Chrome e Firefox; nos Sistemas Operacionais Windows 11 e Linux Ubuntu 22.04, com o objetivo de praticar ainda mais testes automatizados E2E (ponta a ponta) em Cypress v13.15.0, mochawesome-reporter v4.0.2, mocha-junit-reporter v2.2.1, Javascript, Commands, App Actions, GitHub Actions, GitHub Pages e Azure Pipelines.

- Documentações de referência
  - Cypress:
    - https://www.cypress.io/
    - https://docs.cypress.io/app/references/changelog#13-15-0
    - https://example.cypress.io/commands/actions
    - https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Folder-Structure
  - Reports:
    - https://docs.cypress.io/app/references/configuration#Videos
    - cypress-multi-reporters: https://www.npmjs.com/package/cypress-multi-reporters/v/2.0.5
    - cypress-mochawesome-reporter: https://www.npmjs.com/package/cypress-mochawesome-reporter/v/4.0.2
    - mocha-junit-reporter: https://www.npmjs.com/package/mocha-junit-reporter/v/2.2.1

---
# :compass: Sumário 
- [Instruções considerando Windows 11 ...](#warning-instruções-considerando-windows-11-para-outras-versões-do-windows-ou-outros-sistemas-operacionais-talvez-seja-necessário-algumas-adaptações)
- [Executar testes automatizados e Gerar os resultados dos testes no GitHub Actions, GitHub Pages e nas pipelines do Azure DevOps](#dart-executar-testes-automatizados-e-gerar-os-resultados-dos-testes-no-github-actions-github-pages-e-nas-pipelines-do-azure-devops)
  - [Executar os testes automatizados E2E (ponta a ponta) no navegador chrome e firefox em modo headless (2° plano) em um ambiente de produção, Gerar os resultados dos testes no GitHub Actions ...](#triangular_flag_on_post-executar-os-testes-automatizados-e2e-ponta-a-ponta-no-navegador-chrome-e-firefox-em-modo-headless-2-plano-em-um-ambiente-de-produção-gerar-os-resultados-dos-testes-no-github-actions-github-pages-e-nas-pipelines-do-azure-devops-apenas-na-branch-principal-main) 
  - [Verificar o report html executado no navegador chrome e gerado anteriormente no GitHub Pages (apenas na branch principal (main))](#mag_right-verificar-o-report-html-executado-no-navegador-chrome-e-gerado-anteriormente-no-github-pages-apenas-na-branch-principal-main)
  - [Verificar no navegador padrão o report html executado no navegador firefox ...](#mag_right-verificar-no-navegador-padrão-o-report-html-executado-no-navegador-firefox-gerado-e-armazenado-anteriormente-no-github-actions-e-descompactado-no-computador)
  - [Verificar na funcionalidade "XML Viewer" do site "Code Beautify" os reports xml gerados e armazenados anteriormente no GitHub Actions, utilizados nas pipelines do Azure DevOps (apenas na branch principal (main)) ...](#mag_right-verificar-na-funcionalidade-xml-viewer-do-site-code-beautify-os-reports-xml-gerados-e-armazenados-anteriormente-no-github-actions-utilizados-nas-pipelines-do-azure-devops-apenas-na-branch-principal-main-e-descompactados-no-computador)
  - [Verificar os vídeos executados no navegador chrome ...](#mag_right-verificar-os-vídeos-executados-no-navegador-chrome-gerados-e-armazenados-anteriormente-no-github-actions-e-descompactados-no-computador)
  - [Verificar os screenshots gerados e armazenados anteriormente no GitHub Actions e descompactados no computador](#mag_right-verificar-os-screenshots-gerados-e-armazenados-anteriormente-no-github-actions-e-descompactados-no-computador)
- [Antes de clonar ou executar este projeto localmente no computador, é necessário seguir as instruções ...](#warning-antes-de-clonar-ou-executar-este-projeto-localmente-no-computador-é-necessário-ter-os-pré-requisitos-e-seguir-as-instruções-abaixo-point_down) 
- [Clonar o projeto](#hammer_and_wrench-clonar-o-projeto)
- [Instalar mais algumas dependências necessárias](#hammer_and_wrench-instalar-mais-algumas-dependências-necessárias)
- [Instalar as extensões no Visual Studio Code (VS Code)](#hammer_and_wrench-instalar-as-extensões-no-visual-studio-code-vs-code)
- [Abrir o VS Code diretamente na pasta do projeto "testes-automatizados-e2e-front-serve-rest_cypress"](#bookmark_tabs-abrir-o-vs-code-diretamente-na-pasta-do-projeto-testes-automatizados-e2e-front-serve-rest_cypress)
- [Criar arquivos "usuario.json", informando os dados com base nos arquivos "usuario.example.json", etc](#hammer_and_wrench-criar-arquivos-usuariojson-informando-os-dados-com-base-nos-arquivos-usuarioexamplejson-etc)
- [Executar testes automatizados e Gerar os resultados dos testes no computador](#dart-executar-testes-automatizados-e-gerar-os-resultados-dos-testes-no-computador)
  - [Executar os testes automatizados E2E (ponta a ponta) no navegador chrome em um ambiente de produção na interface gráfica do Cypress ...](#triangular_flag_on_post-executar-os-testes-automatizados-e2e-ponta-a-ponta-no-navegador-chrome-em-um-ambiente-de-produção-na-interface-gráfica-do-cypress-e-gerar-os-resultados-dos-testes-no-computador-cypress--screenshots)
  - [Ou executar os testes automatizados E2E (ponta a ponta) no navegador chrome em modo headless (2° plano) em um ambiente de produção ...](#triangular_flag_on_post-ou-executar-os-testes-automatizados-e2e-ponta-a-ponta-no-navegador-chrome-em-modo-headless-2-plano-em-um-ambiente-de-produção-e-gerar-os-resultados-dos-testes-no-computador-cypress--reports-cypress--screenshots-cypress--videos) 
  - [Executar os testes automatizados E2E (ponta a ponta) no navegador firefox em um ambiente de produção na interface gráfica do Cypress ...](#triangular_flag_on_post-executar-os-testes-automatizados-e2e-ponta-a-ponta-no-navegador-firefox-em-um-ambiente-de-produção-na-interface-gráfica-do-cypress-e-gerar-os-resultados-dos-testes-no-computador-cypress--screenshots)
  - [Ou executar os testes automatizados E2E (ponta a ponta) no navegador firefox em modo headless (2° plano) em um ambiente de produção ...](#triangular_flag_on_post-ou-executar-os-testes-automatizados-e2e-ponta-a-ponta-no-navegador-firefox-em-modo-headless-2-plano-em-um-ambiente-de-produção-e-gerar-os-resultados-dos-testes-no-computador-cypress--reports-cypress--screenshots) 
- [Verificar os resultados das execuções dos testes automatizados no computador](#mag_right-verificar-os-resultados-das-execuções-dos-testes-automatizados-no-computador)
- [Feito com ❤️ por Andressa Karla](#feito-com-heart-por-andressa-karla-wave) 

---
# :warning: _Instruções considerando Windows 11, para outras versões do Windows ou outros sistemas operacionais talvez seja necessário algumas adaptações_

# :dart: Executar testes automatizados e Gerar os resultados dos testes no GitHub Actions, GitHub Pages e nas pipelines do Azure DevOps
## :triangular_flag_on_post: Executar os testes automatizados E2E (ponta a ponta) no navegador chrome e firefox em modo headless (2° plano) em um ambiente de produção, Gerar os resultados dos testes no GitHub Actions; GitHub Pages e nas pipelines do Azure DevOps (apenas na branch principal (main))
- Neste repositório, acessar a aba "Actions"
- Na seção "Actions", clicar em "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress"
- Em "This workflow has a workflow_dispatch event trigger.", clicar em "Run workflow" > "Run workflow" para executar os testes automatizados E2E (ponta a ponta) no navegador chrome, firefox, em modo headless (2° plano) em um ambiente de produção no GitHub Actions [com os conteúdos de "secrets.USUARIO_ENV", etc (baseado nos fixtures ["usuario.example.json"](./cypress/fixtures/usuario.example.json), etc, e configurados na aba "Settings" deste repositório > "Secrets and variables" > "Actions" > "Secrets" > "Repository secrets") que foram redirecionados para os fixtures "usuario.json"]
- Após o término da execução, clicar na run "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress"
- Na seção "Artifacts", clicar em "cypress-reports-html-mochawesome-xml-junit-chrome", "cypress-reports-html-mochawesome-xml-junit-firefox", "cypress-videos-chrome", "cypress-screenshots-chrome", "cypress-screenshots-firefox", etc
- Na janela aberta, escolher um diretório para baixar a(s) pasta(s) compactada(s) "cypress-reports-html-mochawesome-xml-junit-chrome.zip", "cypress-reports-html-mochawesome-xml-junit-firefox.zip", "cypress-videos-chrome.zip", "cypress-screenshots-chrome.zip", "cypress-screenshots-firefox.zip", etc

# :mag_right: Verificar o report html executado no navegador chrome e gerado anteriormente no GitHub Pages (apenas na branch principal (main))
- Neste repositório, acessar a [url](https://andressakarla.github.io/testes-automatizados-e2e-front-serve-rest_cypress/index.html) abaixo da seção "About" 
- No report html gerado no GitHub Pages (configurado na aba "Settings" deste repositório > "Pages" > "Build and deployment" > "Source = GitHub Actions") e aberto anteriormente, ir clicando em cada cenário para verificar mais detalhes, screenshot e vídeo anexados

# :mag_right: Verificar no navegador padrão o report html executado no navegador firefox, gerado e armazenado anteriormente no GitHub Actions e descompactado no computador 
- No Windows 11, abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi baixada a pasta compactada "cypress-reports-html-mochawesome-xml-junit-firefox.zip" anteriormente
- Descompactar a pasta
- Acessar a pasta descompactada "cypress-reports-html-mochawesome-xml-junit-firefox"
- Acessar "html"
- Clicar 2 vezes sob o arquivo "index.html" gerado e armazenado anteriormente no GitHub Actions e descompactado para ser aberto e verificado no navegador padrão no computador

# :mag_right: Verificar na funcionalidade "XML Viewer" do site "Code Beautify" os reports xml gerados e armazenados anteriormente no GitHub Actions, utilizados nas pipelines do Azure DevOps (apenas na branch principal (main)) e descompactados no computador 
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi baixada a pasta compactada "cypress-reports-html-mochawesome-xml-junit-firefox.zip" anteriormente
- Descompactar a pasta
- Acessar a pasta descompactada "cypress-reports-html-mochawesome-xml-junit-firefox"
- Acessar "xml"
- Copiar este diretório 
- Acessar a funcionalidade "[XML Viewer](https://codebeautify.org/xmlviewer)" do site "Code Beautify"
- Clicar em "File"
- Informar o diretório copiado anteriormente

Ex.: 
> C:\Users\usuario\Downloads\cypress-reports-html-mochawesome-xml-junit-firefox\xml

- Ir realizando o upload dos reports "junit-...xml" gerados e armazenados anteriormente no GitHub Actions, utilizado nas pipelines do Azure DevOps e descompactados para serem verificados na seção "Output" da funcionalidade "XML Viewer" do site "Code Beautify"

# :mag_right: Verificar os vídeos executados no navegador chrome, gerados e armazenados anteriormente no GitHub Actions e descompactados no computador 
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi baixada a pasta compactada "cypress-videos-chrome.zip" anteriormente
- Descompactar a pasta
- Acessar a pasta descompactada "cypress-videos-chrome"
- Clicar 2 vezes sob os vídeos gerados e armazenados anteriormente no GitHub Actions e descompactados para ser abertos e verificados no computador

Ex.:
> login.cy.js.mp4

# :mag_right: Verificar os screenshots gerados e armazenados anteriormente no GitHub Actions e descompactados no computador 
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi baixada a pasta compactada "cypress-screenshots-chrome.zip", "cypress-screenshots-firefox.zip" anteriormente
- Descompactar a pasta
- Na pasta descompactada "cypress-screenshots-chrome", "cypress-screenshots-firefox", acessar "nome-suite-testes.cy.js"

Ex.:
> login.cy.js

- Clicar 2 vezes sob os screenshots gerados e armazenados anteriormente no GitHub Actions e descompactados para ser abertos e verificados no computador

Ex.:
> Cadastrar usuários -- Cenário Cadastrar usuário válido ou inválido ... - Apresentar mensagem ... (failed).png
>
> . . .
>
> Login -- Cenário Login com usuário administrador - Apresentar tela Home ... -- after each hook.png
>
> . . .
> 
> Login -- Cenário Login com usuário inválido ... - Apresentar mensagem ... -- after each hook.png 

---
# :warning: Antes de clonar ou executar este projeto localmente no computador, é necessário ter os pré-requisitos e seguir as instruções abaixo :point_down:

## :hammer_and_wrench: Sistema Operacional 
- macOS 10.9 ou superior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux Ubuntu 20.04 ou superior, Fedora 21 e Debian 8 (x86_64 ou Arm 64 bits (x64 ou arm64)) 
- Windows 10 ou superior (apenas 64 bits)

## :hammer_and_wrench: Hardware
- Mínimo de 2 CPUs para rodar o Cypress
- 1 CPU adicional se a gravação de vídeo estiver ativada

## :hammer_and_wrench: Memória RAM
- 8 GB ou superior para execuções de teste mais longos

## :hammer_and_wrench: Janela do "Explorador de Arquivos" > "Visualizar" > "Mostrar" e marcar algumas opções
- Abrir uma janela do "Explorador de Arquivos"
- Clicar em "Visualizar" > "Mostrar"
- Clicar em "Extensões de nomes de arquivos" 
- Clicar em "Itens ocultos"

## :hammer_and_wrench: Instalar algumas dependências necessárias 
### Baixar e instalar o git e gitbash; configurar o git
- Caso ainda não tenha o git e gitbash baixado e instalado, acessar o link do [git e gitbash](https://git-scm.com/download/win), baixar e instalar como administrador
- Caso ainda não tenha configurado o git, seguir os passos apresentados neste link ["Configure a ferramenta"](https://training.github.com/downloads/pt_BR/github-git-cheat-sheet/#:~:text=Configure%20a%20ferramenta) e configurar

### Desinstalar completamente Node.js e npm que já foram instalados em algum outro momento 
- Seguir os passos apresentados neste [link](https://www.google.com/search?q=desinstalar+completamente+nodejs+e+res%C3%ADduos+windows+11+pt-br+sem+programas+terceiros)
  
### Node versão 18.12.1
- Baixar e instalar o [node v18.12.1](https://nodejs.org/dist/v18.12.1/) > node-v18.12.1-x64.msi
- Abrir um novo gitbash ou outro terminal  
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
> v18.12.1
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
> 8.19.2
- Fechar este gitbash ou terminal

---
# :hammer_and_wrench: Clonar o projeto
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde será clonado o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
- Copiar este diretório
- Abrir um novo gitbash
- Informar o comando abaixo para acessar onde será clonado o projeto
> cd "<diretório\copiado\anteriormente>"

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

- Informar o comando abaixo para forçar, mesmo tendo possíveis conflitos, a instalação das dependências do projeto
```
npm install --force
```

# :hammer_and_wrench: Instalar as extensões no Visual Studio Code (VS Code)
- Caso ainda não tenha o VS Code baixado e instalado, acessar o site do [Visual Studio Code](https://code.visualstudio.com/download), baixar e instalar com a opção "System Installer"
- Com o Visual Studio Code aberto, caso seja apresentado alguma mensagem de "Instalar pacote de idiomas ...", clicar no ícone de configurações > "Don't Show Again"
- Clicar em "Manage" > "Profiles" > "Create Profile"
- Em "Profile name", informar "Cypress E2E"
- Clicar em "Create"
- Clicar em "Extensions", informar e instalar as extensões abaixo:
  - Hyper Term Theme
    - HasseNasse
      - Clicar em "Hyper Term Black" apresentada para habilitar a extensão
  - Material Icon Theme
    - Philipp Kief
      - Clicar em "Material Icon Theme" apresentada para habilitar a extensão 
  - Cypress Snippets
    - Cliff Su
- Fechar o VS Code
        
# :bookmark_tabs: Abrir o VS Code diretamente na pasta do projeto "testes-automatizados-e2e-front-serve-rest_cypress" 
- No gitbash aberto anteriormente, informar o comando abaixo para abrir o VS Code diretamente na pasta do projeto "testes-automatizados-api-serve-rest_cypress"
```
code .
```
- Aguardar o VS Code ser aberto
- Fechar este gitbash
- No VS Code aberto, caso seja apresentado "Do you trust the authors on the files in this folder?", marcar "Trust the authors of all files in the parent folder ...."
  - Clicar em "Yes, I trust the authors ...."

# :hammer_and_wrench: Criar arquivos "usuario.json", informando os dados com base nos arquivos "usuario.example.json", etc
- No VS Code aberto anteriormente, acessar "cypress > fixtures"
- Criar o arquivo "usuario.json"
  - Informar os dados com base no arquivo ["usuario.example.json"](./cypress/fixtures/usuario.example.json)
    - Salvar o arquivo "usuario.json" com os dados informados anteriormente
  
---
# :dart: Executar testes automatizados e Gerar os resultados dos testes no computador
## :triangular_flag_on_post: Executar os testes automatizados E2E (ponta a ponta) no navegador chrome em um ambiente de produção na interface gráfica do Cypress e Gerar os resultados dos testes no computador (cypress > screenshots)
- Ter o navegador Chrome instalado
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-e2e-front-serve-rest_cypress”
- Copiar este diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
> cd "<diretório\copiado\anteriormente>"

Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para abrir a interface gráfica do Cypress 
```
npm run cy:open
```
- NÃO fechar este gitbash
- Na interface gráfica do Cypress, clicar em "Continue"
- Em "Welcome to Cypress!", clicar em "E2E Testing"
- Em "Choose a browser", clicar em "Chrome"
- Clicar em "Start E2E Testing in Chrome"
- Em "testes-automatizados-e2e-front-serve-rest_cypress" > "Specs"> "E2E specs" > "cypress\e2e", clicar em "login", "cadastrar-usuarios", etc
- Após executar os testes, fechar todas as interfaces gráficas do Cypress
- Fechar este gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados E2E (ponta a ponta) no navegador chrome em modo headless (2° plano) em um ambiente de produção e Gerar os resultados dos testes no computador (cypress > reports; cypress > screenshots; cypress > videos)
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-e2e-front-serve-rest_cypress”
- Copiar este diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
> cd "<diretório\copiado\anteriormente>"

Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador chrome em modo headless (2º plano) em um ambiente de produção (comando semelhante ao que é utilizado no "Passo 3" do job "cypress-chrome" da "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress" em ".github > workflows > [workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml](./.github/workflows/workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml)" no GitHub Actions) e Gerar os resultados dos testes no computador (cypress > reports; cypress > screenshots; cypress > videos):
```
npm run test
```
- Após executar os testes, fechar este gitbash

## :triangular_flag_on_post: Executar os testes automatizados E2E (ponta a ponta) no navegador firefox em um ambiente de produção na interface gráfica do Cypress e Gerar os resultados dos testes no computador (cypress > screenshots) 
- Ter o navegador Firefox instalado
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto “testes-automatizados-e2e-front-serve-rest_cypress”
- Copiar este diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
> cd "<diretório\copiado\anteriormente>"

Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para abrir a interface gráfica do Cypress 
```
npm run cy:open
```
- NÃO fechar este gitbash
- Na interface gráfica do Cypress, clicar em "Continue"
- Em "Welcome to Cypress!", clicar em "E2E Testing"
- Em "Choose a browser", clicar em "Firefox"
- Clicar em "Start E2E Testing in Firefox"
- Em "testes-automatizados-e2e-front-serve-rest_cypress" > "Specs"> "E2E specs" > "cypress\e2e", clicar em "login", "cadastrar-usuarios", etc
- Após executar os testes, fechar todas as interfaces gráficas do Cypress
- Fechar este gitbash

## :triangular_flag_on_post: Ou executar os testes automatizados E2E (ponta a ponta) no navegador firefox em modo headless (2° plano) em um ambiente de produção e Gerar os resultados dos testes no computador (cypress > reports; cypress > screenshots)
- Abrir uma janela do "Explorador de Arquivos"
- Acessar o diretório onde foi clonado o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
- Copiar este diretório 
- Abrir um novo gitbash
- Informar o comando abaixo para acessar o projeto "testes-automatizados-e2e-front-serve-rest_cypress"
> cd "<diretório\copiado\anteriormente>"

Ex.: 
```
cd "C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress"
```
- Informar o comando abaixo para executar todas as funcionalidades e/ou cenários do projeto no navegador firefox em modo headless (2º plano) em um ambiente de produção (comando semelhante ao que é utilizado no "Passo 3" do job "cypress-firefox" da "Pipeline Testes Automatizados E2E (Ponta a Ponta) Front ServeRest Cypress" em ".github > workflows > [workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml](./.github/workflows/workflow-testes-automatizados-e2e-front-serve-rest-cypress.yml)" no GitHub Actions) e Gerar os resultados dos testes no computador (cypress > reports; cypress > screenshots):
```
npm run test:ff
```
- Após executar os testes, fechar este gitbash

---
# :mag_right: Verificar os resultados das execuções dos testes automatizados no computador 
## :bookmark_tabs: Report html no computador
- No VS Code aberto anteriormente, acessar "reports > html > index.html" 
- Clicar com botão direito do mouse sob o report "index.html" > "Reveal in File Explorer" 
- Na janela do "Explorador de Arquivos" aberta automaticamente, clicar 2 vezes sob o report "index.html" 
- No report html aberto anteriormente no navegador padrão no computador, ir clicando em cada cenário para verificar mais detalhes, screenshot e/ou vídeo anexados  

## :bookmark_tabs: Vídeos no computador
- No VS Code aberto anteriormente, acessar "cypress > videos"
  
Ex.:
> cadastrar-usuarios.cy.js.mp4

## :bookmark_tabs: Screenshots no computador
- No VS Code aberto anteriormente, em "cypress > screenshots", acessar "nome-suite-testes.cy.js"

Ex.:
> cadastrar-usuarios.cy.js

- Clicar 2 vezes sob os screenshots 
  
Ex.:
> Cadastrar usuários -- Cenário Cadastrar usuário válido ou inválido ... - Apresentar mensagem ... (failed).png
>
> . . .
>
> Login -- Cenário Login com usuário administrador - Apresentar tela Home ... -- after each hook.png
>
> . . .
> 
> Login -- Cenário Login com usuário inválido ... - Apresentar mensagem ... -- after each hook.png  

# :bookmark_tabs: Reports xml no computador 
- No VS Code aberto anteriormente, acessar "reports > xml"
- Clicar com botão direito do mouse sob algum dos reports "junit-...xml" > "Reveal in File Explorer"
- Na janela do "Explorador de Arquivos" aberta automaticamente, copiar este diretório
- Acessar a funcionalidade "[XML Viewer](https://codebeautify.org/xmlviewer)" do site "Code Beautify"
- Clicar em "File"
- Informar o diretório copiado anteriormente

Ex.: 
```
C:\Projetos\Automação\testes-automatizados-e2e-front-serve-rest_cypress\reports\xml
```

- Ir realizando o upload dos reports "junit-...html" gerados e armazenados anteriormente no computador, utilizado nas pipelines do Azure DevOps e descompactados para serem verificados na seção "Output" da funcionalidade "XML Viewer" do site "Code Beautify"

---
### Feito com :heart: por Andressa Karla :wave: 

### [![Medium](https://img.shields.io/badge/-Medium-595D60?style=plastic&logo=Medium&logoColor=white&link=https://medium.com/@andressakarla)](https://medium.com/@andressakarla) [![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=plastic&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andressakarla/)](https://www.linkedin.com/in/andressakarla/)

---
