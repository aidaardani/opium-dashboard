// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8Chart64SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8Chart64SvgIcon(props: Icons8Chart64SvgIconProps) {
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
          "M43.7 6.6c-.4.4-.7 12.8-.7 27.6 0 26-.1 26.8-2 26.8-1.8 0-2-.8-2.2-12.2l-.3-12.3h-13l-.3 12.3C25 60.1 24.8 61 23 61c-1.8 0-2-.9-2.2-14.8l-.3-14.7h-13l-.3 14.7C7 60.4 6.9 61 4.9 61c-1.2 0-1.9.5-1.6 1.2.3 1 6.9 1.3 28.7 1.3 21.8 0 28.4-.3 28.8-1.3.2-.7-.5-1.2-1.7-1.2-2 0-2.1-.5-2.3-27.3l-.3-27.2-6-.3c-3.4-.2-6.4 0-6.8.4zM53 35v26h-6V9h6v26zM17 47.5V61h-6V34h6v13.5zM35 50v11h-6V39h6v11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons8Chart64SvgIcon;
/* prettier-ignore-end */
