import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>{
        [
        {nome: "João", email: "joao@gmail.com", curso: "Sistemas", media: 7},
        {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas", media: 8},
        {nome: "José", email: "jose@gmail.com", curso: "Sistemas", media: 5}    
        ].map((aluno) => 
            <Aluno nome ={aluno.nome} curso={aluno.curso} email={aluno.email} media={aluno.media} />
        )    
        }</div>
  )
}

export default App
