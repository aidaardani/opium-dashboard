// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon44Icon(props: Icon44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"3"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-bell-ring"
      )}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.268 21a2 2 0 003.464 0M22 8c0-2.3-.8-4.3-2-6M3.262 15.326A1 1 0 004 17h16a1 1 0 00.74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 006 8c0 4.499-1.411 5.956-2.738 7.326M4 2C2.8 3.7 2 5.7 2 8"
        }
      ></path>
    </svg>
  );
}

export default Icon44Icon;
/* prettier-ignore-end */
