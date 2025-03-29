/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserInfoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserInfoSvgIcon(props: UserInfoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.98-3 2.98z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.07 8.95h-.15A1.945 1.945 0 0110.04 7c0-1.08.87-1.95 1.95-1.95s1.95.88 1.95 1.95c.01 1.06-.82 1.92-1.87 1.95zm-2.82 3.01c-1.33.89-1.33 2.34 0 3.23 1.51 1.01 3.99 1.01 5.5 0 1.33-.89 1.33-2.34 0-3.23-1.51-1-3.98-1-5.5 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UserInfoSvgIcon;
/* prettier-ignore-end */
