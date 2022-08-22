const url = process.env.API || 'http://localhost:5000/api';

export function  salvarDadosCliente(data:any){
  const xhr = new XMLHttpRequest();

  xhr.open('POST', `${url}/clients/create`);
  xhr.send(JSON.stringify(data));

  xhr.onload = () => {
    if (xhr.status != 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      const response = JSON.parse(xhr.response)
      alert(`${response.message}`); // response is the server response
    }
  };
  
}