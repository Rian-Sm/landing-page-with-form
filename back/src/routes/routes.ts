import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "http";
import { messages } from "../util/responseMsg";
import { clientsRouter } from "./clients/index";

const findRoute = (
    req: IncomingMessage, res: ServerResponse
    ): Promise<void> | void => {
  
  if(req.url?.match(/\/clients\/*\//)){
      return clientsRouter(req, res)
  }
    return messages.error404(res);
}

export default function routes(
    req: IncomingMessage, res: ServerResponse,
  ): Promise<void> | void {
    //console.log(req[]);
    
    res.setHeader('Access-Control-Allow-Origin',  '*') ;
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

    if(req.url?.match(/\/api\/*/)){
        return findRoute(req, res);
    }

    return messages.error404(res);

}