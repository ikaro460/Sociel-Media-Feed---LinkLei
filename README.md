</h1>
<h1 align="center">
  Icaro's Social Media Feed
</h1>
  <h2 align = "center">
  Fullstack Dev Test - Linklei
  </h2>
<p align = "center">
Esta é uma aplicação para um feed de rede social simplificada feita com React e JavaScript para o front end e uma fakeAPI utilizando oo JSON server para o back end.
</p>

<blockquote align = "center">
“Computadores fazem arte. - Chico Science”
</blockquote>

# **Back-End**

## **Endpoints**

A API tem apenas um endpoint, sendo uma lista com as postagens que irão aparecer na tela, que será utilizada para listar, adicionar, editar e remover postagens.
<br/>

O url base da API é https://social-media-feed-posts.herokuapp.com/

### _Nenhuma rota precisa de autenticação_

<h2 align ='center'> Listando posts </h2>

Nessa aplicação o usuário pode ver posts já cadastrados na plataforma, na API podemos acessar a lista dessa forma:

`GET /posts - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": 1,
    "avatar": "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
    "authorName": "Mattosinho Advocacia Criminal",
    "date": "23 de setembro de 2022 às 16:32",
    "category": "Post",
    "image": "https://app.linklei.com.br/0/image/resize?src=userfiles/posts/mattosinho-advocacia-criminal/739561b72510840dc096df77774824ef.jpg&w=600&h=450",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis cursus egestas. "
  },
  {
    "id": 2,
    "avatar": "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
    "authorName": "GRM Advogados",
    "date": "23 de setembro de 2022 às 16:32",
    "category": "Post",
    "image": "https://app.linklei.com.br/0/image/resize?src=userfiles/posts/grbm-advogados/99bcbb77490a376c383c44ce8c1dc98f.jpg&w=600&h=450",
    "text": "PIM registra crescimento de 10,74% e fatura R$ 82,32 bilhões Crescimento do primeiro semestre de 2022, comparado ao mesmo período do último ano...."
  }
]
...
```

<h2 align ='center'> Criação de post </h2>

`POST /posts - FORMATO DA REQUISIÇÃO`

```json
{
  "id": 7,
  "avatar": "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
  "authorName": "Ícaro Gaspar Nascimento",
  "date": "23 de setembro de 2022 às 14:31",
  "category": "Post",
  "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&w=1000&q=80",
  "text": "Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. "
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": 7,
  "avatar": "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
  "authorName": "Ícaro Gaspar Nascimento",
  "date": "23 de setembro de 2022 às 14:31",
  "category": "Post",
  "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&w=1000&q=80",
  "text": "Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. "
}
```

<h2 align ='center'> Excluir post </h2>

Também é possível excluir um post, utilizando o id do post:

`DELETE /post/{id do post}`

```
Não é necessário um corpo da requisição.
```

<h2 align ='center'> Editando post </h2>

Da mesma forma é possível também editar um post utilizando o seu id:

`PATCH /posts/{id do post} - FORMATO DA REQUISIÇÃO`

```json
{
  "id": 7,
  "avatar": "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
  "authorName": "Ícaro Gaspar Nascimento",
  "date": "23 de setembro de 2022 às 14:31",
  "category": "Post",
  "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&w=1000&q=80",
  "text": "Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. "
}
```

---

# **Front-End**

O front end foi feito com base nos padrões de boas práticas, clean code e _DRY_ aceitos pelos padrões da comunidade, o mais próximo possível do mockup. </br>
</br>
Foi utilizado a framework _React Bootstrap_ na componentização, com hooks do react para criar contextos fora outras bibliotecas utilizadas para funcionalidades específicas como no caso da _moment.js_ para envio do horário atual no momento da postagem.
<br/>
<br/>

Segue o esquema visual da estrutura do projeto:

![Icaro Excalidraw Schem](src\graphics\Untitled-2022-04-17-1426.svg "Title")
