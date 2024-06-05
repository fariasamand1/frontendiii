import React from 'react'

const Aluno = ({nome, email, curso, media}) => {
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso:{curso}</p>
        <p>Status: {media >= 7 ? <span>aprovado</span> : <span>reprovado</span>}</p>
    </div>
  )
}

export default Aluno
