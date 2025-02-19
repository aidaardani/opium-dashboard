// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8Support64SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8Support64SvgIcon(props: Icons8Support64SvgIconProps) {
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
          "M24.5 7.4C18.4 10.1 14 16.8 14 23.3c0 2.5-.7 3.6-3 4.9-2.9 1.6-3 2-3 8.6 0 3.9.5 7.3 1.2 8 .7.7 3.1 1.2 5.5 1.2H19v-9c0-7.4-.3-9.2-1.6-9.7s-1.5-1.4-1-4.7C19 6.7 39.2 3 46.5 17.1c1.7 3.2 2 9.5.5 10.4-1.4.9-1.3 18.5.1 18.5 1.8 0-1.1 3.1-3.9 4.1-2 .8-2.7.5-4.4-1.6-2.8-3.6-8.6-3.2-10.8.7-1.3 2.5-1.3 3.1 0 5.5 2.2 3.9 8 4.4 10.6 1 1.1-1.3 3.2-2.7 4.8-3.1 1.6-.4 4.1-1.9 5.6-3.4s3.6-3.2 4.6-3.8c1.5-.9 2-2.5 2.2-7.8.3-6 .1-6.8-2.3-9-1.5-1.4-2.5-3.4-2.5-5 0-3.2-2.5-9.3-4.8-11.9-4.7-5.2-15.1-7.2-21.7-4.3zM16 37c0 6.3-.2 7-2 7-2.4 0-4-2.8-4-7s1.6-7 4-7c1.8 0 2 .7 2 7zm37-5.1c1.5 2.9 1.2 9.7-.5 11.1-3 2.5-4.5.4-4.5-6.5 0-5.8.2-6.5 2-6.5 1 0 2.4.9 3 1.9zM35.4 48.6c2.1.8 2.1 4.8 0 6.5-3.1 2.6-7-2.5-4.4-5.6 1.4-1.7 2.1-1.8 4.4-.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons8Support64SvgIcon;
/* prettier-ignore-end */
