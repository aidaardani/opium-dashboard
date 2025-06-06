/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: YknOC-p8akkE

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
import { AntdAccordion } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { accordionHelpers as AntdAccordion_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { AntdAccordionItem } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component

import { useScreenVariants as useScreenVariantsfobTirRaixGf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fobTIRRaixGf/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicTransactions2.module.css"; // plasmic-import: YknOC-p8akkE/css

import Icon45Icon from "./icons/PlasmicIcon__Icon45"; // plasmic-import: YyulLjs7e3e8/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: 8j1U_g9afFrU/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: -MDfk7M6FyZh/icon
import Icon46Icon from "./icons/PlasmicIcon__Icon46"; // plasmic-import: ziFCFCfg_B-t/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: WiLor5jWTYZW/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicTransactions2__VariantMembers = {};
export type PlasmicTransactions2__VariantsArgs = {};
type VariantPropType = keyof PlasmicTransactions2__VariantsArgs;
export const PlasmicTransactions2__VariantProps = new Array<VariantPropType>();

export type PlasmicTransactions2__ArgsType = {};
type ArgPropType = keyof PlasmicTransactions2__ArgsType;
export const PlasmicTransactions2__ArgProps = new Array<ArgPropType>();

export type PlasmicTransactions2__OverridesType = {
  root?: Flex__<"div">;
  apiGetDrAcoounts?: Flex__<typeof ApiRequest>;
  accordion?: Flex__<typeof AntdAccordion>;
  button?: Flex__<typeof Button>;
};

export interface DefaultTransactions2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTransactions2__RenderFunc(props: {
  variants: PlasmicTransactions2__VariantsArgs;
  args: PlasmicTransactions2__ArgsType;
  overrides: PlasmicTransactions2__OverridesType;
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
        path: "apiGetDrAcoounts.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiGetDrAcoounts"
      },
      {
        path: "apiGetDrAcoounts.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiGetDrAcoounts"
      },
      {
        path: "apiGetDrAcoounts.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiGetDrAcoounts"
      },
      {
        path: "accordion.activePanelId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec(
          "activePanelId",
          AntdAccordion_Helpers
        )
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfobTirRaixGf()
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
      <ApiRequest
        data-plasmic-name={"apiGetDrAcoounts"}
        data-plasmic-override={overrides.apiGetDrAcoounts}
        children={null}
        className={classNames("__wab_instance", sty.apiGetDrAcoounts)}
        errorDisplay={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___48ZNc
            )}
          >
            {"Error fetching data"}
          </div>
        }
        loadingDisplay={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jdaLm
            )}
          >
            {"Loading..."}
          </div>
        }
        method={"GET"}
        onError={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, [
            "apiGetDrAcoounts",
            "error"
          ]).apply(null, eventArgs);
        }}
        onLoading={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, [
            "apiGetDrAcoounts",
            "loading"
          ]).apply(null, eventArgs);
        }}
        onSuccess={async (...eventArgs: any) => {
          generateStateOnChangeProp($state, ["apiGetDrAcoounts", "data"]).apply(
            null,
            eventArgs
          );
        }}
        ref={ref => {
          $refs["apiGetDrAcoounts"] = ref;
        }}
        url={
          "https://apigw.paziresh24.com/v1/n8n-nelson/webhook/get-other-accounts"
        }
      />

      {(() => {
        try {
          return $state.apiGetDrAcoounts.data.status === "true";
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return false;
          }
          throw e;
        }
      })()
        ? (() => {
            const child$Props = {
              activeKey: generateStateValueProp($state, [
                "accordion",
                "activePanelId"
              ]),
              bordered: true,
              className: classNames("__wab_instance", sty.accordion),
              items: (
                <React.Fragment>
                  <AntdAccordionItem
                    className={classNames(
                      "__wab_instance",
                      sty.accordionItem__feMaP
                    )}
                    id={1}
                    label2={
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ayAgO
                        )}
                      >
                        <Icon45Icon
                          className={classNames(projectcss.all, sty.svg__hIotg)}
                          role={"img"}
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oxxd
                          )}
                        >
                          {
                            "\u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0686\u0646\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f!"
                          }
                        </div>
                      </Stack__>
                    }
                    showArrow={true}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__kl09A)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__pPykP
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__mhYiw
                          )}
                        >
                          <Icon16Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__plq58
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ugCmZ
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return ` پزشک گرامی، متوجه شدیم که شما با ${
                                    $state.apiGetDrAcoounts.data.list.split(",")
                                      .length
                                  } شماره موبایل ${$state.apiGetDrAcoounts.data.list
                                    .split(",")
                                    .map(num => `(${num})`)
                                    .join(
                                      " و "
                                    )} در سامانه پذیرش۲۴ حساب کاربری دارید. 
`;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__yPiHs
                          )}
                        >
                          <Icon7Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qFRit
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qFhhQ
                            )}
                          >
                            {
                              "\u0627\u06cc\u0646 \u0645\u0648\u0636\u0648\u0639 \u0628\u0627\u0639\u062b \u0627\u06cc\u062c\u0627\u062f \u0645\u0634\u06a9\u0644 \u062f\u0631 \u062b\u0628\u062a \u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627\u06cc \u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0648\u0628\u062a\u200c\u0647\u0627\u06cc \u0634\u0645\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0644\u0637\u0641\u0627\u064b \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0647 \u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062f\u0647\u06cc\u062f \u062a\u0627 \u062d\u0633\u0627\u0628 \u0634\u0645\u0627\u0631\u0647 \u062f\u06cc\u06af\u0631 \u062d\u0630\u0641 \u0634\u0648\u062f."
                            }
                          </div>
                        </Stack__>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__b4Ccw
                          )}
                        >
                          <Icon46Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__nhR0H
                            )}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__alKiC
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $state.apiGetDrAcoounts.data.status ===
                                    "true"
                                    ? `همچنین در حساب کاربری شما به شماره ${$state.apiGetDrAcoounts.data.cell} مبلغ ${$state.apiGetDrAcoounts.data.cost} ریال موجودی تسویه نشده وجود دارد، لطفا جهت تسویه اقدام کنید.`
                                    : "";
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      </div>
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        children2={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___9JJia
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__uk6SN
                              )}
                            >
                              {
                                "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646"
                              }
                            </div>
                            <Icon24Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__cdae7
                              )}
                              role={"img"}
                            />
                          </div>
                        }
                        className={classNames("__wab_instance", sty.button)}
                        onClick={async event => {
                          const $steps = {};

                          $steps["sendTelegram"] = true
                            ? (() => {
                                const actionArgs = {
                                  args: ["https://t.me/Aidaardani"]
                                };
                                return $globalActions[
                                  "Hamdast.openLink"
                                ]?.apply(null, [...actionArgs.args]);
                              })()
                            : undefined;
                          if (
                            $steps["sendTelegram"] != null &&
                            typeof $steps["sendTelegram"] === "object" &&
                            typeof $steps["sendTelegram"].then === "function"
                          ) {
                            $steps["sendTelegram"] = await $steps[
                              "sendTelegram"
                            ];
                          }
                        }}
                      />
                    </Stack__>
                  </AntdAccordionItem>
                  <AntdAccordionItem
                    className={classNames(
                      "__wab_instance",
                      sty.accordionItem__hiHjO
                    )}
                    id={2}
                    label2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__e145I
                        )}
                      >
                        {"Second Item"}
                      </div>
                    }
                    showArrow={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tCcUl
                      )}
                    >
                      {"Second Children"}
                    </div>
                  </AntdAccordionItem>
                </React.Fragment>
              ),
              onChange: async (...eventArgs: any) => {
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "activePanelId",
                  ["accordion", "activePanelId"],
                  AntdAccordion_Helpers
                ).apply(null, eventArgs);
              }
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "activePanelId",
                  plasmicStateName: "accordion.activePanelId"
                }
              ],
              [],
              AntdAccordion_Helpers ?? {},
              child$Props
            );

            return (
              <AntdAccordion
                data-plasmic-name={"accordion"}
                data-plasmic-override={overrides.accordion}
                {...child$Props}
              />
            );
          })()
        : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "apiGetDrAcoounts", "accordion", "button"],
  apiGetDrAcoounts: ["apiGetDrAcoounts"],
  accordion: ["accordion", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  apiGetDrAcoounts: typeof ApiRequest;
  accordion: typeof AntdAccordion;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTransactions2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTransactions2__VariantsArgs;
    args?: PlasmicTransactions2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTransactions2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTransactions2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTransactions2__ArgProps,
          internalVariantPropNames: PlasmicTransactions2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTransactions2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTransactions2";
  } else {
    func.displayName = `PlasmicTransactions2.${nodeName}`;
  }
  return func;
}

export const PlasmicTransactions2 = Object.assign(
  // Top-level PlasmicTransactions2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    apiGetDrAcoounts: makeNodeComponent("apiGetDrAcoounts"),
    accordion: makeNodeComponent("accordion"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicTransactions2
    internalVariantProps: PlasmicTransactions2__VariantProps,
    internalArgProps: PlasmicTransactions2__ArgProps
  }
);

export default PlasmicTransactions2;
/* prettier-ignore-end */
