# AWS For Software Quality e Test Automation
![banner](/Assets/banner.png)
![Badge](https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green)[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
## Indice ⚙️
- [Autor](#autor-️)
- [Sobre o projeto](#sobre-o-projeto-)
- [Como usar a ServeRest](#como-usar-a-serverest-)
- [Mapa da ServeRest](#mapa-da-serverest-️)
- [Ferramentas utilizadas](#ferramentas-utilizadas-️)
- [Referências](#referências-)
- [Agradecimentos especiais](#agradecimentos-especiais-)
## Autor 🧙‍♂️

<a href="https://www.linkedin.com/in/joão-moura-7ab135209">
 <img alt="foto do autor" src="/Assets/eu.jpg" width="200px">
 <br />
 <b>João Paulo de Moura</b></a> <a href="https://www.linkedin.com/in/joão-moura-7ab135209/"></a>
 <br />

## Sobre o projeto 💻
Este projeto tem como objetivo proporcionar aos participantes uma experiência prática no dia a dia de um profissional de Garantia de Qualidade (QA). O projeto aborda tópicos fundamentais na vida do QA, incluindo:

- Planejamento e execução de testes
- Análise de requisitos
- Relatórios de defeitos
- Processos de melhoria de qualidade

O estágio é projetado para fornecer aos participantes as habilidades e conhecimentos necessários para iniciar uma carreira em QA.

Utilizando a API ServeRest como ferramenta de estudo, você terá a oportunidade de:

* **Testar diferentes funcionalidades de um e-commerce:**  Crie produtos, adicione itens ao carrinho, finalize compras, gerencie usuários e pedidos, e muito mais!
* **Simular cenários reais de testes:**  A API ServeRest oferece um ambiente seguro e controlado para você praticar suas habilidades de teste em um contexto real.
* **Aprender sobre as melhores práticas de testes de API:**  Entenda como funcionam as APIs REST e como realizar testes eficientes utilizando métodos HTTP como GET, POST, PUT e DELETE.
## Como usar a ServeRest 🔍

O ServeRest está disponível de forma [online](https://serverest.dev), no [npm](https://www.npmjs.com/package/serverest) e no [docker](https://hub.docker.com/r/paulogoncalvesbh/serverest/).

Todas essas opções possuem as mesmas rotas, regras, dados pré-cadastrados e documentação. Escolha a melhor opção para você.

No ambiente online os dados cadastrados são removidos diariamente, enquanto que no local basta reiniciar o ServeRest.

> Prefira a opção de ambiente local caso precise que os dados não sejam alterados por outro usuário.

### Online

Acesse **<https://serverest.dev>** para visualizar a documentação e as rotas disponíveis.

> Essa é a melhor opção para quem não possui NPM e Docker na máquina ou não quer preocupar em gerenciar ambiente.

O ServeRest online possui monitoramento constante do status e tempo de atividade para garantir que esteja sempre disponível.

### Localmente com NPM

Execute o seguinte comando no terminal:

```sh
npx serverest@latest
```

<details><summary><i>Abra para ver detalhes de configuração do ServeRest com NPM</i></summary>

## Configuração

Para visualizar as configurações que são possíveis de serem feitas execute o comando:

```sh
npx serverest -h
```

![Informação de opções e exemplos fornecidos no terminal](https://user-images.githubusercontent.com/29241659/84348644-d45eae00-ab8b-11ea-89a4-d8cda3b32b74.png)

#### Segurança (`--nosec`)

Por default, o _ServeRest_ irá fazer as seguintes alterações no cabeçalho, que podem ser desabilitadas com `npx serverest --nosec`:

**Cabeçalhos adicionados:**
- `Strict-Transport-Security: max-age=15552000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `X-DNS-Prefetch-Control: off`
- `X-Download-Options: noopen`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`

**Cabeçalho removido:**
- `X-Powered-By: Express`

Utilize esse comportamento nos seus testes, validando a presença/ausência desses cabeçalhos.

> Para saber mais leia o [checklist de segurança de API](https://github.com/shieldfy/API-Security-Checklist#api-security-checklist)

---

</details>

### Localmente com docker

Execute o seguinte comando no terminal:

```sh
docker run -p 3000:3000 paulogoncalvesbh/serverest:latest
```

Para visualizar as configurações que são possíveis de serem feitas execute o comando:

```sh
docker run -p 3000:3000 paulogoncalvesbh/serverest:latest --help
```
## Mapa da ServeRest 🗺️
![Mapa da ServeRest](/Sprint02/Assets/ServeRest.png)
## Ferramentas utilizadas ⚒️
![gitlab](https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white) ![vscode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) ![postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white) ![nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![Badge ServeRest](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white)

## Referências 🧭 
- Github utilizados como referência:
  - [Cubos Academy](https://github.com/cubos-academy/academy-template-readme-projects?tab=readme-ov-file#readme)
  - [abhisheknaiidu](https://github.com/abhisheknaiidu/awesome-github-profile-readme?tab=readme-ov-file)
  - [ServeRest](https://github.com/ServeRest/ServeRest)
## Agradecimentos especiais 🙇
Gostaria de agradecer a todos os colegas da minha turma e ao mentor, que tornaram esta jornada transformadora possível. Obrigado pelo apoio, orientação e colaboração!