import React from "react"
import logofreecodecamp from '../imagenes/gato.jpg'

function LogoFreecodecamp(){
    return(
        <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logofreecodecamp}  alt='Logo de FreeCodeCamp'/>
        </div>
        )
}

export default LogoFreecodecamp
