/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon54Icon(props: Icon54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <radialGradient
        id={"a"}
        cx={"19.38"}
        cy={"42.035"}
        r={"44.899"}
        gradientUnits={"userSpaceOnUse"}
      >
        <stop offset={"0"} stopColor={"#fd5"}></stop>

        <stop offset={".328"} stopColor={"#ff543f"}></stop>

        <stop offset={".348"} stopColor={"#fc5245"}></stop>

        <stop offset={".504"} stopColor={"#e64771"}></stop>

        <stop offset={".643"} stopColor={"#d53e91"}></stop>

        <stop offset={".761"} stopColor={"#cc39a4"}></stop>

        <stop offset={".841"} stopColor={"#c837ab"}></stop>
      </radialGradient>

      <path
        fill={"url(#a)"}
        d={
          "m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008"
        }
      ></path>

      <radialGradient
        id={"b"}
        cx={"11.786"}
        cy={"5.54"}
        r={"29.813"}
        gradientTransform={"matrix(1 0 0 .6663 0 1.849)"}
        gradientUnits={"userSpaceOnUse"}
      >
        <stop offset={"0"} stopColor={"#4168c9"}></stop>

        <stop offset={".999"} stopColor={"#4168c9"} stopOpacity={"0"}></stop>
      </radialGradient>

      <path
        fill={"url(#b)"}
        d={
          "m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008"
        }
      ></path>

      <path
        fill={"#fff"}
        d={
          "M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7m0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5"
        }
      ></path>

      <circle cx={"31.5"} cy={"16.5"} r={"1.5"} fill={"#fff"}></circle>

      <path
        fill={"#fff"}
        d={
          "M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7M18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5z"
        }
      ></path>
    </svg>
  );
}

export default Icon54Icon;
/* prettier-ignore-end */
