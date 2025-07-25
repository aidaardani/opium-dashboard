/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: h9Dbk9ygddw7UVEq1NNhKi
// Component: oVzoHzMf1TLl

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: oVzoHzMf1TLl/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: usOc2d77sFG3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  outline: "outline";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal";
  color:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "text"
    | "orange";
  loading: "loading";
  space: "space";
};
export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  outline?: SingleBooleanChoiceArg<"outline">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "text"
    | "orange"
  >;
  loading?: SingleBooleanChoiceArg<"loading">;
  space?: SingleBooleanChoiceArg<"space">;
};
type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "outline",
  "shape",
  "size",
  "color",
  "loading",
  "space"
);

export type PlasmicButton__ArgsType = {
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
  startIcon?: React.ReactNode;
  children2?: React.ReactNode;
  endIcon?: React.ReactNode;
};
type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "link",
  "submitsForm",
  "target",
  "startIcon",
  "children2",
  "endIcon"
);

export type PlasmicButton__OverridesType = {
  root?: Flex__<"button">;
  startIconContainer?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  svg?: Flex__<"svg">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  submitsForm?: boolean;
  target?: boolean;
  children2?: React.ReactNode;
  outline?: SingleBooleanChoiceArg<"outline">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
    | "text"
    | "orange"
  >;
  loading?: SingleBooleanChoiceArg<"loading">;
  space?: SingleBooleanChoiceArg<"space">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "outline",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.outline
      },
      {
        path: "loading",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.loading
      },
      {
        path: "space",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.space
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root___focusVisibleWithin_color_red]:
            hasVariant($state, "color", "red") &&
            triggers.focusVisibleWithin_root,
          [sty.root___focusVisibleWithin_color_red_outline]:
            hasVariant($state, "color", "red") &&
            hasVariant($state, "outline", "outline") &&
            triggers.focusVisibleWithin_root,
          [sty.root___focusVisibleWithin_color_text]:
            hasVariant($state, "color", "text") &&
            triggers.focusVisibleWithin_root,
          [sty.rootcolor_blue]: hasVariant($state, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
          [sty.rootcolor_clear____focusVisibleWithin]:
            hasVariant($state, "color", "clear") &&
            triggers.focusVisibleWithin_root,
          [sty.rootcolor_green]: hasVariant($state, "color", "green"),
          [sty.rootcolor_green_outline]:
            hasVariant($state, "outline", "outline") &&
            hasVariant($state, "color", "green"),
          [sty.rootcolor_link]: hasVariant($state, "color", "link"),
          [sty.rootcolor_link_outline]:
            hasVariant($state, "outline", "outline") &&
            hasVariant($state, "color", "link"),
          [sty.rootcolor_link_size_minimal]:
            hasVariant($state, "color", "link") &&
            hasVariant($state, "size", "minimal"),
          [sty.rootcolor_orange]: hasVariant($state, "color", "orange"),
          [sty.rootcolor_red]: hasVariant($state, "color", "red"),
          [sty.rootcolor_red_outline]:
            hasVariant($state, "outline", "outline") &&
            hasVariant($state, "color", "red"),
          [sty.rootcolor_sand]: hasVariant($state, "color", "sand"),
          [sty.rootcolor_sand_outline]:
            hasVariant($state, "color", "sand") &&
            hasVariant($state, "outline", "outline"),
          [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
          [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
          [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
          [sty.rootcolor_softSand]: hasVariant($state, "color", "softSand"),
          [sty.rootcolor_softYellow]: hasVariant($state, "color", "softYellow"),
          [sty.rootcolor_text]: hasVariant($state, "color", "text"),
          [sty.rootcolor_text_size_compact]:
            hasVariant($state, "color", "text") &&
            hasVariant($state, "size", "compact"),
          [sty.rootcolor_text_size_minimal]:
            hasVariant($state, "color", "text") &&
            hasVariant($state, "size", "minimal"),
          [sty.rootcolor_white]: hasVariant($state, "color", "white"),
          [sty.rootcolor_yellow]: hasVariant($state, "color", "yellow"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootloading]: hasVariant($state, "loading", "loading"),
          [sty.rootloading_outline]:
            hasVariant($state, "outline", "outline") &&
            hasVariant($state, "loading", "loading"),
          [sty.rootloading_showEndIcon]:
            hasVariant($state, "loading", "loading") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootoutline]: hasVariant($state, "outline", "outline"),
          [sty.rootshape_round]: hasVariant($state, "shape", "round"),
          [sty.rootshape_rounded]: hasVariant($state, "shape", "rounded"),
          [sty.rootshape_rounded_showEndIcon]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshape_rounded_showStartIcon]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootshape_rounded_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant($state, "shape", "sharp"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootshowStartIcon_color_text_size_compact]:
            hasVariant($state, "color", "text") &&
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootshowStartIcon_loading]:
            hasVariant($state, "loading", "loading") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootshowStartIcon_loading_outline]:
            hasVariant($state, "outline", "outline") &&
            hasVariant($state, "loading", "loading") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootshowStartIcon_showEndIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact]: hasVariant($state, "size", "compact"),
          [sty.rootsize_compact_shape_round]:
            hasVariant($state, "shape", "round") &&
            hasVariant($state, "size", "compact"),
          [sty.rootsize_minimal]: hasVariant($state, "size", "minimal"),
          [sty.rootspace]: hasVariant($state, "space", "space")
        }
      )}
      disabled={hasVariant($state, "loading", "loading") ? true : undefined}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant($state, "loading", "loading") &&
        hasVariant($state, "showStartIcon", "showStartIcon")
          ? false
          : hasVariant($state, "showStartIcon", "showStartIcon")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainercolor_blue]: hasVariant(
              $state,
              "color",
              "blue"
            ),
            [sty.startIconContainershape_rounded_showStartIcon]:
              hasVariant($state, "shape", "rounded") &&
              hasVariant($state, "showStartIcon", "showStartIcon"),
            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.startIconContainershowStartIcon_loading]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "showStartIcon", "showStartIcon")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ChevronRightIcon
                className={classNames(projectcss.all, sty.svg__zwTli)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                $state,
                "color",
                "blue"
              ),
              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetStartIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetStartIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.slotTargetStartIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.slotTargetStartIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.slotTargetStartIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),
              [sty.slotTargetStartIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.slotTargetStartIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetStartIconcolor_yellow]: hasVariant(
                $state,
                "color",
                "yellow"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}
      {(
        hasVariant($state, "color", "clear")
          ? (() => {
              try {
                return true;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
          : true
      ) ? (
        <div
          data-plasmic-name={"contentContainer"}
          data-plasmic-override={overrides.contentContainer}
          className={classNames(projectcss.all, sty.contentContainer, {
            [sty.contentContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.contentContainercolor_clear]: hasVariant(
              $state,
              "color",
              "clear"
            ),
            [sty.contentContainercolor_red]: hasVariant($state, "color", "red"),
            [sty.contentContainerisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.contentContainerloading]: hasVariant(
              $state,
              "loading",
              "loading"
            ),
            [sty.contentContainerloading_color_red]:
              hasVariant($state, "color", "red") &&
              hasVariant($state, "loading", "loading"),
            [sty.contentContainerloading_color_red_outline]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "color", "red") &&
              hasVariant($state, "outline", "outline"),
            [sty.contentContainerloading_outline]:
              hasVariant($state, "outline", "outline") &&
              hasVariant($state, "loading", "loading"),
            [sty.contentContaineroutline]: hasVariant(
              $state,
              "outline",
              "outline"
            ),
            [sty.contentContainershape_rounded]: hasVariant(
              $state,
              "shape",
              "rounded"
            ),
            [sty.contentContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {(hasVariant($state, "loading", "loading") ? true : false) ? (
            <Icon2Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg, ``, {
                [sty.svgloading]: hasVariant($state, "loading", "loading"),
                [sty.svgloading_color_red_outline]:
                  hasVariant($state, "color", "red") &&
                  hasVariant($state, "loading", "loading") &&
                  hasVariant($state, "outline", "outline"),
                [sty.svgloading_outline]:
                  hasVariant($state, "outline", "outline") &&
                  hasVariant($state, "loading", "loading")
              })}
              role={"img"}
            />
          ) : null}
          {(hasVariant($state, "loading", "loading") ? false : true)
            ? renderPlasmicSlot({
                defaultContents: "Button",
                value: args.children2,
                className: classNames(sty.slotTargetChildren2, {
                  [sty.slotTargetChildren2___focusVisibleWithin]:
                    triggers.focusVisibleWithin_root,
                  [sty.slotTargetChildren2color_blue]: hasVariant(
                    $state,
                    "color",
                    "blue"
                  ),
                  [sty.slotTargetChildren2color_clear]: hasVariant(
                    $state,
                    "color",
                    "clear"
                  ),
                  [sty.slotTargetChildren2color_green]: hasVariant(
                    $state,
                    "color",
                    "green"
                  ),
                  [sty.slotTargetChildren2color_link]: hasVariant(
                    $state,
                    "color",
                    "link"
                  ),
                  [sty.slotTargetChildren2color_link_size_minimal]:
                    hasVariant($state, "color", "link") &&
                    hasVariant($state, "size", "minimal"),
                  [sty.slotTargetChildren2color_red]: hasVariant(
                    $state,
                    "color",
                    "red"
                  ),
                  [sty.slotTargetChildren2color_red_outline]:
                    hasVariant($state, "color", "red") &&
                    hasVariant($state, "outline", "outline"),
                  [sty.slotTargetChildren2color_sand]: hasVariant(
                    $state,
                    "color",
                    "sand"
                  ),
                  [sty.slotTargetChildren2color_sand_outline]:
                    hasVariant($state, "color", "sand") &&
                    hasVariant($state, "outline", "outline"),
                  [sty.slotTargetChildren2color_softBlue]: hasVariant(
                    $state,
                    "color",
                    "softBlue"
                  ),
                  [sty.slotTargetChildren2color_softGreen]: hasVariant(
                    $state,
                    "color",
                    "softGreen"
                  ),
                  [sty.slotTargetChildren2color_softRed]: hasVariant(
                    $state,
                    "color",
                    "softRed"
                  ),
                  [sty.slotTargetChildren2color_softSand]: hasVariant(
                    $state,
                    "color",
                    "softSand"
                  ),
                  [sty.slotTargetChildren2color_softYellow]: hasVariant(
                    $state,
                    "color",
                    "softYellow"
                  ),
                  [sty.slotTargetChildren2color_text]: hasVariant(
                    $state,
                    "color",
                    "text"
                  ),
                  [sty.slotTargetChildren2color_white]: hasVariant(
                    $state,
                    "color",
                    "white"
                  ),
                  [sty.slotTargetChildren2color_yellow]: hasVariant(
                    $state,
                    "color",
                    "yellow"
                  ),
                  [sty.slotTargetChildren2isDisabled]: hasVariant(
                    $state,
                    "isDisabled",
                    "isDisabled"
                  ),
                  [sty.slotTargetChildren2loading]: hasVariant(
                    $state,
                    "loading",
                    "loading"
                  ),
                  [sty.slotTargetChildren2loading_color_red_outline]:
                    hasVariant($state, "loading", "loading") &&
                    hasVariant($state, "color", "red") &&
                    hasVariant($state, "outline", "outline"),
                  [sty.slotTargetChildren2loading_outline]:
                    hasVariant($state, "loading", "loading") &&
                    hasVariant($state, "outline", "outline"),
                  [sty.slotTargetChildren2outline]: hasVariant(
                    $state,
                    "outline",
                    "outline"
                  ),
                  [sty.slotTargetChildren2shape_rounded]: hasVariant(
                    $state,
                    "shape",
                    "rounded"
                  ),
                  [sty.slotTargetChildren2shape_rounded_color_red_outline]:
                    hasVariant($state, "outline", "outline") &&
                    hasVariant($state, "color", "red") &&
                    hasVariant($state, "shape", "rounded"),
                  [sty.slotTargetChildren2shape_rounded_outline]:
                    hasVariant($state, "outline", "outline") &&
                    hasVariant($state, "shape", "rounded"),
                  [sty.slotTargetChildren2showEndIcon]: hasVariant(
                    $state,
                    "showEndIcon",
                    "showEndIcon"
                  ),
                  [sty.slotTargetChildren2showStartIcon]: hasVariant(
                    $state,
                    "showStartIcon",
                    "showStartIcon"
                  ),
                  [sty.slotTargetChildren2size_minimal]: hasVariant(
                    $state,
                    "size",
                    "minimal"
                  ),
                  [sty.slotTargetChildren2space]: hasVariant(
                    $state,
                    "space",
                    "space"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(
        hasVariant($state, "loading", "loading") &&
        hasVariant($state, "showEndIcon", "showEndIcon")
          ? false
          : hasVariant($state, "showEndIcon", "showEndIcon")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_white]: hasVariant(
              $state,
              "color",
              "white"
            ),
            [sty.endIconContainercolor_yellow]: hasVariant(
              $state,
              "color",
              "yellow"
            ),
            [sty.endIconContainerloading]: hasVariant(
              $state,
              "loading",
              "loading"
            ),
            [sty.endIconContainerloading_showEndIcon]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "showEndIcon", "showEndIcon"),
            [sty.endIconContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.endIconContainershowStartIcon_loading]:
              hasVariant($state, "loading", "loading") &&
              hasVariant($state, "showStartIcon", "showStartIcon")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ChevronLeftIcon
                className={classNames(projectcss.all, sty.svg__rNoyp)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                $state,
                "color",
                "clear"
              ),
              [sty.slotTargetEndIconcolor_link]: hasVariant(
                $state,
                "color",
                "link"
              ),
              [sty.slotTargetEndIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.slotTargetEndIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.slotTargetEndIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.slotTargetEndIconcolor_softSand]: hasVariant(
                $state,
                "color",
                "softSand"
              ),
              [sty.slotTargetEndIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.slotTargetEndIconcolor_white]: hasVariant(
                $state,
                "color",
                "white"
              ),
              [sty.slotTargetEndIconcolor_yellow]: hasVariant(
                $state,
                "color",
                "yellow"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: [
    "root",
    "startIconContainer",
    "contentContainer",
    "svg",
    "endIconContainer"
  ],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer", "svg"],
  svg: ["svg"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  svg: "svg";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    svg: makeNodeComponent("svg"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
