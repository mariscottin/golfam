import React, {useState} from 'react';
import AddPost from '../components/AddPost';
import Posts from '../components/Posts';
import InicioHeader from '../components/InicioHeader';

import '../Inicio.css';


const Inicio = (props)=> {

    const [posts, setPosts] = useState(
        [
            {
                id: 1,
                user: {
                    id: 654321,
                    name: "Guillermo",
                    lastName: "Ferrari",
                    matricula: 115115,
                    club: "Club Nautico San Isidro",
                    age: 27,
                    handicap: '+1.0',
                    country: "Argentina",
                    profileImg: 'https://imagizer.imageshack.com/img923/9435/q28BmG.jpg'
                },
                body: 'Hoy hice mi primer Birdie!! Que alegría poder hacer un pajarito. Pegué un DRIVASO en el hoyo 3 del Nautico, la dejé a 88 yardas del green, y pegué un tremendo hierro 9 a la altura de la bandera. Metí un putt increible de 2mts aprox. Estoy FELIZ!!!!',
                likes: 26,
                comments: [
                    {
                        id: Math.floor(Math.random() * 1000),
                        user: {
                            id: 64534231,
                            name: "Ezequiel",
                            lastName: "Diez Peña",
                            matricula: 110736,
                            club: "Club Nautico San Isidro",
                            age: 32,
                            handicap: '4.6',
                            country: "Argentina",
                            profileImg: 'https://imagizer.imageshack.com/img923/5321/d6FUTM.jpg'
                        },
                        comment: 'Increible Willy!! Felicitaciones! Yo todavía no pude pero ya lo voy a lograr!!!',
                        date: '1/03/2020 - 17:27',
                        likes: 1
                    },
                    {
                        id: Math.floor(Math.random() * 1000),
                        user: {
                            id: 13243546,
                            name: "Federico",
                            lastName: "Prieto",
                            matricula: 109537,
                            club: "Club Nautico San Isidro",
                            age: 33,
                            handicap: '7.2',
                            country: "Argentina",
                            profileImg: 'https://imagizer.imageshack.com/img924/6154/QVl4IV.jpg'
                        },
                        comment: 'WOWWWW!!! Congrats my friend!!',
                        date: '01/03/2020 - 19:51',
                        likes: 3
                    }
                ],
                date: '28/02/2020 - 14:33'
            },
            {
                id: 2,
                user: {
                    id: 654321,
                    name: "Guillermo",
                    lastName: "Ferrari",
                    matricula: 115115,
                    club: "Club Nautico San Isidro",
                    age: 27,
                    handicap: '+1.0',
                    country: "Argentina",
                    profileImg: 'https://imagizer.imageshack.com/img923/9435/q28BmG.jpg'
                },
                body: 'Alguno para jugar mañana a la mañana?? Tengo la sensación de que al fin voy a lograr mi primer BIRDIE! Allá voy por vos pajarin!',
                likes: 1,
                comments: [],
                date: '27/02/2020 - 15:14'
            }
        ]
    );

    //Add a new post to FRONTEND --> Then needs to add to DB ass well
    const handleAddPost = (body, user) => {
        const newPost = {
            id: Math.floor(Math.random() * 100),
            user,
            body,
            likes: 0,
            comments: [],
            date: '2/3/2020 - 11:33',

        }
        setPosts(state => [newPost, ...state])
    }

    const handleLike = (id, num) => {
        posts.forEach((post, i) => {
            if (post.id === id) {
                let newArr = [...posts];
                newArr[i].likes = newArr[i].likes + num
                setPosts(newArr);
            }
        })
    }
    return(
        <div>
            <div className="Main-body">
                <InicioHeader />
                <AddPost handleAddPost={handleAddPost} currentUser={props.currentUser}/>
                <Posts posts={posts} handleLike={handleLike} currentUser={props.currentUser}/>
            </div>
        </div>
    )
}

export default Inicio;