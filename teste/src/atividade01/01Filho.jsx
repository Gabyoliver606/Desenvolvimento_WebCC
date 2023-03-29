const Filho = ({ALTURA, PESO}) => {
    
    const calcularIMC = (ALTURA, PESO) => PESO / (ALTURA * ALTURA)
    const renderizarMensagem = (IMC) => {
        if (IMC > 25) return <h3>Acima do peso</h3>
        else if (IMC < 18) return <h3>Abaixo do peso</h3>
        return <h3>Peso ideal</h3>
    }
    
    return (
        <div>
            <h1>O IMC é: {calcularIMC(ALTURA,PESO)}</h1>
            {renderizarMensagem(calcularIMC(ALTURA,PESO))}
        </div>
    )
}

export default Filho