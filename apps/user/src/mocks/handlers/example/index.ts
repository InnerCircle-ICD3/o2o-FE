import { http, HttpResponse, type PathParams } from "msw";
import { baseUrl } from "../../utils";

interface PostRequestBody {
  firstName: string;
  lastName: string;
}

const handlers = [
  http.get(`${baseUrl}/example/user`, () => {
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.get(`${baseUrl}/example/params/:userId`, ({ params }) => {
    const { userId } = params;
    console.log("userId", userId);
    // Given "/params/123",
    return HttpResponse.json({
      id: userId,
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.get(`${baseUrl}/example/query`, ({ request }) => {
    const url = new URL(request.url);
    // Given "?id=1",
    const productId = url.searchParams.get("id");
    return HttpResponse.json({
      id: productId,
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.get(`${baseUrl}/example/queryAll`, ({ request }) => {
    const url = new URL(request.url);
    // Given "?id=1&id=2&id=3",
    const productIds = url.searchParams.getAll("id");
    return HttpResponse.json({
      ids: productIds,
    });
  }),

  http.post<PathParams, PostRequestBody>(`${baseUrl}/example/user`, async (req) => {
    const { firstName, lastName } = await req.request.json();
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName,
      lastName,
    });
  }),

  http.post(`${baseUrl}/example/error`, () => {
    return HttpResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 },
    );
  }),

  http.post("/example/login", () => {
    return HttpResponse.json(
      {
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie; HttpOnly; Path=/;",
        },
      },
    );
  }),

  http.post("/example/logout", () => {
    return HttpResponse.json(
      {
        message: "Logged out successfully",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=; HttpOnly; Path=/; Max-Age=0;",
        },
      },
    );
  }),
];

export default handlers;
