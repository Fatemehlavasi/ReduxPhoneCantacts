
import { forminput , inputEmpty } from "../../DATA/Form/inputsForm";
import { useSelector ,useDispatch } from "react-redux";
import { addContact , updateContact } from "../../redux/slice/Contactreducer";
import { useEffect , useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import './ContactFormStyle.css'

const ContactForm = ()=>{


    const contacts = useSelector (state => state.contacts)
    console.log(contacts)
    const dispatch = useDispatch()
    const linkAddContact = useNavigate()
    const {ContactId} = useParams()
    // console.log(ContactId)
    

    const [form , setForm] = useState (inputEmpty)
    const [stata, setState] = useState('add')

    const handleChange = e =>{
        setForm({...form , [e.target.name]:e.target.value})
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        if (stata === 'add') {
            dispatch(addContact(form))
        } else if (stata === 'update') {
            dispatch(updateContact(form))
        }
        clearInput()
        linkAddContact("/")
    }


    const clearInput = ()=>{
        setForm (inputEmpty)
    }


    useEffect  (()=>{
        return ()=>{
            clearInput() 
        }
    } , [])

    

    useEffect(() => {
        const data = contacts.filter(contact => contact.id === Number(ContactId))[0]
        console.log(data)
        if (data) {
            setForm(data)
            setState('update')
        }
    }, [])


    return(
         <div className="ContainerFrom">
                <form  onSubmit={handleSubmit} className="ContainerFrominput">
                    {
                        forminput.map (inputcontact =>(
                            <div className="FormInputs" > 
                                <label>{inputcontact.name}</label>
                                <input  name={inputcontact.name} value={form[inputcontact.name]}  onChange={handleChange} required />
                            </div>
                        ))
                    }
                           
                   <div>
                        <button type="submit" className="btmForm"> 
                            {stata === 'add' ? <i class="fa-solid fa-plus">add</i> : <i class="fa-regular fa-pen-to-square">update</i>}
                        </button>
                   </div>
                </form>
            </div> 
    )
}

export default ContactForm