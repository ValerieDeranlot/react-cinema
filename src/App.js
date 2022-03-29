import './App.css';
import trufoGif from "./trufo.gif"

function App() {
  return (
    <div className="App">
     <img src={trufoGif} alt="trufo gif" />
     <h1> artcitéciné</h1>
     <p>  "Lorsque j'étais critique, je pensais qu'un film, pour être réussi, doit exprimer simultanément une idée du monde et une idée du cinéma. La Règle du Jeu ou Citizen Kane répondaient bien à cette définition. Aujourd'hui je demande à un film d'exprimer soit la joie de faire du cinéma, soit l'angoisse de faire du cinéma et je me désintéresse de tout ce qui est entre les deux, c'est-à-dire de tous les films qui ne vibrent pas". </p>
    </div>
  );
}

export default App;
