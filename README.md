
<h1 align="center" >
    <img alt="Rateria" width="200" title="#Piupiuwer" src="./public/images/logo-fundo-azul.svg" />
</h1>

<h3 align="center">
    <a href="https://www.rateria.com.br">Página da Rateria - Poli USP</a>
</h3>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#deploy">Como rodar</a> •
 <a href="#edição">Como editar</a>
</p>


## Sobre

Aplicação web feita em NextJS por ritmistas da Rateria, bateria da Escola Politécnica da USP.


## Deploy

### Desenvolvimento

Para visualizar a aplicação em sua máquina, basta executar, com o yarn instalado em sua máquina:

```bash
yarn install
yarn dev
```

E abrir o [http://localhost:3000](http://localhost:3000) em seu navegador.

### Gerar site

A versão final HTML estática foi gerada usando o seguinte comando:

```bash
yarn build
```

E está hospedada no serviço Hostinger e pode ser visualizada na pasta './out' do repositório.

### Upload no servidor

Para subir os arquivos gerados para o servidor, execute o comando:

```bash
yarn deploy
```

**Atenção!** Ele funcionará somente se o arquivo com as variáveis de acesso ao servidor de hospedagem estiverem na pasta raiz do projeto.

### Ambiente de desenvolvimento

Dependendo da configuração do seu ambiente, algum dos comandos do yarn pode falhar com o erro:

```js
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```
Neste caso, reexecute o comando modificando as opções para o Node:

```bash
NODE_OPTIONS=--openssl-legacy-provider yarn dev
```

## Edição

De forma a facilitar edições futuras, serão gravados vídeos para a passagem de conhecimento e serão linkados aqui no repositório.

Também há a ideia de tornar o conteúdo do site dinâmico para que seja possível editar o site por meio de uma pasta do Drive.
