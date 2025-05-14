import exampleHandlers from "./example";
import { storeHandlers } from "./store";

export const handlers = [...storeHandlers, ...exampleHandlers];
