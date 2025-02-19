// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8HomeSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8HomeSvgIcon(props: Icons8HomeSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.951 4a1.5 1.5 0 00-.879.322L8.86 15.52A7.504 7.504 0 006 21.41V40.5C6 41.864 7.136 43 8.5 43h10c1.364 0 2.5-1.136 2.5-2.5v-10c0-.295.205-.5.5-.5h5c.295 0 .5.205.5.5v10c0 1.364 1.136 2.5 2.5 2.5h10c1.364 0 2.5-1.136 2.5-2.5V21.41a7.504 7.504 0 00-2.86-5.89L24.929 4.322A1.5 1.5 0 0023.95 4zM24 7.41l13.285 10.467A4.494 4.494 0 0139 21.41V40h-9v-9.5c0-1.915-1.585-3.5-3.5-3.5h-5c-1.915 0-3.5 1.585-3.5 3.5V40H9V21.41c0-1.38.63-2.679 1.715-3.533L24 7.41z"
        }
      ></path>
    </svg>
  );
}

export default Icons8HomeSvgIcon;
/* prettier-ignore-end */
