// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserSvgIcon(props: UserSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.106 7.663a1.211 1.211 0 00-.22 0A2.947 2.947 0 015.04 4.71c0-1.633 1.32-2.96 2.96-2.96a2.957 2.957 0 01.107 5.913z"
        }
        stroke={"#080808"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.773 10.123c-1.613 1.08-1.613 2.84 0 3.914 1.833 1.226 4.84 1.226 6.673 0 1.614-1.08 1.614-2.84 0-3.914-1.826-1.22-4.833-1.22-6.673 0z"
        }
        stroke={"#212121"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UserSvgIcon;
/* prettier-ignore-end */
