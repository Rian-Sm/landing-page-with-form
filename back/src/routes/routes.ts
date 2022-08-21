import { IncomingMessage, ServerResponse } from "http";
import { error404 } from "../util/responseMsg";
import { clientsRouter } from "./clients/index";

const findRoute = (
    req: IncomingMessage, res: ServerResponse
    ): Promise<void> | void => {
  
  if(req.url?.match(/\/clients\/*\//)){
      return clientsRouter(req, res)
  }
  
    return error404(res);
}

export default function routes(
    req: IncomingMessage, res: ServerResponse,
  ): Promise<void> | void {
    
    if(req.url?.match(/\/api\/*/)){
        return findRoute(req, res);
    }

    return error404(res);

}