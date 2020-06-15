import React, {Component} from 'react';
import Post from './Post';
import profile from '../assets/profile.jpg';

class Postlist extends Component {
    state = {
        posts: [
            {
                id: 1, 
                author: {
                    name: "Ilgsson Braga", 
                    avatar: 'https://avatars1.githubusercontent.com/u/34402902?s=460&v=4'
                },
                date: "7 min",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [{
                    id:1,
                    author: {
                        name: "Diego Fernandes",
                        avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                    },
                    content: "A Rocketseat está sempre em busca de novos membros para o time e, geralmente, ficamos de olho em quem se destaca no Bootcamp. Inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, Se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo! Esse comentário é real.)",
                    date: "3min"
                },
                ]
            },

            {
                id: 2, 
                author: {
                    name: "Gabriel Lisboa", 
                    avatar: 'https://www.mobileautowaxingheadlightrestorationlasvegas.com/wp-content/uploads/2019/10/administrator-male.png'
                },
                date: "30 min",
                content: "Fala galera, beleza? Estou fazendo o Bootcamp da Rocketseat e está sendo muito massa!  Alguém mais aí fazendo? Comenta aí pra gente trocar uma ideia!",
                comments: [{
                    id:2,
                    author: {
                        name: "Ilgsson Braga",
                        avatar: "https://avatars1.githubusercontent.com/u/34402902?s=460&v=4"
                    },
                    content: "Também estou fazendo e está sendo uma experiência incrível. Estou no 4º módulo estudando React e já construí uma API REST usando NodeJS.",
                    date: "25min"
                },
                {
                    id:3,
                    author: {
                        name: "Zezinho",
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1f_KWB8qXOvawReF5upm4C5SV29JRohUXQpwqCa-8FczZi6Ob"
                    },
                    content: "Que maaaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é a desse Bootcamp GoStack, dizem que os devs de lá saem com super poderes.",
                    date: "8min"
                }
                ]
            }
        ]
    }

    render(){
        return (
            this.state.posts.map(post => <Post key={post.id} data = {post} />)
            
        )
    }
        
    }


export default Postlist;