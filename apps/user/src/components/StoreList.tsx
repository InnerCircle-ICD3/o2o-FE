import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import React, { useEffect, useState } from "react";

interface Store {
  id: number;
  name: string;
}

const StoreList = () => {
  const size = 10;

  const { data, isFetching, error } = useInfiniteScroll({
    size,
    api: "/api/stores",
  });

  const [storeList, setStoreList] = useState<Store[]>([]);

  useEffect(() => {
    if (data) {
      setStoreList((prev) => [...prev, ...data.contents]);
    }
  }, [data]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {storeList.map((store) => (
          <li
            style={{ height: "100px", backgroundColor: "pink" }}
            key={store.id}
          >
            {store.name}
          </li>
        ))}
        {isFetching && <>loading...</>}
      </ul>
    </div>
  );
};

export default StoreList;
