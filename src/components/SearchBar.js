import "./SearchBar.css"; 
import { useState } from "react";

function SearchBar({onSubmit}){
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        //Whenever we're handling a form submission event, we can disable all the automatic stuff going on by calling event,preventDefault();

    
       onSubmit(term);  
    
       
    };
      
    //Handler to watch input element for an onChange event 
       const handleChange= (event)=>{
         setTerm(event.target.value); //updating our state.
       };
       
    
    return (
        <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label>Enter Search Term</label>
        <input value ={term} onChange ={handleChange}/>
        </form>
     
    </div>
    );
}

export default SearchBar;

    
    

