
import axios from "axios";

const searchImages= async(term) =>{
   const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
          Authorization: "Client-ID pgPsvy4zvSIYt7c_nb3UgV3IiMg0FOrs-V1MS_Vs1CM"
        },
        params: {
            query: term
        },
    });
    
    //console.log(response.data.results);
    return response.data.results;
};

export default searchImages;