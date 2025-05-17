import TopNav from "@/components/ui/layout/topNav";
import type { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return <TopNav>{children}</TopNav>;
};

export default Layout;
