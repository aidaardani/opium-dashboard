/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon50Icon(props: Icon50IconProps) {
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
        "lucide lucide-instagram-icon lucide-instagram"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"20"} height={"20"} x={"2"} y={"2"} rx={"5"} ry={"5"}></rect>

      <path
        d={"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37m1.5-4.87h.01"}
      ></path>
    </svg>
  );
}

export default Icon50Icon;
/* prettier-ignore-end */
