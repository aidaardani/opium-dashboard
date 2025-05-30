/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: FvhQs2_HZKSE

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
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicText.module.css"; // plasmic-import: FvhQs2_HZKSE/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: BMYyZW6g83gg/icon

createPlasmicElementProxy;

export type PlasmicText__VariantMembers = {};
export type PlasmicText__VariantsArgs = {};
type VariantPropType = keyof PlasmicText__VariantsArgs;
export const PlasmicText__VariantProps = new Array<VariantPropType>();

export type PlasmicText__ArgsType = {
  checkPatientName?: boolean;
  onCheckPatientNameChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicText__ArgsType;
export const PlasmicText__ArgProps = new Array<ArgPropType>(
  "checkPatientName",
  "onCheckPatientNameChange"
);

export type PlasmicText__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultTextProps {
  checkPatientName?: boolean;
  onCheckPatientNameChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicText__RenderFunc(props: {
  variants: PlasmicText__VariantsArgs;
  args: PlasmicText__ArgsType;
  overrides: PlasmicText__OverridesType;
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
        path: "checkPatientName",
        type: "writable",
        variableType: "boolean",

        valueProp: "checkPatientName",
        onChangeProp: "onCheckPatientNameChange"
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
      <div className={classNames(projectcss.all, sty.freeBox__bz9Pe)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__oGhZh
          )}
        >
          {"\u0646\u0627\u0645 \u0628\u06cc\u0645\u0627\u0631"}
        </div>
        <CheckSvgIcon
          className={classNames(projectcss.all, sty.svg___94H7S)}
          role={"img"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__xGjZu)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__m12QA
          )}
        >
          {"\u06a9\u062f\u067e\u06cc\u06af\u06cc\u0631\u06cc"}
        </div>
        <CheckSvgIcon
          className={classNames(projectcss.all, sty.svg___2WwpQ)}
          role={"img"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__vRvk9)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__zYlEu
          )}
        >
          {"\u0632\u0645\u0627\u0646 \u0646\u0648\u0628\u062a"}
        </div>
        <CheckSvgIcon
          className={classNames(projectcss.all, sty.svg__dW6VM)}
          role={"img"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__vQwXn)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wlJWi
          )}
        >
          {"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633"}
        </div>
        <CheckSvgIcon
          className={classNames(projectcss.all, sty.svg__gXRxl)}
          role={"img"}
        />
      </div>
    </div>
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
  PlasmicText__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicText__VariantsArgs;
    args?: PlasmicText__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicText__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicText__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicText__ArgProps,
          internalVariantPropNames: PlasmicText__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicText__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicText";
  } else {
    func.displayName = `PlasmicText.${nodeName}`;
  }
  return func;
}

export const PlasmicText = Object.assign(
  // Top-level PlasmicText renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicText
    internalVariantProps: PlasmicText__VariantProps,
    internalArgProps: PlasmicText__ArgProps
  }
);

export default PlasmicText;
/* prettier-ignore-end */
