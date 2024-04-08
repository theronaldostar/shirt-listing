import { address } from "ip";
import { create, defaults, router } from "json-server";
import { env } from "process";
import "dotenv/config";

const server = create();
const routes = router("db.json");
const middlewares = defaults();

const port = env.SERVER_PORT;
const message = `[api] started server on url: http://${address()}:${port}, http://localhost:${port}`;

server.use(middlewares);
server.use(routes);
server.listen(port, () => {
	console.info(message);
});
