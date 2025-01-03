// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: nfu3aryCX9a4

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

import { Input } from "@/fragment/components/input"; // plasmic-import: ByhbQ0nAxig8/codeComponent
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicActivationConsultCost2.module.css"; // plasmic-import: nfu3aryCX9a4/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicActivationConsultCost2__VariantMembers = {};
export type PlasmicActivationConsultCost2__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivationConsultCost2__VariantsArgs;
export const PlasmicActivationConsultCost2__VariantProps =
  new Array<VariantPropType>();

export type PlasmicActivationConsultCost2__ArgsType = {
  hasOnlineVisit?: boolean;
  channels?: string;
  userId?: string;
};
type ArgPropType = keyof PlasmicActivationConsultCost2__ArgsType;
export const PlasmicActivationConsultCost2__ArgProps = new Array<ArgPropType>(
  "hasOnlineVisit",
  "channels",
  "userId"
);

export type PlasmicActivationConsultCost2__OverridesType = {
  root?: Flex__<"div">;
  input?: Flex__<typeof Input>;
  freeBox?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultActivationConsultCost2Props {
  hasOnlineVisit?: boolean;
  channels?: string;
  userId?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivationConsultCost2__RenderFunc(props: {
  variants: PlasmicActivationConsultCost2__VariantsArgs;
  args: PlasmicActivationConsultCost2__ArgsType;
  overrides: PlasmicActivationConsultCost2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          hasOnlineVisit: false
        },
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
        path: "costOffice",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { label: "10,000 \u062a\u0648\u0645\u0627\u0646", value: "10000" },
          { label: "20,000 \u062a\u0648\u0645\u0627\u0646", value: "20000" },
          { label: "30,000 \u062a\u0648\u0645\u0627\u0646", value: "30000" },
          { label: "40,000 \u062a\u0648\u0645\u0627\u0646", value: "40000" },
          { label: "50,000 \u062a\u0648\u0645\u0627\u0646", value: "50000" },
          { label: "100,000 \u062a\u0648\u0645\u0627\u0646", value: "100000" },
          {
            label:
              "\u0642\u06cc\u0645\u062a \u062f\u0644\u062e\u0648\u0627\u0647",
            value: "custom"
          }
        ]
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "descriptionList",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          "\u0628\u06cc\u0645\u0627\u0631 \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u0645\u0648\u0641\u0642 \u0628\u0647 \u0627\u062e\u0630 \u0646\u0648\u0628\u062a \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u0628\u06cc\u0639\u0627\u0646\u0647 \u0631\u0627 \u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0645\u0627\u06cc\u062f.",
          "\u0627\u0633\u0627\u0645\u06cc \u0628\u06cc\u0645\u0627\u0631\u0627\u0646\u06cc \u06a9\u0647 \u062f\u0631 \u0644\u06cc\u0633\u062a \u0628\u06cc\u0645\u0627\u0631\u0627\u0646 \u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u062f \u062a\u0645\u0627\u0645\u0627 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u06cc\u0639\u0627\u0646\u0647 \u0631\u0627 \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u0647 \u0627\u0646\u062f.",
          "\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0628\u06cc\u0645\u0627\u0631 \u0646\u0648\u0628\u062a \u062e\u0648\u062f \u0631\u0627 \u062a\u0627 5 \u0633\u0627\u0639\u062a \u067e\u06cc\u0634 \u0627\u0632 \u0633\u0627\u0639\u062a \u0646\u0648\u0628\u062a \u0644\u063a\u0648 \u0646\u0645\u0627\u06cc\u062f\u060c \u0648\u062c\u0647 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0628\u06cc\u0645\u0627\u0631 \u0627\u0633\u062a\u0631\u062f\u0627\u062f \u0645\u06cc \u06af\u0631\u062f\u062f."
        ]
      },
      {
        path: "isCancelLoading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "isLoadingSave",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__cUazr
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return `میانگین مبلغ پیشنهادی از سوی همکاران شما ${(150000).toLocaleString()} تومان است.`;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <Input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        className={classNames("__wab_instance", sty.input)}
        onChange={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["input", "value"]).apply(
            null,
            eventArgs
          );
        }}
        placeholder={
          "\u0645\u0628\u0644\u063a \u0647\u0631 \u0648\u06cc\u0632\u06cc\u062a (\u062a\u0648\u0645\u0627\u0646)"
        }
        type={"text"}
        value={generateStateValueProp($state, ["input", "value"])}
      />

      {(() => {
        try {
          return !!$state.input.value;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__ttxM2
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return `${(+$state.input.value).toLocaleString()} ${
                  $state.input.value ? "تومان" : ""
                }`;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      ) : null}
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___80Vt4
        )}
      >
        {
          "\u0644\u0637\u0641\u0627\u064b \u062a\u0648\u062c\u0647 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u06f3\u06f0\u066a \u0627\u0632 \u0645\u0628\u0644\u063a \u0647\u0631 \u0648\u06cc\u0632\u06cc\u062a \u0628\u0647 \u067e\u0630\u06cc\u0631\u0634 \u06f2\u06f4 \u062a\u0639\u0644\u0642 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f. \u0628\u0631\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0628\u06cc\u0645\u0627\u0631\u0627\u0646\u060c \u067e\u0633 \u0627\u0632 \u062a\u06a9\u0645\u06cc\u0644 \u062b\u0628\u062a\u200c\u0646\u0627\u0645\u060c \u0634\u0645\u0627\u0631\u0647 \u06a9\u0627\u0631\u062a \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0628\u062e\u0634 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u067e\u0631\u062f\u0627\u062e\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f."
        }
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          children2={"\u0627\u062f\u0627\u0645\u0647"}
          className={classNames("__wab_instance", sty.button)}
          onClick={async event => {
            const $steps = {};

            $steps["invokeGlobalAction"] = (() => {
              const regex = /^\d+$/;
              return !regex.test($state.input.value);
            })()
              ? (() => {
                  const actionArgs = {
                    args: [
                      "error",
                      "\u0644\u0637\u0641\u0627 \u0645\u0628\u0644\u063a \u0635\u062d\u06cc\u062d \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f."
                    ]
                  };
                  return $globalActions["Fragment.showToast"]?.apply(null, [
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

            $steps["sendEvent"] = true
              ? (() => {
                  const actionArgs = {
                    args: [
                      (() => {
                        try {
                          return {
                            event_group: "activation-page",
                            data: {
                              userid: $props.userId,
                              input: $state.input.value,
                              pagepath: window.location.href
                            },
                            event_type: "click-save-button-consult-price-step4"
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
              $steps["sendEvent"] != null &&
              typeof $steps["sendEvent"] === "object" &&
              typeof $steps["sendEvent"].then === "function"
            ) {
              $steps["sendEvent"] = await $steps["sendEvent"];
            }

            $steps["goToPage"] = (() => {
              const regex = /^\d+$/;
              return regex.test($state.input.value);
            })()
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return (() => {
                          const cost = $state.input.value * 10;
                          const queryParams = globalThis.encodeURIComponent(
                            JSON.stringify(cost)
                          );
                          return `/activation-page/consult/duration-2?price=${queryParams}&channels=${$props.channels}`;
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
                    })()
                  };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        />
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "input", "freeBox", "button"],
  input: ["input"],
  freeBox: ["freeBox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  input: typeof Input;
  freeBox: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivationConsultCost2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivationConsultCost2__VariantsArgs;
    args?: PlasmicActivationConsultCost2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivationConsultCost2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivationConsultCost2__ArgsType,
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
          internalArgPropNames: PlasmicActivationConsultCost2__ArgProps,
          internalVariantPropNames: PlasmicActivationConsultCost2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivationConsultCost2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivationConsultCost2";
  } else {
    func.displayName = `PlasmicActivationConsultCost2.${nodeName}`;
  }
  return func;
}

export const PlasmicActivationConsultCost2 = Object.assign(
  // Top-level PlasmicActivationConsultCost2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    input: makeNodeComponent("input"),
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicActivationConsultCost2
    internalVariantProps: PlasmicActivationConsultCost2__VariantProps,
    internalArgProps: PlasmicActivationConsultCost2__ArgProps
  }
);

export default PlasmicActivationConsultCost2;
/* prettier-ignore-end */
