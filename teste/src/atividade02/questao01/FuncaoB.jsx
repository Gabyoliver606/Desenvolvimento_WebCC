import MinhaCor from "./MeuContexto"

const FuncaoB = () => {
    return (

       <MinhaCor.Consumer>
            {
                (cores) => {
                    return (
                        <h1 style = {{backgroundColor:cores.bkgB}}>Função B</h1>
                    )
            }
        }

        </MinhaCor.Consumer>
    )
}

export default FuncaoB