import { IncomingMessage, ServerResponse } from "http";
import { create } from "../../controller/client";
import { ICliente } from "../../model/client";
import { error404, IResponseCreate, messageSucess, messages } from "../../util/responseMsg";

export  const clientsRouter = async (req: IncomingMessage, res: ServerResponse) => {
    let notFound = true;
    

    async function callbackData(error:any, value:number){
        console.log("ERRO", error, value);
        let dataResponse = {} as IResponseCreate;
        let status = 200;

        dataResponse = {status: true, message:messageSucess.create, response:{id:value}} as unknown as IResponseCreate;
        if (error){
            dataResponse = { status: false, message:error.toString(), response:{}} as unknown as IResponseCreate;
        }
        messages.responseMSG(res, status, dataResponse); 
    }

    const regexRoute = {
        getAll: /\/getall/,
        create: /\/create/
    }

    if(req.url?.match(regexRoute.create) && req.method === 'POST'){
        notFound = false;
        let data = '';

        req.on('data', (chunk)=>{
            data += chunk.toString();
        })

        req.on('end', async ()=>{
            try {
                const obj = JSON.parse(data) as ICliente;
                await create(obj, callbackData);
            } catch (error) {
                callbackData(error, 0)
            }
            
        })
        return
    }

    if(req.url?.match(regexRoute.getAll)){
        res.write('ok');
        res.end()
        return
    }

    return messages.error404(res)  
}
