import { storeHandlers } from "./store";
import exampleHandlers from "./example";

export const handlers = [...storeHandlers, ...exampleHandlers];
