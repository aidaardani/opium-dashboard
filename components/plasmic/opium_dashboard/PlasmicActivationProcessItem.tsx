// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: O1QdkPvlHFD3

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicActivationProcessItem.module.css"; // plasmic-import: O1QdkPvlHFD3/css

import Icon41Icon from "./icons/PlasmicIcon__Icon41"; // plasmic-import: V3NmvV_UMEOs/icon
import Icon42Icon from "./icons/PlasmicIcon__Icon42"; // plasmic-import: NbdQ650WQKOY/icon

createPlasmicElementProxy;

export type PlasmicActivationProcessItem__VariantMembers = {
  isCompleted: "isCompleted";
  isCurrent: "isCurrent";
  noBar: "noBar";
};
export type PlasmicActivationProcessItem__VariantsArgs = {
  isCompleted?: SingleBooleanChoiceArg<"isCompleted">;
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
  noBar?: SingleBooleanChoiceArg<"noBar">;
};
type VariantPropType = keyof PlasmicActivationProcessItem__VariantsArgs;
export const PlasmicActivationProcessItem__VariantProps =
  new Array<VariantPropType>("isCompleted", "isCurrent", "noBar");

export type PlasmicActivationProcessItem__ArgsType = {};
type ArgPropType = keyof PlasmicActivationProcessItem__ArgsType;
export const PlasmicActivationProcessItem__ArgProps = new Array<ArgPropType>();

export type PlasmicActivationProcessItem__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultActivationProcessItemProps {
  isCompleted?: SingleBooleanChoiceArg<"isCompleted">;
  isCurrent?: SingleBooleanChoiceArg<"isCurrent">;
  noBar?: SingleBooleanChoiceArg<"noBar">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivationProcessItem__RenderFunc(props: {
  variants: PlasmicActivationProcessItem__VariantsArgs;
  args: PlasmicActivationProcessItem__ArgsType;
  overrides: PlasmicActivationProcessItem__OverridesType;
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
        path: "isCompleted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isCompleted
      },
      {
        path: "isCurrent",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isCurrent
      },
      {
        path: "noBar",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noBar
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisCompleted]: hasVariant(
            $state,
            "isCompleted",
            "isCompleted"
          ),
          [sty.rootisCurrent]: hasVariant($state, "isCurrent", "isCurrent"),
          [sty.rootnoBar]: hasVariant($state, "noBar", "noBar")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__dxG9B, {
          [sty.freeBoxisCurrent__dxG9Bnv8Ye]: hasVariant(
            $state,
            "isCurrent",
            "isCurrent"
          ),
          [sty.freeBoxnoBar__dxG9BaWmeZ]: hasVariant($state, "noBar", "noBar")
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox___3W48A, {
            [sty.freeBoxisCompleted___3W48AtStC]: hasVariant(
              $state,
              "isCompleted",
              "isCompleted"
            ),
            [sty.freeBoxisCurrent___3W48Anv8Ye]: hasVariant(
              $state,
              "isCurrent",
              "isCurrent"
            ),
            [sty.freeBoxnoBar___3W48AaWmeZ]: hasVariant(
              $state,
              "noBar",
              "noBar"
            )
          })}
        >
          {(hasVariant($state, "isCompleted", "isCompleted") ? true : false) ? (
            <Icon41Icon
              className={classNames(projectcss.all, sty.svg__ksZez, {
                [sty.svgisCompleted__ksZeZtStC]: hasVariant(
                  $state,
                  "isCompleted",
                  "isCompleted"
                )
              })}
              role={"img"}
            />
          ) : null}
          {(hasVariant($state, "isCurrent", "isCurrent") ? true : false) ? (
            <Icon42Icon
              className={classNames(projectcss.all, sty.svg__zE9FO, {
                [sty.svgisCurrent__zE9FOnv8Ye]: hasVariant(
                  $state,
                  "isCurrent",
                  "isCurrent"
                )
              })}
              role={"img"}
            />
          ) : null}
        </div>
      </div>
      {(
        hasVariant($state, "noBar", "noBar")
          ? (() => {
              try {
                return !$state.noBar;
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
          : (() => {
              try {
                return !$props.isFirstChild;
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
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__bPTmF, {
            [sty.freeBoxisCompleted__bPTmFtStC]: hasVariant(
              $state,
              "isCompleted",
              "isCompleted"
            ),
            [sty.freeBoxisCurrent__bPTmFnv8Ye]: hasVariant(
              $state,
              "isCurrent",
              "isCurrent"
            ),
            [sty.freeBoxnoBar__bPTmFaWmeZ]: hasVariant($state, "noBar", "noBar")
          })}
        />
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivationProcessItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivationProcessItem__VariantsArgs;
    args?: PlasmicActivationProcessItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivationProcessItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivationProcessItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicActivationProcessItem__ArgProps,
          internalVariantPropNames: PlasmicActivationProcessItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivationProcessItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivationProcessItem";
  } else {
    func.displayName = `PlasmicActivationProcessItem.${nodeName}`;
  }
  return func;
}

export const PlasmicActivationProcessItem = Object.assign(
  // Top-level PlasmicActivationProcessItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicActivationProcessItem
    internalVariantProps: PlasmicActivationProcessItem__VariantProps,
    internalArgProps: PlasmicActivationProcessItem__ArgProps
  }
);

export default PlasmicActivationProcessItem;
/* prettier-ignore-end */