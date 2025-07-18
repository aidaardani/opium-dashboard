/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon48Icon(props: Icon48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeWidth={"2"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-copy-icon lucide-copy"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"14"} height={"14"} x={"8"} y={"8"} rx={"2"} ry={"2"}></rect>

      <path
        d={"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}
      ></path>
    </svg>
  );
}

export default Icon48Icon;
/* prettier-ignore-end */
