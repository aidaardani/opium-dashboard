/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon56Icon(props: Icon56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#263238"}
        d={
          "m21.881 6.136-4.315-.974a6.533 6.533 0 0 0-7.812 4.934l-.983 4.351c2.832-4.497 7.586-7.659 13.11-8.311M6.136 26.119l-.974 4.315a6.533 6.533 0 0 0 4.934 7.812l4.351.983c-4.497-2.833-7.659-7.586-8.311-13.11M37.904 9.754l-4.351-.983c4.497 2.832 7.659 7.586 8.311 13.109l.974-4.315a6.533 6.533 0 0 0-4.934-7.811m-11.785 32.11 4.315.974a6.533 6.533 0 0 0 7.812-4.934l.983-4.351c-2.832 4.497-7.586 7.659-13.11 8.311"
        }
      ></path>

      <path
        fill={"#e91e63"}
        d={
          "M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8m-4 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-3 19a4 4 0 1 1 0-8 4 4 0 0 1 0 8m5-8a2 2 0 1 1 3.999-.001A2 2 0 0 1 22 24m6 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8m3-11a4 4 0 1 1 0-8 4 4 0 0 1 0 8"
        }
      ></path>
    </svg>
  );
}

export default Icon56Icon;
/* prettier-ignore-end */
