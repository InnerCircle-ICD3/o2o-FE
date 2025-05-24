import { baseUrl } from "@/mocks/utils";
import type {
	StoreApiErrorResponse,
	StoreApiSuccessResponse,
} from "@/types/searchMap.type";
import { http, HttpResponse } from "msw";

interface SearchLocationBody {
	viewPoint: {
		latitude: number;
		longitude: number;
	};
}

const searchMapHandlers = [
	http.post(
		`${baseUrl}/search/stores/map`,
		async (
			req,
		): Promise<
			HttpResponse<StoreApiErrorResponse | StoreApiSuccessResponse>
		> => {
			const body = (await req.request.json()) as SearchLocationBody;
			const { viewPoint } = body;

			if (!viewPoint) {
				return HttpResponse.json<StoreApiErrorResponse>(
					{ error: "Missing viewPoint" },
					{ status: 400 },
				);
			}

			return HttpResponse.json<StoreApiSuccessResponse>({
				data: {
					box: {
						topLeft: { latitude: 37.566826, longitude: 126.9786567 },
						bottomRight: { latitude: 37.566826, longitude: 126.9786567 },
					},
					storeList: [
						{
							id: 101,
							name: "카페 도치",
							category: "건강빵, 샌드위치, 조리빵",
							thumbnailUrl: "/images/thumb.png",
							distance: 174.2,
							address: "서울특별시 강남구 테헤란로 124",
							latitude: 37.566826,
							longitude: 126.9786567,
							isOpen: true,
							minPrice: 4000,
							maxPrice: 10000,
							pickupTime: "17:00 - 18:00",
						},
						{
							id: 102,
							name: "카페 유어스",
							category: "더티초코, 빨미카레, 크루아상",
							thumbnailUrl: "/images/thumb.png",
							distance: 432.5,
							address: "서울 강남구 봉은사로 45",
							latitude: 37.503521,
							longitude: 127.038845,
							isOpen: false,
							pickupTime: "20:00 - 21:00",
							minPrice: 5000,
							maxPrice: 10000,
						},
						{
							id: 103,
							name: "025BAKERY",
							category: "크루아상, 소금빵, 퀸아망",
							thumbnailUrl: "/images/thumb.png",
							distance: 432.5,
							address: "서울 강남구 봉은사로 45",
							latitude: 37.47414,
							longitude: 126.88989,
							isOpen: true,
							pickupTime: "19:00 - 20:00",
							minPrice: 5000,
							maxPrice: 10000,
						},
						{
							id: 104,
							name: "카페 유어스",
							category: "브리오슈, 아메리칸쿠키, 치즈케이크",
							thumbnailUrl: "/images/thumb.png",
							distance: 432.5,
							address: "서울 강남구 봉은사로 45",
							latitude: 37.475911,
							longitude: 126.892576,
							isOpen: false,
							pickupTime: "18:00 - 19:00",
							minPrice: 6000,
							maxPrice: 12000,
						},
					],
				},
			});
		},
	),
];

export default searchMapHandlers;
