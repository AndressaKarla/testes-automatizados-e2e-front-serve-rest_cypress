const selectors = {
    LOGIN: {
        CAMPO_EMAIL: '#email',
        CAMPO_SENHA: 'input[name="password"]',
        BOTAO_ENTRAR: 'button[type="submit"]',
        FORM: { 
            SELECTOR: 'form[class="form"]',
            MSG_OBRIGATORIEDADE_CAMPOS_EMAIL_SENHA: '×Email é obrigatório×Password é obrigatório',
            MSG_CAMPO_EMAIL_INVALIDO: 'Email deve ser um email válido',
            MSG_CAMPOS_EMAIL_OU_SENHA_INVALIDOS: 'Email e/ou senha inválidos',
            MSG_OBRIGATORIEDADE_CAMPOS_NOME_EMAIL_SENHA: '×Nome é obrigatório×Email é obrigatório×Password é obrigatório',
            MSG_SUCESSO_CADASTRO_USUARIO: 'Cadastro realizado com sucesso'
        },
        OPCAO_CADASTRE_SE: 'a[type="button"]'
    },
    CADASTRO_USUARIO: {
        CAMPO_NOME: 'input[placeholder="Digite seu nome"]',
        OPCAO_ADMIN: 'div[class="form-check"]',
        BOTAO_CADASTRAR: 'button[type="submit"]'
    },
    HOME: {
        TEXTO_BEM_VINDO: {
            SELECTOR: 'h1',
            TEXTO: 'Bem Vindo'
        },
        TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE: {
            SELECTOR: '.lead',
            TEXTO: 'Este é seu sistema para administrar seu ecommerce..'
        }
    }
}

export default selectors