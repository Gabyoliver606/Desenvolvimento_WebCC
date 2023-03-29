import React, { Component } from 'react '

const MeusDados = ({nome,curso,universidade}) => {
    return(
        <div>
            <h1>Nome: {this.props.nome}</h1>
            <h1>Curso: {this.props.curso}</h1>
            <h1>Universidade: {this.props.universidade}</h1>
        </div>
    )
}

export default MeusDados