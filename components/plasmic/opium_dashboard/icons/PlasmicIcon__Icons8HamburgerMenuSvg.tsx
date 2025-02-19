// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8HamburgerMenuSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8HamburgerMenuSvgIcon(
  props: Icons8HamburgerMenuSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 7.5v5h50v-5zm0 15v5h50v-5zm0 15v5h50v-5z"}></path>
    </svg>
  );
}

export default Icons8HamburgerMenuSvgIcon;
/* prettier-ignore-end */
