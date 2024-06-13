import React from 'react';

// Componente `HeaderBox` que recibe `type`, `title`, `subtext` y `user` como props
const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className='header-box'> {/* Contenedor principal de la caja del encabezado */}
      <h1 className='header-box-title'> {/* Título del encabezado */}
        {title} 
        {type === 'greeting' && ( // Si el tipo es 'greeting', muestra el nombre de usuario
          <span className='text-bankGradient'>
            &nbsp;{user} {/* Espacio seguido del nombre de usuario */}
          </span>
        )}
      </h1>

      <p className='header-box-subtext'> {/* Subtexto del encabezado */}
        {subtext}
      </p>
    </div>
  )
}

export default HeaderBox; // Exportando el componente `HeaderBox`
