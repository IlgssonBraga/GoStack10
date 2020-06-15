<h1 align=center><img src=".github/logo.png" alt="Fastfeet" title="Fastfeet" ></h1>

# :rocket: GoStack Challenge 02
Iniciando o back-end de uma transportadora fictícia chamada FastFeet.

# :computer: Tecnologias usadas

<ul>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express</a></li>
    <li><a href="https://www.docker.com/">Docker</a></li>
    <li><a href="https://www.postgresql.org/">Postgres</a></li>
    <li><a href="https://legacy.yarnpkg.com/en/">Yarn</a></li>
    <ul>
        <li><a href="https://sequelize.org/">Sequelize</a></li>
        <li><a href="https://legacy.yarnpkg.com/en/package/yup">Yup</a></li>
        <li><a href="https://legacy.yarnpkg.com/en/package/jsonwebtoken">Json Web Token</a></li>
        <li><a href="https://legacy.yarnpkg.com/en/package/bcryptjs">Bcryptjs</a></li>
        <li><a href="https://legacy.yarnpkg.com/en/package/eslint">Eslint</a></li>
        <li><a href="https://legacy.yarnpkg.com/en/package/prettier">Prettier</a></li>
    </ul>
    
</ul>

## :books: Instalação

Gerenciador de pacotes [yarn](https://legacy.yarnpkg.com/en/docs/install/#debian-stable). 

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```bash
sudo apt update && sudo apt install yarn
```
Para instalar o [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) só seguir os passos da [documentação](https://docs.docker.com/install/linux/docker-ce/ubuntu/) de acordo com seu sistema operacional.

## :pencil2: Como usar

Para começar a usar a aplicação basta seguir os comandos abaixo:

```bash
git clone https://github.com/IlgssonBraga/bootcamp-gostack-desafio-02.git
```

```bash
cd bootcamp-gostack-desafio-02
```

```bash
docker run --name fastfeet -e POSTGRES_PASSWORD=fastfeet -p 5432:5432 -d postgres
```

```bash
yarn
```

```bash
yarn dev
```
A partir daí já estará tudo configurado e o servidor rodando.

Pode ser utilizados software como o [Insomnia](https://insomnia.rest/) para rodar essa aplicação sem a necessidade de ter ou criar uma API baseada em métodos HTTP.

## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [License](LICENSE.md) para mais detalhes.

--- 

Made by [Ilgsson Braga](https://github.com/IlgssonBraga)
