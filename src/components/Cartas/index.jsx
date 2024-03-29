import "./ItemDetail.css"
import { Link } from "react-router-dom";


export const BrujoDetalle = ({ id, idCategoria, nombre, precio, imagen, cantidadInicial, stock } ) => {

/* const [dataCantidad, setDataCantidad] = useState(0)
 */
return (
<div className='carta' key={id}>
    <img src={imagen} alt="" className="sizeSprite"/>
    <h2>{nombre}</h2>

    <Link to={`/producto/${id}`} className="btn btn-primary">Detalles</Link>

{/*     {precio > 0 && 
    <>
    <h3>Precio: {precio}</h3>
     <Cantidad nombre={nombre} id={id} precio={precio} setCantidad={setDataCantidad} cantidadInicial={cantidadInicial} stock={stock}/>
     <SumarAlCarro id={id}  nombre={nombre} precio={precio} cantidad={dataCantidad}/>    
    <h3>Stock: {stock}</h3>
    </>
    }  */}
    {stock===0 && <h3>Temporalmente sin stock!</h3>}
    {precio===0 && <h3>Proximamente a la venta!</h3>} 
</div>
)} 

export default BrujoDetalle