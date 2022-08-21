import * as http from "http";
import * as dotenv from "dotenv";
import routes from "./routes/routes";
dotenv.config();

const port = process.env.PORT || 3001;

const myServer = http.createServer(routes);

 myServer.listen(port, () => {
    console.log(`Server is running on port 3000. Go to http://localhost:${port}/`)
 });
 