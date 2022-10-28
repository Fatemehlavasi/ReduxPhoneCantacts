import { useParams  } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {RowTableContact} from "../../DATA/SinglePage/RowTableContact"
import './SinglepageStyle.css'

const SinglePageContact = () =>{
    const contacts = useSelector (state => state.contacts)
    console.log(contacts)
    const {ContactId} = useParams()
    console.log(ContactId)
    const [contact , setContact]= useState({})

    useEffect ( ()=>{

        setContact(contacts.filter(c => c.id === Number(ContactId))[0] ) 
        console.log()
    })
    return (
        <>

        <div className="Containersinglepage">
            {
                
                    RowTableContact.map(row =>(
                        <div className="Itemsinglepage">
                            <p>{contact[row.name]}</p>
                        </div>
                    ))
                   
               
            }
        </div>

        </>
    )
}


export default SinglePageContact