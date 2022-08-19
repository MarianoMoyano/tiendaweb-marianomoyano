import "./ItemDetail.css"
import { Cantidad } from "../Cantidad.jsx";
import SumarAlCarro from "../SumarAlCarro";
import { useState } from "react";


export const BrujoDetalle = ({ id, idCategoria, nombre, precio, imagen, cantidadInicial, stock } ) => {

    const [dataCantidad, setDataCantidad] = useState(0)

return (
<div className='carta'>
    <img src={imagen} alt="" className="sizeSprite"/>
    <h2>{nombre}</h2>
     
     {precio > 0 && 
    <>
    <h3>Precio: {precio}</h3>
    <Cantidad nombre={nombre} id={id} precio={precio} setCantidad={setDataCantidad} cantidadInicial={cantidadInicial}/>
    <SumarAlCarro id={id}  nombre={nombre} precio={precio} cantidad={dataCantidad}/>    
    <h3>Stock: {stock}</h3>
    </>
    } 
    {precio === 0 && <h3>Proximamente!</h3>}
</div>
)} 

export default BrujoDetalle