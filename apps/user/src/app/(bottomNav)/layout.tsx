import BottomNav from "@/components/ui/layout/bottomNav";
import type { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return <BottomNav>{children}</BottomNav>;
};

export default Layout;
