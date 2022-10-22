import { useState} from 'react';
import Aviso from './Aviso';


function Game(props) {
    const [isSelected, setIsSelected] = useState(false); //hook (só pode ser chamado em funções de react)
    const [isLiked, setIsLiked] = useState(false); //hook (só pode ser chamado em funções de react)


    function selectHandler() {
        isSelected ? setIsSelected(false) : setIsSelected(true);
    }

    function likeHandler() {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }

    function avisoOffHandler() {
        setIsSelected(false);
    }

    

    return (
      <div className="card">
        <h2>{props.name}</h2>
        <h3>Min Players: {props.minPlayers}</h3>
        <h3>Max Players: {props.maxPlayers}</h3>
        <div className="actions">
          {/*JavaScript: Se os dois forem true, retorna o segundo*/}

          <button className="btn" onClick={selectHandler}>
            Selecionar
          </button>
          
          <button className="btn" onClick={likeHandler}>
            Like
          </button>
          
          {isSelected && <span>Selecionado</span>}
          {isLiked && <span>Curtiu!</span>}

          {isSelected && <Aviso onCancel={avisoOffHandler}/>}
        </div>

        {/*isSelected ? <p>Selecionado</p> : null*/}
      </div>
    );
}

export default Game;