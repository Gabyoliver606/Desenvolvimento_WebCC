/*import React, { useState, useEffect } from 'react'

const Cidades = () => {
    const [cidade1, setCidade1] = useState(0) //
    const [cidade2, setCidade2] = useState(0)
    const [cidade3, setCidade3] = useState(0)
    const [cidade4, setCidade4] = useState(0)
    const [maisVotada, setMaisVotada] = useState(0)
    const [menosVotada, setMenosVotada] = useState(0)
    useEffect(() => {
        if (cidade1 > cidade2 && cidade1 > cidade3 && cidade1 > cidade4) {
            setMaisVotada("Fortaleza")
        }
        else if (cidade2 > cidade1 && cidade2 > cidade3 && cidade2 > cidade4) {
            setMaisVotada("Quixadá")
        }
        else if (cidade3 > cidade1 && cidade3 > cidade2 && cidade3 > cidade4) {
            setMaisVotada("Choró")
        }
        else if (cidade4 > cidade1 && cidade4 > cidade2 && cidade4 > cidade3) {
            setMaisVotada("Aracoiaba")
        }
        else {
            setMaisVotada("Empate")
        }
        if (cidade1 < cidade2 && cidade1 < cidade3 && cidade1 < cidade4) {
            setMenosVotada("Fortaleza")
        }
        else if (cidade2 < cidade1 && cidade2 < cidade3 && cidade2 < cidade4) {
            setMenosVotada("Quixadá")
        }
        else if (cidade3 < cidade1 && cidade3 < cidade2 && cidade3 < cidade4) {
            setMenosVotada("Choró")
        }
        else if (cidade4 < cidade1 && cidade4 < cidade2 && cidade4 < cidade3) {
            setMenosVotada("Aracoiaba")
        }
        else {
            setMenosVotada("Empate")
        }
    }
        ,
        [cidade1, cidade2, cidade3, cidade4]
    )
    const aumentaCidade1 = () => {
        setCidade1(cidade1 + 1)
    }
    const aumentaCidade2 = () => {
        setCidade2(cidade2 + 1)
    }
    const aumentaCidade3 = () => {
        setCidade3(cidade3 + 1)
    }
    const aumentaCidade4 = () => {
        setCidade4(cidade4 + 1)
    }
    return (
        <>
            <h1>Fortaleza: {cidade1} </h1>
            <h1>Quixadá: {cidade2} </h1>
            <h1>Choró: {cidade3} </h1>
            <h1>Aracoiaba: {cidade4} </h1>
            <h1>Cidade mais votada: {maisVotada} </h1>
            <h1>Cidade menos votada: {menosVotada} </h1>
            <button
                onClick={aumentaCidade1}
            >
                Fortaleza +1
            </button>
            <button
                onClick={aumentaCidade2}
            >
                Quixadá +1
            </button>
            <button
                onClick={aumentaCidade3}
            >
                Choró +1 
            </button>
            <button
                onClick={aumentaCidade4}
            >   
                Aracoiaba +1
            </button>   
        </>
    )
}

export default Cidades */

import { useState, useEffect } from 'react'

const VotaCidades = () => {

    const [cidades, setCidades] = useState(
        [
            { nome: 'Fortaleza', votos: 0 },
            { nome: 'Quixadá', votos: 0 },
            { nome: 'Choró', votos: 0 },
            { nome: 'Aracoiaba', votos: 0 }
        ]
    )

    const [flag, setFlag] = useState(false)

    const votarNaCidade = (nome) => {
        /*for(let i=0;i<cidades.length;i++) {
            if(cidades[i].nome === nome) {
                cidades[i].votos = cidades[i].votos + 1 
            }
        }*/
        const index = cidades.findIndex(
            (cidade) => cidade.nome === nome
        )
        console.log(index)

        setFlag((flagAnterior)=>!flagAnterior)
        //setCidades(cidades)
        //console.log(cidades)
    }

    const votarNaCidadeV2 = (nome) => {
        /*const newCidades = cidades.map(
            (cidade) => {
                if(cidade.nome === nome) return {nome: cidade.nome, votos: cidade.votos + 1}
                return {nome: cidade.nome, votos: cidade.votos}
            }
        )*/

        const newCidades = cidades.map(
            (cidade) => {
                if(cidade.nome === nome)
                    cidade.votos += 1
                return cidade
            }
        )
        console.log(cidades[0].votos)
        setCidades(newCidades)
        
    }

    return (
        <div>
            <h1>Vota Cidades</h1>
            <h3>{cidades[0].nome}: {cidades[0].votos} </h3>
            <h3>{cidades[1].nome}: {cidades[1].votos} </h3>
            <h3>{cidades[2].nome}: {cidades[2].votos} </h3>
            <h3>{cidades[3].nome}: {cidades[3].votos} </h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Fortaleza")}>Fortaleza +1</button>
                        </td>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Quixadá")}>Quixadá +1</button>
                        </td>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Choró")}>Choró +1</button>
                        </td>
                        <td>
                            <button onClick = {()=>votarNaCidadeV2("Aracoiaba")}>Aracoiaba +1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default VotaCidades