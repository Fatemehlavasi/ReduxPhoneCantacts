import { useState } from "react"
import { useSelector  } from "react-redux"
import TableRow from "./TableRow"
import SearchContact from "../Search/SearchContact"
import './RowTablecontactStyle.css'
 
 const RowTablecontact = () =>{

     const contacts = useSelector (state => state.contacts)
     console.log(contacts)

    const [search, setSearch] = useState('')
    const handleSearch = e =>{
        setSearch(e.target.value)
            }
            
    // console.log(contacts)
    return (
            <div className="Contactshome">
                <SearchContact search={search} handleSearch={handleSearch} />
                {contacts.filter(contact => contact.name.toUpperCase().includes(search.toUpperCase())).map (contact =>  <TableRow contact={contact} /> )}
            </div>
            )
 }

 export default RowTablecontact 