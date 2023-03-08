import React from 'react'
import { useParams } from 'react-router';


const Usuario = () => {
    //let params = useParams(); 
    let { username } = useParams();
    console.log(username);

    return (
        <div>
            <h3>Perfil del usuario: </h3>
            <p>Nombre de usuario <b>{username}</b></p>
        </div>
    )
}

export default Usuario