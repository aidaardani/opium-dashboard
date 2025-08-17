/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WritingIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WritingIconSvgIcon(props: WritingIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 122.88 112.04"}
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
          "M109.28 19.61l12.21 9.88a3.77 3.77 0 01.56 5.29l-5.46 6.75-18.06-14.6 5.47-6.76a3.79 3.79 0 015.29-.56zm-88.21 11.2a3.18 3.18 0 010-6.36h53.05a3.18 3.18 0 010 6.36zM9.49 0h76.22a9.53 9.53 0 019.49 9.49v5.63l-4.48 5.53a9.81 9.81 0 00-1.18 1.85c-.24.19-.48.4-.71.62V9.49a3.14 3.14 0 00-3.12-3.13H9.49a3.14 3.14 0 00-3.13 3.13v93.06a3.16 3.16 0 00.92 2.21 3.11 3.11 0 002.21.92h76.22a3.12 3.12 0 003.12-3.13V88.2l1.91-.81a10 10 0 004.34-3.13l.12-.14v18.43a9.54 9.54 0 01-9.49 9.45H9.49A9.51 9.51 0 010 102.55V9.49A9.53 9.53 0 019.49 0zm11.58 87.6a3.19 3.19 0 010-6.37h35.12a37.1 37.1 0 00-.3 6.37zm0-18.93a3.19 3.19 0 010-6.37h38.15v.27l-1.05 6.1zm0-18.93a3.18 3.18 0 010-6.36h51.37l-5.11 6.36zM87.25 78l-12.82 5.47c-9.35 3.47-8.93 5.43-8-3.85l2.81-16.22 26.56-33 18 14.6-26.53 33zM72.31 65.89l11.86 9.59-8.42 3.6c-6.6 2.83-6.42 4.23-5.27-2.53l1.83-10.66z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default WritingIconSvgIcon;
/* prettier-ignore-end */
