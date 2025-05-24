const ROUTE = {
  bottomNav: {
    home: {
      name: "홈",
      path: "/",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z" fill="#999999" />

          <defs>
            <clipPath id="clip0_543_2787">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    subscribe: {
      name: "찜",
      path: "/subscribes",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12.5001 21L11.1568 19.7771C6.3857 15.4507 3.23584 12.5973 3.23584 9.09537C3.23584 6.24196 5.4778 4 8.33121 4C9.9432 4 11.4903 4.75041 12.5001 5.93624C13.51 4.75041 15.0571 4 16.6691 4C19.5225 4 21.7645 6.24196 21.7645 9.09537C21.7645 12.5973 18.6146 15.4507 13.8435 19.7864L12.5001 21Z"
            fill="#999999"
          />
          <defs>
            <clipPath id="clip0_543_2781">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    location: {
      name: "지도",
      path: "/locations",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
            fill="#999999"
          />
          <defs>
            <clipPath id="clip0_543_2790">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    myOrder: {
      name: "주문내역",
      path: "/my-orders",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 16.9995C10.9 16.9995 10 16.0995 10 14.9995C10 13.8995 10.9 12.9995 12 12.9995C13.1 12.9995 14 13.8995 14 14.9995C14 16.0995 13.1 16.9995 12 16.9995Z"
            fill="#999999"
          />
          <defs>
            <clipPath id="clip0_543_2796">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    mypage: {
      name: "마이",
      path: "/mypage",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 13C14.4853 13 16.5 10.9853 16.5 8.5C16.5 6.01472 14.4853 4 12 4C9.51472 4 7.5 6.01472 7.5 8.5C7.5 10.9853 9.51472 13 12 13Z"
            fill="#999999"
          />
          <path
            d="M12 15.25C8.99625 15.25 3 16.7575 3 19.75V22H21V19.75C21 16.7575 15.0037 15.25 12 15.25Z"
            fill="#999999"
          />
          <defs>
            <clipPath id="clip0_543_2802">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  },

  topNav: {
    storesDetail: {
      name: "매장 상세",
      path: "/stores",
    },
    order: {
      name: "주문/결제",
      path: "/orders",
    },
    myOrderDetail: {
      name: "주문내역 확인",
      path: "/my-orders",
    },
    search: {
      name: "",
      path: "/search",
    },
  },
};

export default ROUTE;
