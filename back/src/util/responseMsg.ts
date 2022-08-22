import { ServerResponse } from "http";
import { base } from "src/model/defaut";

export interface IResponseCreate {
    status:number,
    message:string,
    response: base | {}
}

export const messageSucess = {
    get:    'Buscado com sucesso',
    create: 'Criado com sucesso',
    update: 'Update com sucesso',
    delete: 'Deletado com sucesso',
}



  const responseMSG = async (res: ServerResponse, status:number, data:IResponseCreate) =>{
    res.writeHead(status, {'Content-Type': 'application/json' });
    res.end(JSON.stringify({
       ...data
   }));
   return
}

export const error404 = (res: ServerResponse) =>{
   res.writeHead(404, {'Content-Type': 'application/json' });
   res.end(JSON.stringify({
      status: false,
      message: 'Endpoint not found',
  }));
  return 
}

export const messages = {
    responseMSG:responseMSG,
    error404:error404
}

