import axios from "axios";

function updateData (newData, url, id) {
    axios.put(url+"/"+id, newData)
        .then(response => {
            console.log(response.data.message); // Response message from the API
            // window.location.reload(); 
        })
        .catch(error => {
            console.error(error);
    });
}

export{updateData}