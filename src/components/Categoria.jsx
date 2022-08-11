import { useEffect, useState } from "react";
import { getPokeCategoriaById } from "../servicios/pokemonapi";
import { useParams } from "react-router-dom";
import {getDoc, doc, getFirestore} from "firebase/firestore";
import { PokeDetalle } from "./Cartas";
import "../components/Cartas/ItemDetail.css";

const Categoria = () => {
  const { id } = useParams();
    const [dataCategoria, setDataCategoria] = useState([]);
    
    useEffect(() => {

      const db = getFirestore();
      const docRef = doc (db, "productos", "1")
      getDoc(docRef).then((snapshot)=> console.log ({...snapshot.data(), id:snapshot.id} ));

      getPokeCategoriaById(id).then((data) => setDataCategoria(data));
      console.log (dataCategoria)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  

    return (
      <div className="grid-Cartas grid-fondo"> 
          { dataCategoria.map((pokemon) => (
            <div>
                  <PokeDetalle
                    id={pokemon.id}
                    nombre={pokemon.name} 
                    cost={pokemon.cost} 
                    sprite={pokemon.sprites.default}/>
                  </div>))
          }
      </div> 
      );
  };
;
export default Categoria;