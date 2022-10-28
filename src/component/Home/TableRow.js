
import rowtable from "../../DATA/home/DataHome"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deletecontact , checkCard } from "../../redux/slice/Contactreducer"
import './TableRowStyle.css'

const TableRow = ({contact}) =>{


    const dispatch = useDispatch()
    const handeldelete = id =>{
        dispatch(deletecontact(id))
    }

    const handelCheck=(id)=>{
        dispatch(checkCard(id))
    }


    return (
        <div className="Rowtablehome">

            <div className="Rowtable" >
                <div className="Rowtablecontact">
                { rowtable.map(row =>(
                        <div key={row.id}>
                        <div> {contact[row.title]} </div>
                        {/* <p onClick={() => handelCheck(row.id)} style={{cursor:'pointer'}}>
                        {contact[row.state] ? <i class="fa-solid fa-heart text-danger" style={{color:'red'}} ></i> : <i  class="fa-regular fa-heart " ></i>}
                        </p> */}
                        </div>
                    ))}
                </div>
                <div className="Rowtablebtn" >
                    <button className="btmhome" onClick={()=> handeldelete (contact.id)}>
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    <Link to={`/updateContact/${contact.id}`}>
                        <button  className="btmhome">
                        <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </Link>
                
                    <Link to ={`/Contacts/${contact.id}`}>
                        <button  className="btmhome">
                        <i class="fa-solid fa-eye"></i>
                        </button>
                    </Link>
                </div>
                        
            </div>
            
        </div>
    )
}
 



export default TableRow 

