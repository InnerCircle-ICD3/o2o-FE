import type { StatusLabelType } from "@/types/statusLabel.type";
import type { PropsWithChildren } from "react";
import { statusLabel } from "./statusLabel.css";

interface StatusLabelProps extends PropsWithChildren {
  status: StatusLabelType;
}

const StatusLabel = (props: StatusLabelProps) => {
  const { status, children } = props;

  const statusStyle = statusLabel[status];

  return <p className={statusStyle}>{children}</p>;
};

export default StatusLabel;
