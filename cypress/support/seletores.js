const seletores = {
    LOGIN: {
        CAMPO_EMAIL: '#email',
        CAMPO_SENHA: 'input[name="password"]',
        BOTAO_ENTRAR: 'button[type="submit"]',
        FORM: 'form[class="form"]',
        OPCAO_CADASTRE_SE: 'a[type="button"]'
    },
    CADASTRO: {
        CAMPO_NOME: 'input[placeholder="Digite seu nome"]',
        OPCAO_ADMIN: 'div[class="form-check"]',
        BOTAO_CADASTRAR: 'button[type="submit"]'
    },
    HOME: {
        TEXTO_BEM_VINDO: 'h1',
        TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE: '.lead'
    }
}

export default seletores