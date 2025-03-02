// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterSvgIcon(props: FilterSvgIconProps) {
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
          "M9.547 13.213c0 .407-.267.94-.607 1.147l-.94.607c-.873.54-2.086-.067-2.086-1.147v-3.567c0-.473-.267-1.08-.54-1.413l-2.56-2.693c-.34-.34-.607-.94-.607-1.347V3.253c0-.806.607-1.413 1.347-1.413h8.893c.74 0 1.347.607 1.347 1.347v1.48c0 .54-.34 1.213-.674 1.546"
        }
        stroke={"#EEE8E8"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10.713 11.513a2.133 2.133 0 100-4.266 2.133 2.133 0 000 4.266z"}
        stroke={"#EEE8E8"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13.246 11.913l-.666-.666"}
        stroke={"#F0EEEE"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FilterSvgIcon;
/* prettier-ignore-end */
