/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: iHrwG1Y3kEmP

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

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicActivationOnload.module.css"; // plasmic-import: iHrwG1Y3kEmP/css

createPlasmicElementProxy;

export type PlasmicActivationOnload__VariantMembers = {};
export type PlasmicActivationOnload__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivationOnload__VariantsArgs;
export const PlasmicActivationOnload__VariantProps =
  new Array<VariantPropType>();

export type PlasmicActivationOnload__ArgsType = {
  userInfoId?: string;
  step?: string;
};
type ArgPropType = keyof PlasmicActivationOnload__ArgsType;
export const PlasmicActivationOnload__ArgProps = new Array<ArgPropType>(
  "userInfoId",
  "step"
);

export type PlasmicActivationOnload__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultActivationOnloadProps {
  userInfoId?: string;
  step?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivationOnload__RenderFunc(props: {
  variants: PlasmicActivationOnload__VariantsArgs;
  args: PlasmicActivationOnload__ArgsType;
  overrides: PlasmicActivationOnload__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_fragment_design_system_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        deps={(() => {
          try {
            return [$ctx.GrowthBook.isReady, $props.userInfoId];
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return undefined;
            }
            throw e;
          }
        })()}
        onMount={async () => {
          const $steps = {};

          $steps["invokeGlobalAction"] = $props.userInfoId
            ? (() => {
                const actionArgs = {
                  args: [
                    (() => {
                      try {
                        return {
                          event_group: "activation-page",
                          data: {
                            userId: $props.userInfoId,
                            pagePath: window.location.href
                          },
                          event_type: "load-page-step" + $props.step
                        };
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  ]
                };
                return $globalActions["Splunk.sendLog"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["invokeGlobalAction"] != null &&
            typeof $steps["invokeGlobalAction"] === "object" &&
            typeof $steps["invokeGlobalAction"].then === "function"
          ) {
            $steps["invokeGlobalAction"] = await $steps["invokeGlobalAction"];
          }

          $steps["invokeGlobalAction2"] =
            $ctx.GrowthBook.isReady && $props.userInfoId
              ? (() => {
                  const actionArgs = {
                    args: [
                      (() => {
                        try {
                          return {
                            ...$ctx.GrowthBook.attributes,
                            user_info_id: $props.userInfoId
                          };
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    ]
                  };
                  return $globalActions["GrowthBook.setAttributes"]?.apply(
                    null,
                    [...actionArgs.args]
                  );
                })()
              : undefined;
          if (
            $steps["invokeGlobalAction2"] != null &&
            typeof $steps["invokeGlobalAction2"] === "object" &&
            typeof $steps["invokeGlobalAction2"].then === "function"
          ) {
            $steps["invokeGlobalAction2"] = await $steps["invokeGlobalAction2"];
          }
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivationOnload__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivationOnload__VariantsArgs;
    args?: PlasmicActivationOnload__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivationOnload__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActivationOnload__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicActivationOnload__ArgProps,
          internalVariantPropNames: PlasmicActivationOnload__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivationOnload__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivationOnload";
  } else {
    func.displayName = `PlasmicActivationOnload.${nodeName}`;
  }
  return func;
}

export const PlasmicActivationOnload = Object.assign(
  // Top-level PlasmicActivationOnload renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicActivationOnload
    internalVariantProps: PlasmicActivationOnload__VariantProps,
    internalArgProps: PlasmicActivationOnload__ArgProps
  }
);

export default PlasmicActivationOnload;
/* prettier-ignore-end */
