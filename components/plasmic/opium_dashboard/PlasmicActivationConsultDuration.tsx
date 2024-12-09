// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: PibRCPxm0C4b

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

import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: Gl72hv5IMo-p/codeComponent
import HoursDaysOfWeek from "../../HoursDaysOfWeek"; // plasmic-import: lSLy8Nehd6MM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicActivationConsultDuration.module.css"; // plasmic-import: PibRCPxm0C4b/css

import Icon34Icon from "./icons/PlasmicIcon__Icon34"; // plasmic-import: Pu6FdA6kdBUA/icon

createPlasmicElementProxy;

export type PlasmicActivationConsultDuration__VariantMembers = {};
export type PlasmicActivationConsultDuration__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivationConsultDuration__VariantsArgs;
export const PlasmicActivationConsultDuration__VariantProps =
  new Array<VariantPropType>();

export type PlasmicActivationConsultDuration__ArgsType = {};
type ArgPropType = keyof PlasmicActivationConsultDuration__ArgsType;
export const PlasmicActivationConsultDuration__ArgProps =
  new Array<ArgPropType>();

export type PlasmicActivationConsultDuration__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<"div">;
  text?: Flex__<"div">;
  centersApi?: Flex__<typeof ApiRequest>;
  workHoursApi?: Flex__<typeof ApiRequest>;
  hoursDaysOfWeek?: Flex__<typeof HoursDaysOfWeek>;
};

export interface DefaultActivationConsultDurationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivationConsultDuration__RenderFunc(props: {
  variants: PlasmicActivationConsultDuration__VariantsArgs;
  args: PlasmicActivationConsultDuration__ArgsType;
  overrides: PlasmicActivationConsultDuration__OverridesType;
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
        path: "hoursDaysOfWeek.duration",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "centersApi.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "centersApi.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "centersApi.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "workHoursApi.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "workHoursApi.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "workHoursApi.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {PlasmicActivationConsultDuration.pageMetadata.title}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicActivationConsultDuration.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicActivationConsultDuration.pageMetadata.title}
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
              {"\u0633\u0627\u0639\u062a \u06a9\u0627\u0631\u06cc"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__v4Ii)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dp6AO)}
            >
              <ApiRequest
                data-plasmic-name={"centersApi"}
                data-plasmic-override={overrides.centersApi}
                className={classNames("__wab_instance", sty.centersApi)}
                errorDisplay={null}
                loadingDisplay={
                  <div
                    className={classNames(projectcss.all, sty.freeBox__uniJz)}
                  >
                    <Icon34Icon
                      className={classNames(projectcss.all, sty.svg__fmpnp)}
                      role={"img"}
                    />
                  </div>
                }
                method={"GET"}
                onError={generateStateOnChangeProp($state, [
                  "centersApi",
                  "error"
                ])}
                onLoading={generateStateOnChangeProp($state, [
                  "centersApi",
                  "loading"
                ])}
                onSuccess={generateStateOnChangeProp($state, [
                  "centersApi",
                  "data"
                ])}
                url={"https://api.paziresh24.com/V1/doctor/centers"}
              >
                <ApiRequest
                  data-plasmic-name={"workHoursApi"}
                  data-plasmic-override={overrides.workHoursApi}
                  className={classNames("__wab_instance", sty.workHoursApi)}
                  errorDisplay={null}
                  loadingDisplay={
                    <div
                      className={classNames(projectcss.all, sty.freeBox__drTGm)}
                    >
                      <Icon34Icon
                        className={classNames(projectcss.all, sty.svg__aytJb)}
                        role={"img"}
                      />
                    </div>
                  }
                  method={"GET"}
                  onError={generateStateOnChangeProp($state, [
                    "workHoursApi",
                    "error"
                  ])}
                  onLoading={generateStateOnChangeProp($state, [
                    "workHoursApi",
                    "loading"
                  ])}
                  onSuccess={generateStateOnChangeProp($state, [
                    "workHoursApi",
                    "data"
                  ])}
                  url={(() => {
                    try {
                      return (() => {
                        const centerId = $state.centersApi.data.data.find(
                          item => item.type_id == 1
                        ).id;
                        return `https://api.paziresh24.com/V1/doctor/center/workhours?center_id=${5532}`;
                      })();
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
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___869Rv)}
                  >
                    <HoursDaysOfWeek
                      data-plasmic-name={"hoursDaysOfWeek"}
                      data-plasmic-override={overrides.hoursDaysOfWeek}
                      centerId={(() => {
                        try {
                          return "5532";
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
                      className={classNames(
                        "__wab_instance",
                        sty.hoursDaysOfWeek
                      )}
                      duration={generateStateValueProp($state, [
                        "hoursDaysOfWeek",
                        "duration"
                      ])}
                      onDurationChange={generateStateOnChangeProp($state, [
                        "hoursDaysOfWeek",
                        "duration"
                      ])}
                      userCenterId={(() => {
                        try {
                          return $state.centersApi.data.data.find(
                            item => item.id == 5532
                          ).user_center_id;
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
                    />
                  </Stack__>
                </ApiRequest>
              </ApiRequest>
            </Stack__>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "text",
    "centersApi",
    "workHoursApi",
    "hoursDaysOfWeek"
  ],
  header: ["header", "text"],
  text: ["text"],
  centersApi: ["centersApi", "workHoursApi", "hoursDaysOfWeek"],
  workHoursApi: ["workHoursApi", "hoursDaysOfWeek"],
  hoursDaysOfWeek: ["hoursDaysOfWeek"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  text: "div";
  centersApi: typeof ApiRequest;
  workHoursApi: typeof ApiRequest;
  hoursDaysOfWeek: typeof HoursDaysOfWeek;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivationConsultDuration__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivationConsultDuration__VariantsArgs;
    args?: PlasmicActivationConsultDuration__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivationConsultDuration__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivationConsultDuration__ArgsType,
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
          internalArgPropNames: PlasmicActivationConsultDuration__ArgProps,
          internalVariantPropNames:
            PlasmicActivationConsultDuration__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivationConsultDuration__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivationConsultDuration";
  } else {
    func.displayName = `PlasmicActivationConsultDuration.${nodeName}`;
  }
  return func;
}

export const PlasmicActivationConsultDuration = Object.assign(
  // Top-level PlasmicActivationConsultDuration renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    text: makeNodeComponent("text"),
    centersApi: makeNodeComponent("centersApi"),
    workHoursApi: makeNodeComponent("workHoursApi"),
    hoursDaysOfWeek: makeNodeComponent("hoursDaysOfWeek"),

    // Metadata about props expected for PlasmicActivationConsultDuration
    internalVariantProps: PlasmicActivationConsultDuration__VariantProps,
    internalArgProps: PlasmicActivationConsultDuration__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "ساعت کاری",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicActivationConsultDuration;
/* prettier-ignore-end */
