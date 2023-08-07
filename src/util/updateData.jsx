import axios from "axios";


function updateData (newData, url, id) {
    if (id === "Rupa"){
        id = 1;
    }
    if (id === "Sipil"){
        id = 2;
    }
    if (id === "Saraga"){
        id = 3;
    }

    axios.put(url+"/"+id, newData)
        .then(response => {
            console.log(response.data.message); // Response message from the API
            window.location.reload(); 
        })
        .catch(error => {
            alert(`Gagal: ${error}`);
    });
}

export{updateData}