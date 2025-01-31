import './App.css';
import { useState} from "react";

function App() {
    const [taches, setTaches] = useState([]);
    const [nomTache, setNomTache] = useState("");

    function ajouterTache(taches, setTaches, nomTache) {
        if (nomTache.trim() !== "") {
            setTaches([...taches, { id: Date.now(), nom: nomTache }]);
        }
    }

    function supprimerTache(taches, setTaches, id) {
        setTaches(taches.filter(tache => tache.id !== id));
    }

    return (
        <div className="container">
            <input
                value={nomTache}
                onChange={(e) => setNomTache(e.target.value)}
                placeholder="Nom de la tâche"
            />
            <button onClick={() => {
                ajouterTache(taches, setTaches, nomTache);
                setNomTache("");
            }}>Ajouter</button>
            <ul>
                {taches.map(tache => (
                    <li key={tache.id}>
                        {tache.nom}
                        <button onClick={() => supprimerTache(taches, setTaches, tache.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
