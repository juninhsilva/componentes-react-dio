import { useState } from 'react';

const Card = () => {

    const [valor, setValor] = useState(0)

    function adicionar() {
        setValor(valor + 1);
    }

    function remover() {
        setValor(valor - 1);
    }

    return (
        <div className="card text-center">
            <div className="card-header">
                Meu Card
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <button className="btn btn-success" onClick={adicionar}>Adicionar</button>
                <p className="card-text">{valor}</p>
                <button className="btn btn-danger" onClick={remover}>Remover</button>
            </div>
        </div>
    )
}
export default Card;