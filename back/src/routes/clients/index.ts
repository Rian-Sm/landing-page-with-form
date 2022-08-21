import { IncomingMessage, ServerResponse } from "http";
import { create } from "../../controller/client";
import { ICliente } from "../../model/client";
import { error404, IResponseCreate, messageSucess, responseMSG } from "../../util/responseMsg";

export  const clientsRouter = async (req: IncomingMessage, res: ServerResponse) => {
    let notFound = true;
    let dataResponse = {} as IResponseCreate;
    let status = 200;

    async function callbackData(error:any, value:number){
        console.log("ERRO", error, value);
        dataResponse = {status: true, message:messageSucess.create, response:{id:value}} as unknown as IResponseCreate;
        status = 200;
        if (error){
            dataResponse = { status: false, message:error.toString(), response:{}} as unknown as IResponseCreate;
        }
        responseMSG(res, status, dataResponse); 
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

    return error404(res)  
}
