import { baseUrl } from "@/mocks/utils";
import { http, HttpResponse } from "msw";

const handlers = [
  http.post(`${baseUrl}/orders`, () => {
    return HttpResponse.json({ orderId: 1 });
  }),
];

export default handlers;
