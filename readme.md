# Documentação do Projeto: Shirt Listing

## Visão Geral

O **Shirt Listing** é um projeto front-end desenvolvido em Next.js que utiliza o JSON Server para armazenamento e listagem de dados de camisetas. Ele permite aos usuários visualizar e filtrar camisetas com base em diferentes critérios, como gênero e valores, além de oferecer uma funcionalidade de pesquisa.

## Instalação

Para começar a usar o **Shirt Listing**, siga estas etapas:

1. Clone o repositório do projeto do GitHub:

    ```
    git clone https://github.com/theronaldostar/shirt-listing.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd shirt-listing
    ```

3. Instale as dependências usando Yarn:

    ```
    yarn install
    ```

## Uso

Após a instalação das dependências, você pode iniciar o projeto executando o seguinte comando na raiz do projeto:

```
yarn dev
```

Isso iniciará a versão web do projeto, juntamente com a API fornecida pelo JSON Server.

## Rotas Disponíveis

-   **Listagem de todas as camisetas**:

    -   Rota: http://localhost:3000/shirt
    -   Descrição: Esta rota exibe todas as camisetas disponíveis. As camisetas podem ser filtradas por gênero (homem/mulher), valores e também podem ser pesquisadas usando uma caixa de texto para busca geral.

-   **Página Inicial**:
    -   Rota: http://localhost:3000/
    -   Descrição: A página inicial contém um botão que direciona os usuários diretamente para a rota de listagem de camisetas.

## Contribuição

Se você deseja contribuir para o projeto, sinta-se à vontade para enviar um pull request ou relatar problemas encontrados.

---

Adapte o conteúdo conforme necessário, incluindo detalhes específicos sobre as funcionalidades, estrutura do projeto e requisitos de desenvolvimento. Essa documentação servirá como um guia útil para você e para outros desenvolvedores que possam estar interessados no projeto.
