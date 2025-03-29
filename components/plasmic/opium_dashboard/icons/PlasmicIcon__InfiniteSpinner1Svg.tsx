/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfiniteSpinner1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfiniteSpinner1SvgIcon(props: InfiniteSpinner1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 300 150"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"15"}
        strokeLinecap={"round"}
        strokeDasharray={"300 385"}
        strokeDashoffset={"0"}
        d={
          "M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50z"
        }
      >
        <animate
          attributeName={"stroke-dashoffset"}
          calcMode={"spline"}
          dur={"2"}
          values={"685;-685"}
          keySplines={"0 0 1 1"}
          repeatCount={"indefinite"}
        ></animate>
      </path>
    </svg>
  );
}

export default InfiniteSpinner1SvgIcon;
/* prettier-ignore-end */
