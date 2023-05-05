import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
// import ImageShow from "./components/ImageShow";
 

function App (){
     
    const [images, setImages]=useState([]);


    const handleSubmit = async(term)=>{
     //console.log(term);
      const result = await searchImages(term);
      
           setImages(result);
    };

    return (
    <div> <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
    </div>
    );
}

export default App; 


//Some Key points
//SearchBar component contains the text input a user will type into.
//imageList is responsible for showing all those images through the ImageShow component.

              
                
