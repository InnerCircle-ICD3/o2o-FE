import exampleHandlers from "./example";
import { storeHandlers } from "./store";
import recommendationsHandlers from "./recommendations";
export const handlers = [
	...storeHandlers,
	...exampleHandlers,
	...recommendationsHandlers,
];
