/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon47Icon(props: Icon47IconProps) {
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
        "lucide lucide-umbrella-icon lucide-umbrella"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M22 12a10.06 10.06 1 0 0-20 0Zm-10 0v8a2 2 0 0 0 4 0M12 2v1"}
      ></path>
    </svg>
  );
}

export default Icon47Icon;
/* prettier-ignore-end */
