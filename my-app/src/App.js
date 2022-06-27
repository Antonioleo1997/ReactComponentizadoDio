import React, { Component } from 'react'
import Layout from './componentes/header/layout'
import Perfil from './componentes/perfil'
import Repositorio from './componentes/repositorios'

function App (){
  return (
    <main>
      <Perfil />
        <Repositorio />
    </main>
  )
}

export default App