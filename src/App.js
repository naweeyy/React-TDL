import './App.css';
import { useState} from "react";

function App() {
    const [taches, setTaches] = useState([]); // etat pour la liste de taches
    const [nomTache, setNomTache] = useState(""); // etat pour la tache en cours de saisie

    function ajouterTache() {
        if (nomTache.trim() !== "") {
          //  setTaches([...taches, { id: Date.now(), nom: nomTache }]);

            setTaches([...taches, nomTache ]);
            setNomTache("");
       }
    }

    function supprimerTache(id) {
        //setTaches(taches.filter(tache => tache.id !== id));

        const newTask = [...taches];
        newTask.splice(id, 1);
        setTaches(newTask);
    }

    return (
        <div className="container">
            <input
                value={nomTache}
                onChange={(e) => setNomTache(e.target.value)}
                placeholder="Nom de la tâche"
            />
            <button onClick={ajouterTache}>Ajouter</button>
            <ul>
                {taches.map((tache, id) => (
                    <li key={id}>
                        {tache}
                        <button onClick={() => supprimerTache(id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
