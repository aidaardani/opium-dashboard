/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon30Icon(props: Icon30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 1.25a7.75 7.75 0 00-4.773 13.856l-.97 6.788a.75.75 0 001.022.802L12 20.808l4.721 1.888a.75.75 0 001.021-.802l-.97-6.788A7.75 7.75 0 0012 1.25zm3.382 14.725A7.718 7.718 0 0112 16.75a7.718 7.718 0 01-3.382-.775l-.692 4.847 3.796-1.518a.75.75 0 01.556 0l3.796 1.518-.692-4.847zM5.75 9a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z"
        }
        fill={"#3F3F79"}
      ></path>
    </svg>
  );
}

export default Icon30Icon;
/* prettier-ignore-end */
