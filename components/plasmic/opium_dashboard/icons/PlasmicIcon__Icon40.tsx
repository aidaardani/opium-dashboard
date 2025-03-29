/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon40Icon(props: Icon40IconProps) {
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
        "lucide lucide-paperclip"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.234 20.252L21 12.3M16 6l-8.414 8.586a2 2 0 000 2.828 2 2 0 002.828 0l8.414-8.586a4 4 0 000-5.656 4 4 0 00-5.656 0l-8.415 8.585a6 6 0 108.486 8.486"
        }
      ></path>
    </svg>
  );
}

export default Icon40Icon;
/* prettier-ignore-end */
