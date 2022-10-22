import { useState } from "react";
import Game from "./components/Game";
import Movie from "./components/Movie";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function name(params) {
    
  }

  return (
    //<div className="App"></div>
    <div>
      <h1>Pagina Sandbox</h1>
      <h2>Aqui vale tudo</h2>
      <div>
        <button className="btn" onClick={()=> setIsMenuOpen(!isMenuOpen)}>Menu</button>
        {isMenuOpen && 
        <div>
          <a href="/">Filmes</a>
          <a href="/">Atores</a>
          <a href="/">Contato</a>
        </div>
        }
      </div>

      <Game name="Catan" minPlayers="3" maxPlayers="4" />
      <Game name="Codenames" minPlayers="4" maxPlayers="12" />

      <Movie name="Moving Castle" />
      <Movie name="Ponyo" />
    </div>
  );
}

export default App;
