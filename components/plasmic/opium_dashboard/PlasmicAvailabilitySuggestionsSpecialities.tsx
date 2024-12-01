// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: bBN7I3yc6plC

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
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicAvailabilitySuggestionsSpecialities.module.css"; // plasmic-import: bBN7I3yc6plC/css

createPlasmicElementProxy;

export type PlasmicAvailabilitySuggestionsSpecialities__VariantMembers = {};
export type PlasmicAvailabilitySuggestionsSpecialities__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicAvailabilitySuggestionsSpecialities__VariantsArgs;
export const PlasmicAvailabilitySuggestionsSpecialities__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAvailabilitySuggestionsSpecialities__ArgsType = {};
type ArgPropType = keyof PlasmicAvailabilitySuggestionsSpecialities__ArgsType;
export const PlasmicAvailabilitySuggestionsSpecialities__ArgProps =
  new Array<ArgPropType>();

export type PlasmicAvailabilitySuggestionsSpecialities__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  ساعاتپربازدید?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultAvailabilitySuggestionsSpecialitiesProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAvailabilitySuggestionsSpecialities__RenderFunc(props: {
  variants: PlasmicAvailabilitySuggestionsSpecialities__VariantsArgs;
  args: PlasmicAvailabilitySuggestionsSpecialities__ArgsType;
  overrides: PlasmicAvailabilitySuggestionsSpecialities__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "availabilitySuggestionsSpecialities",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
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
        sty.root
      )}
    >
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        onMount={async () => {
          const $steps = {};

          $steps["apiAvailabilitySuggestionsSpecialities"] = true
            ? (() => {
                const actionArgs = {
                  args: [
                    "GET",
                    "https://apigw.paziresh24.com/v1/availability-suggestions-specialities?category=pulmonology"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["apiAvailabilitySuggestionsSpecialities"] != null &&
            typeof $steps["apiAvailabilitySuggestionsSpecialities"] ===
              "object" &&
            typeof $steps["apiAvailabilitySuggestionsSpecialities"].then ===
              "function"
          ) {
            $steps["apiAvailabilitySuggestionsSpecialities"] = await $steps[
              "apiAvailabilitySuggestionsSpecialities"
            ];
          }

          $steps["updateAvailabilitySuggestionsSpecialities"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["availabilitySuggestionsSpecialities"]
                  },
                  operation: 0,
                  value: $steps.apiAvailabilitySuggestionsSpecialities.data
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateAvailabilitySuggestionsSpecialities"] != null &&
            typeof $steps["updateAvailabilitySuggestionsSpecialities"] ===
              "object" &&
            typeof $steps["updateAvailabilitySuggestionsSpecialities"].then ===
              "function"
          ) {
            $steps["updateAvailabilitySuggestionsSpecialities"] = await $steps[
              "updateAvailabilitySuggestionsSpecialities"
            ];
          }
        }}
      />

      <div
        data-plasmic-name={
          "\u0633\u0627\u0639\u0627\u062a\u067e\u0631\u0628\u0627\u0632\u062f\u06cc\u062f"
        }
        data-plasmic-override={overrides.ساعاتپربازدید}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.ساعاتپربازدید
        )}
      >
        {
          "\u0633\u0627\u0639\u0627\u062a \u067e\u0631\u0628\u0627\u0632\u062f\u06cc\u062f"
        }
      </div>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          <React.Fragment>
            {"\u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 "}
          </React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700 }}
          >
            {
              "\u0648\u06cc\u0632\u06cc\u062a \u0622\u0646\u0644\u0627\u06cc\u0646"
            }
          </span>
          <React.Fragment>{" \u062f\u0631 \u0631\u0648\u0632 "}</React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700 }}
          >
            {
              "\u0634\u0646\u0628\u0647\u200c\u0647\u0627 \u0648 \u06cc\u06a9\u0634\u0646\u0628\u0647\u200c\u0647\u0627"
            }
          </span>
          <React.Fragment>
            {
              " \u062f\u0631 \u0628\u0627\u0632\u0647\u200c\u0647\u0627\u06cc \u0632\u0645\u0627\u0646\u06cc "
            }
          </React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700 }}
          >
            {"\u06f1\u06f7 \u0627\u0644\u06cc24"}
          </span>
          <React.Fragment>
            {
              " \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0646\u0648\u0628\u062a\u200c\u0647\u0627\u06cc \u0634\u0645\u0627 \u0648 \u062c\u0630\u0628 "
            }
          </React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700, color: "#2A7B4F" }}
          >
            {"\u00ab137 \u0628\u06cc\u0645\u0627\u0631\u00bb"}
          </span>
          <React.Fragment>{""}</React.Fragment>
          <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ fontWeight: 700, color: "#3AAD4C" }}
          >
            {" "}
          </span>
          <React.Fragment>
            {
              "\u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0633\u0627\u0639\u0627\u062a \u062d\u0636\u0648\u0631 \u062f\u0627\u0634\u062a\u0647\u200c\u0627\u0646\u062f\u060c \u06a9\u0645\u06a9 \u06a9\u0646\u062f.\n"
            }
          </React.Fragment>
        </React.Fragment>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideEffect",
    "\u0633\u0627\u0639\u0627\u062a\u067e\u0631\u0628\u0627\u0632\u062f\u06cc\u062f",
    "text"
  ],
  sideEffect: ["sideEffect"],
  ساعاتپربازدید: [
    "\u0633\u0627\u0639\u0627\u062a\u067e\u0631\u0628\u0627\u0632\u062f\u06cc\u062f"
  ],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  ساعاتپربازدید: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvailabilitySuggestionsSpecialities__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvailabilitySuggestionsSpecialities__VariantsArgs;
    args?: PlasmicAvailabilitySuggestionsSpecialities__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicAvailabilitySuggestionsSpecialities__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicAvailabilitySuggestionsSpecialities__ArgsType,
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
          internalArgPropNames:
            PlasmicAvailabilitySuggestionsSpecialities__ArgProps,
          internalVariantPropNames:
            PlasmicAvailabilitySuggestionsSpecialities__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAvailabilitySuggestionsSpecialities__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvailabilitySuggestionsSpecialities";
  } else {
    func.displayName = `PlasmicAvailabilitySuggestionsSpecialities.${nodeName}`;
  }
  return func;
}

export const PlasmicAvailabilitySuggestionsSpecialities = Object.assign(
  // Top-level PlasmicAvailabilitySuggestionsSpecialities renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    ساعاتپربازدید: makeNodeComponent(
      "\u0633\u0627\u0639\u0627\u062a\u067e\u0631\u0628\u0627\u0632\u062f\u06cc\u062f"
    ),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicAvailabilitySuggestionsSpecialities
    internalVariantProps:
      PlasmicAvailabilitySuggestionsSpecialities__VariantProps,
    internalArgProps: PlasmicAvailabilitySuggestionsSpecialities__ArgProps
  }
);

export default PlasmicAvailabilitySuggestionsSpecialities;
/* prettier-ignore-end */