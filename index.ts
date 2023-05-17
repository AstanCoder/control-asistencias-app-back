import http from "http";
import app from "./src/app";
import { isConn, isFirstTime } from "./src/database";

const server = new http.Server(app);

server.listen(app.get("port"), async() => {
  console.log(`[Server] Listening on port ${app.get("port")}`);
  console.log(await isConn())
  if(await isFirstTime()) {
    console.log('[Server Config] This app apears to be running for the first time in this enviroment, run "npm run config" or navigate to "/admin/setup" on your browser to start the initial config process')
  }
 console.log(`[Server] DATABASE CONNECTED`)
});
