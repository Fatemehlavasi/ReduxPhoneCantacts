import { Link } from "react-router-dom"
import './HederLeayoutStyle.css'

const HederLeayout = ()=>{
    return (

        <Link to={"/"}>
            <div >
                <button className="btnback"><i class="fa-solid fa-rotate-left">Back</i></button>
            </div>
        </Link>
    )
}

export default HederLeayout