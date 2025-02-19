// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8Power50SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8Power50SvgIcon(props: Icons8Power50SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 50 50"}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"} stroke={"none"}>
        <path
          d={
            "M23.1 7.4c-.7.9-1.1 4.2-.9 8.8.3 7 .4 7.3 2.8 7.3s2.5-.3 2.8-7.3C28.1 9.3 27.2 6 25 6c-.4 0-1.3.6-1.9 1.4z"
          }
        ></path>

        <path
          d={
            "M12.7 14c-8 9.5-3.7 23.8 8.1 26.9C32.7 44.2 44.2 32.8 41 21c-1.4-5.2-6.1-10.6-8.3-9.7-2.4.9-2.1 3.5.9 7 2.2 2.6 2.5 3.8 2.1 7.5-.7 6.5-4.3 9.7-10.7 9.7-6.4 0-10-3.2-10.7-9.7-.4-3.7-.1-4.9 2.2-7.6 1.4-1.7 2.5-4 2.3-4.9-.5-2.9-3.4-2.6-6.1.7z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icons8Power50SvgIcon;
/* prettier-ignore-end */
