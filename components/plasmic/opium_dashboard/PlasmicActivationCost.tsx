// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: POnAEYK1Z5mh

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

import ActivationOfficeCost from "../../ActivationOfficeCost"; // plasmic-import: Uq71V-zgrZxq/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicActivationCost.module.css"; // plasmic-import: POnAEYK1Z5mh/css

createPlasmicElementProxy;

export type PlasmicActivationCost__VariantMembers = {};
export type PlasmicActivationCost__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivationCost__VariantsArgs;
export const PlasmicActivationCost__VariantProps = new Array<VariantPropType>();

export type PlasmicActivationCost__ArgsType = {};
type ArgPropType = keyof PlasmicActivationCost__ArgsType;
export const PlasmicActivationCost__ArgProps = new Array<ArgPropType>();

export type PlasmicActivationCost__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<"div">;
  text?: Flex__<"div">;
  activationOfficeCost?: Flex__<typeof ActivationOfficeCost>;
};

export interface DefaultActivationCostProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivationCost__RenderFunc(props: {
  variants: PlasmicActivationCost__VariantsArgs;
  args: PlasmicActivationCost__ArgsType;
  overrides: PlasmicActivationCost__OverridesType;
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

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicActivationCost.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicActivationCost.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicActivationCost.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(projectcss.all, sty.header)}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"\u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wLaJb)}>
            <div className={classNames(projectcss.all, sty.freeBox___2TZEj)}>
              <ActivationOfficeCost
                data-plasmic-name={"activationOfficeCost"}
                data-plasmic-override={overrides.activationOfficeCost}
                className={classNames(
                  "__wab_instance",
                  sty.activationOfficeCost
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "text", "activationOfficeCost"],
  header: ["header", "text"],
  text: ["text"],
  activationOfficeCost: ["activationOfficeCost"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  text: "div";
  activationOfficeCost: typeof ActivationOfficeCost;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivationCost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivationCost__VariantsArgs;
    args?: PlasmicActivationCost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivationCost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivationCost__ArgsType,
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
          internalArgPropNames: PlasmicActivationCost__ArgProps,
          internalVariantPropNames: PlasmicActivationCost__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivationCost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivationCost";
  } else {
    func.displayName = `PlasmicActivationCost.${nodeName}`;
  }
  return func;
}

export const PlasmicActivationCost = Object.assign(
  // Top-level PlasmicActivationCost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    text: makeNodeComponent("text"),
    activationOfficeCost: makeNodeComponent("activationOfficeCost"),

    // Metadata about props expected for PlasmicActivationCost
    internalVariantProps: PlasmicActivationCost__VariantProps,
    internalArgProps: PlasmicActivationCost__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "مبلغ بیعانه",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicActivationCost;
/* prettier-ignore-end */
