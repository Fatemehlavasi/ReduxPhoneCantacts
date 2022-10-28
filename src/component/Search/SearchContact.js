
import './SearchContactStyle.css'

const SearchContact = ({search , handleSearch }) =>{

   

    return (
        <>
            <div  className='Search' >
                <div className='IconSearch'>
                    <i class="fa-solid fa-magnifying-glass" ></i>
                </div>
                <input className='input-search' value={search} onChange={handleSearch} placeholder='Search New User...'  />
            </div>
        </>
    )
}

export default SearchContact