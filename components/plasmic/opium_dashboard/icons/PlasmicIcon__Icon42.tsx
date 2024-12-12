// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon42Icon(props: Icon42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-refresh-cw"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8"}></path>

      <path
        d={"M21 3v5h-5m5 4a9 9 0 01-9 9 9.75 9.75 0 01-6.74-2.74L3 16"}
      ></path>

      <path d={"M8 16H3v5"}></path>
    </svg>
  );
}

export default Icon42Icon;
/* prettier-ignore-end */
