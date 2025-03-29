/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8Chart641SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8Chart641SvgIcon(props: Icons8Chart641SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 64 64"}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.6 13.2C25.3 15.1 25 19.1 25 37c0 24.8.3 26 7 26s7-1.2 7-26-.3-26-7-26c-2.9 0-4.3.6-5.4 2.2zm8.8 2.4c.8 2 .8 40.8 0 42.8-.8 2.1-6 2.1-6.8 0-.8-2-.8-40.8 0-42.8.4-.9 1.8-1.6 3.4-1.6 1.6 0 3 .7 3.4 1.6zm13.2 7.6C47.3 25 47 28.6 47 42c0 19.3.6 21 7 21s7-1.7 7-21-.6-21-7-21c-2.9 0-4.3.6-5.4 2.2zm8.8 2.4c.8 2 .8 30.8 0 32.8-.8 2.1-6 2.1-6.8 0-.8-2-.8-30.8 0-32.8.4-.9 1.8-1.6 3.4-1.6 1.6 0 3 .7 3.4 1.6zM4.6 43.2C3.5 44.7 3 47.7 3 52c0 8.4 1.6 11 7 11s7-2.6 7-11-1.6-11-7-11c-2.9 0-4.3.6-5.4 2.2zm8.8 2.4c.8 2 .8 10.8 0 12.8-.8 2.1-6 2.1-6.8 0-.8-2-.8-10.8 0-12.8C7 44.7 8.4 44 10 44c1.6 0 3 .7 3.4 1.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons8Chart641SvgIcon;
/* prettier-ignore-end */
