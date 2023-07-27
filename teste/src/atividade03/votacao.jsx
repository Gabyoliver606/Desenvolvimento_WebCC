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

    const [fortaleza, setFortaleza] = useState(0)
    const [quixada, setQuixada] = useState(0)
    const [choro, setChoro] = useState(0)
    const [aracoiaba, setAracoiaba] = useState(0)

    const[mais, setMais] = useState("")
    const[menos, setMenos] = useState("")

    useEffect(
        () => {
           // alert ("Votação iniciada")
            let cidades = [fortaleza,quixada,choro,aracoiaba]
            let nomes = ["Fortaleza", "Quixadá", "Choró", "Aracoiaba"]
            let maior = cidades[0]
            let menor = cidades[0]

            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] > maior) {
                    maior = cidades[i]
        }
                if (cidades[i] < menor) {
                    menor = cidades[i]
                }
                //console.log (maior + " " + menor)

                setMais ("")
                setMenos ("")

                for (let i = 0; i < cidades.length; i++) {
                    if (cidades[i] === maior) {
                        setMais((anterior) => anterior + " " + nomes[i])
                    }
                    if (cidades[i] === menor) {
                        setMenos((anterior) => anterior + " " + nomes[i])
                    }
                }
            }
        }
        , 
        [fortaleza,quixada,choro,aracoiaba]
    )
        

    return (
        <div>
            <h1>Vota Cidades</h1>
            <h3>Fortaleza: {fortaleza}</h3>
            <h3>Quixadá: {quixada}</h3>
            <h3>Choró: {choro}</h3>
            <h3>Aracoiaba: {aracoiaba}</h3>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={
                                () => setFortaleza(fortaleza + 1)
                            }
                            >Fortaleza +1</button>
                        </td>
                        <td>
                            <button onClick={
                                () => setQuixada(quixada + 1)
                            }
                            >Quixadá +1</button>
                        </td>
                        <td>
                            <button onClick={
                                () => setChoro(choro + 1)
                            }
                            >Choró +1</button>
                        </td>
                        <td>
                            <button onClick={
                                () => setAracoiaba(aracoiaba + 1)
                            }
                            >Aracoiaba +1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Mais Votada(s) {mais}</h2>
            <h2>Menos Votada(s) {menos}</h2>
        </div>
    )
}

export default VotaCidades