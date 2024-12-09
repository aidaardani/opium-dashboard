// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: tH96z8RSiEan

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

import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import Dialog from "../../Dialog"; // plasmic-import: FJiI2-N1is_F/component
import Checkbox from "../../Checkbox"; // plasmic-import: IDR0sAqN5tth/component
import { ApiRequest } from "@/fragment/components/api-request"; // plasmic-import: Gl72hv5IMo-p/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicPayment.module.css"; // plasmic-import: tH96z8RSiEan/css

import ChevronDownSvgIcon from "./icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: vyArbbpHyA3h/icon
import ChevronUpSvgIcon from "./icons/PlasmicIcon__ChevronUpSvg"; // plasmic-import: fNYF7afgfzXN/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: WD9d-X_nOEzc/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicPayment__VariantMembers = {};
export type PlasmicPayment__VariantsArgs = {};
type VariantPropType = keyof PlasmicPayment__VariantsArgs;
export const PlasmicPayment__VariantProps = new Array<VariantPropType>();

export type PlasmicPayment__ArgsType = {
  selectedCenter?: string;
};
type ArgPropType = keyof PlasmicPayment__ArgsType;
export const PlasmicPayment__ArgProps = new Array<ArgPropType>(
  "selectedCenter"
);

export type PlasmicPayment__OverridesType = {
  root?: Flex__<"div">;
  now?: Flex__<"div">;
  all2?: Flex__<"div">;
  all?: Flex__<"div">;
  paid?: Flex__<"div">;
  paid2?: Flex__<"div">;
  setting?: Flex__<typeof Button>;
  requestToPay?: Flex__<typeof Button>;
  dialog?: Flex__<typeof Dialog>;
  ask?: Flex__<"div">;
  checkbox?: Flex__<typeof Checkbox>;
  apiRequest?: Flex__<typeof ApiRequest>;
  apiRequestforGetUserPrefrence?: Flex__<typeof ApiRequest>;
  apiRequestForGetDetailsPayment?: Flex__<typeof ApiRequest>;
};

export interface DefaultPaymentProps {
  selectedCenter?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPayment__RenderFunc(props: {
  variants: PlasmicPayment__VariantsArgs;
  args: PlasmicPayment__ArgsType;
  overrides: PlasmicPayment__OverridesType;
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
        path: "apiRequestForGetDetailsPayment.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequestForGetDetailsPayment.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequestForGetDetailsPayment.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "more",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "checkbox[].isChecked",
        type: "private",
        variableType: "boolean"
      },
      {
        path: "apiRequest.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequest.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequestforGetUserPrefrence.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequestforGetUserPrefrence.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "apiRequestforGetUserPrefrence.loading",
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
      <div className={classNames(projectcss.all, sty.freeBox__b4Jda)}>
        <div className={classNames(projectcss.all, sty.freeBox___62Ig)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___2NtI5
            )}
          >
            {"\u0645\u0648\u062c\u0648\u062f\u06cc"}
          </div>
          <div
            data-plasmic-name={"now"}
            data-plasmic-override={overrides.now}
            className={classNames(projectcss.all, sty.now)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4LxA9
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (() => {
                      const unpaidAmount =
                        $state.apiRequestForGetDetailsPayment.data.find(
                          obj => obj.user_center_id === $props.selectedCenter
                        )?.["Unpaid Amount"];
                      if (!unpaidAmount) return "";
                      const dividedAmount = unpaidAmount / 10;
                      const separatedAmount = dividedAmount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      return `${separatedAmount} تومان`;
                    })();
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
            {(() => {
              try {
                return $state.more === false;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return false;
                }
                throw e;
              }
            })() ? (
              <ChevronDownSvgIcon
                className={classNames(projectcss.all, sty.svg___4QpBx)}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateMore"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["more"]
                          },
                          operation: 0,
                          value: ($state.more = !$state.more)
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
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
                    $steps["updateMore"] != null &&
                    typeof $steps["updateMore"] === "object" &&
                    typeof $steps["updateMore"].then === "function"
                  ) {
                    $steps["updateMore"] = await $steps["updateMore"];
                  }
                }}
                role={"img"}
              />
            ) : null}
            {(() => {
              try {
                return $state.more === true;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return false;
                }
                throw e;
              }
            })() ? (
              <ChevronUpSvgIcon
                className={classNames(projectcss.all, sty.svg__jKySg)}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateMore"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["more"]
                          },
                          operation: 0,
                          value: ($state.more = !$state.more)
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
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
                    $steps["updateMore"] != null &&
                    typeof $steps["updateMore"] === "object" &&
                    typeof $steps["updateMore"].then === "function"
                  ) {
                    $steps["updateMore"] = await $steps["updateMore"];
                  }
                }}
                role={"img"}
              />
            ) : null}
          </div>
        </div>
        {(() => {
          try {
            return $state.more === true;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return false;
            }
            throw e;
          }
        })() ? (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rdnfG)}
          >
            <div
              data-plasmic-name={"all2"}
              data-plasmic-override={overrides.all2}
              className={classNames(projectcss.all, sty.all2)}
            >
              <div
                data-plasmic-name={"all"}
                data-plasmic-override={overrides.all}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.all
                )}
              >
                {"\u06a9\u0644 \u062f\u0631\u0622\u0645\u062f"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jhsXx
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (() => {
                        const CumulativeRevenue =
                          $state.apiRequestForGetDetailsPayment.data.find(
                            obj => obj.user_center_id === $props.selectedCenter
                          )?.["Cumulative Revenue"];
                        if (!CumulativeRevenue) return "";
                        const dividedAmount = (CumulativeRevenue / 10)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return `${dividedAmount} تومان`;
                      })();
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
            </div>
            <div
              data-plasmic-name={"paid"}
              data-plasmic-override={overrides.paid}
              className={classNames(projectcss.all, sty.paid)}
            >
              <div
                data-plasmic-name={"paid2"}
                data-plasmic-override={overrides.paid2}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paid2
                )}
              >
                {
                  "\u062f\u0631\u0622\u0645\u062f \u062a\u0633\u0648\u06cc\u0647 \u0634\u062f\u0647"
                }
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sr1Cx
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return (() => {
                        const PaidAmount =
                          $state.apiRequestForGetDetailsPayment.data.find(
                            obj => obj.user_center_id === $props.selectedCenter
                          )?.["Paid Amount"];
                        if (!PaidAmount) return "";
                        const dividedAmount = PaidAmount / 10;
                        const separatedAmount = dividedAmount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return `${separatedAmount} تومان`;
                      })();
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
            </div>
          </Stack__>
        ) : null}
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__feQhK)}
        >
          <Button
            data-plasmic-name={"setting"}
            data-plasmic-override={overrides.setting}
            children2={
              <Icon9Icon
                className={classNames(projectcss.all, sty.svg__cb3E3)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.setting)}
            onClick={async event => {
              const $steps = {};

              $steps["updateDialogOpen"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["dialog", "open"]
                      },
                      operation: 0,
                      value: true
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
                $steps["updateDialogOpen"] != null &&
                typeof $steps["updateDialogOpen"] === "object" &&
                typeof $steps["updateDialogOpen"].then === "function"
              ) {
                $steps["updateDialogOpen"] = await $steps["updateDialogOpen"];
              }
            }}
          />

          <Button
            data-plasmic-name={"requestToPay"}
            data-plasmic-override={overrides.requestToPay}
            children2={
              "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628"
            }
            className={classNames("__wab_instance", sty.requestToPay)}
          />

          <Dialog
            data-plasmic-name={"dialog"}
            data-plasmic-override={overrides.dialog}
            body={
              <React.Fragment>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xqJiq)}
                >
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return $state.apiRequest.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <div
                        data-plasmic-name={"ask"}
                        data-plasmic-override={overrides.ask}
                        className={classNames(projectcss.all, sty.ask)}
                        key={currentIndex}
                      >
                        {(() => {
                          const child$Props = {
                            className: classNames(
                              "__wab_instance",
                              sty.checkbox
                            ),
                            isChecked:
                              generateStateValueProp($state, [
                                "checkbox",
                                __plasmic_idx_0,
                                "isChecked"
                              ]) ?? false,
                            onChange: (...eventArgs) => {
                              generateStateOnChangeProp($state, [
                                "checkbox",
                                __plasmic_idx_0,
                                "isChecked"
                              ])(eventArgs[0]);
                            }
                          };

                          initializePlasmicStates(
                            $state,
                            [
                              {
                                name: "checkbox[].isChecked",
                                initFunc: ({ $props, $state, $queries }) =>
                                  (() => {
                                    try {
                                      return $state.apiRequestforGetUserPrefrence.data.list.some(
                                        item =>
                                          item.PaymentPreference ==
                                          currentItem.Kind
                                      );
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return [];
                                      }
                                      throw e;
                                    }
                                  })()
                              }
                            ],
                            [__plasmic_idx_0]
                          );
                          return (
                            <Checkbox
                              data-plasmic-name={"checkbox"}
                              data-plasmic-override={overrides.checkbox}
                              {...child$Props}
                            >
                              <React.Fragment>
                                {(() => {
                                  try {
                                    return currentItem.Kind === "Daily"
                                      ? "تسویه حساب خودکار روزانه"
                                      : "ثبت درخواست تسویه حساب";
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return "\u062b\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628";
                                    }
                                    throw e;
                                  }
                                })()}
                              </React.Fragment>
                            </Checkbox>
                          );
                        })()}
                      </div>
                    );
                  })}
                  <ApiRequest
                    data-plasmic-name={"apiRequest"}
                    data-plasmic-override={overrides.apiRequest}
                    className={classNames("__wab_instance", sty.apiRequest)}
                    errorDisplay={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__z9AHh
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
                          sty.text__zwNCr
                        )}
                      >
                        {"Loading..."}
                      </div>
                    }
                    method={"GET"}
                    onError={generateStateOnChangeProp($state, [
                      "apiRequest",
                      "error"
                    ])}
                    onLoading={generateStateOnChangeProp($state, [
                      "apiRequest",
                      "loading"
                    ])}
                    onSuccess={generateStateOnChangeProp($state, [
                      "apiRequest",
                      "data"
                    ])}
                    url={
                      "https://apigw.paziresh24.com/v1/n8n-nelson/webhook/kind-of-auto-payment"
                    }
                  />

                  <ApiRequest
                    data-plasmic-name={"apiRequestforGetUserPrefrence"}
                    data-plasmic-override={
                      overrides.apiRequestforGetUserPrefrence
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.apiRequestforGetUserPrefrence
                    )}
                    errorDisplay={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bD5Q
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
                          sty.text__j6UpV
                        )}
                      >
                        {"Loading..."}
                      </div>
                    }
                    method={"GET"}
                    onError={generateStateOnChangeProp($state, [
                      "apiRequestforGetUserPrefrence",
                      "error"
                    ])}
                    onLoading={generateStateOnChangeProp($state, [
                      "apiRequestforGetUserPrefrence",
                      "loading"
                    ])}
                    onSuccess={generateStateOnChangeProp($state, [
                      "apiRequestforGetUserPrefrence",
                      "data"
                    ])}
                    url={
                      "https://apigw.paziresh24.com/v1/n8n-nelson/webhook/active-payment-preference"
                    }
                  />
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__x4IL)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__lTutQ)}
                  >
                    <Button
                      children2={"\u062a\u0627\u06cc\u06cc\u062f"}
                      className={classNames(
                        "__wab_instance",
                        sty.button__z8Edl
                      )}
                      onClick={async event => {
                        const $steps = {};

                        $steps["invokeGlobalAction"] = true
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  "POST",
                                  "https://apigw.paziresh24.com/v1/n8n-nelson/webhook/active-auto-payment",
                                  undefined,
                                  undefined
                                ]
                              };
                              return $globalActions[
                                "Fragment.apiRequest"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                        if (
                          $steps["invokeGlobalAction"] != null &&
                          typeof $steps["invokeGlobalAction"] === "object" &&
                          typeof $steps["invokeGlobalAction"].then ===
                            "function"
                        ) {
                          $steps["invokeGlobalAction"] = await $steps[
                            "invokeGlobalAction"
                          ];
                        }
                      }}
                    />

                    <Button
                      children2={"\u0627\u0646\u0635\u0631\u0627\u0641"}
                      className={classNames(
                        "__wab_instance",
                        sty.button__aDszq
                      )}
                      color={"red"}
                      onClick={async event => {
                        const $steps = {};

                        $steps["updateDialogOpen"] = true
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["dialog", "open"]
                                },
                                operation: 0,
                                value: false
                              };
                              return (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
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
                          $steps["updateDialogOpen"] != null &&
                          typeof $steps["updateDialogOpen"] === "object" &&
                          typeof $steps["updateDialogOpen"].then === "function"
                        ) {
                          $steps["updateDialogOpen"] = await $steps[
                            "updateDialogOpen"
                          ];
                        }
                      }}
                    />
                  </Stack__>
                </div>
              </React.Fragment>
            }
            className={classNames("__wab_instance", sty.dialog)}
            onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
            open={generateStateValueProp($state, ["dialog", "open"])}
            title={
              "\u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0648\u0639 \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628"
            }
            trigger={null}
          />
        </Stack__>
      </div>
      <ApiRequest
        data-plasmic-name={"apiRequestForGetDetailsPayment"}
        data-plasmic-override={overrides.apiRequestForGetDetailsPayment}
        className={classNames(
          "__wab_instance",
          sty.apiRequestForGetDetailsPayment
        )}
        errorDisplay={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__l2O1V
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
              sty.text__s40NR
            )}
          >
            {"Loading..."}
          </div>
        }
        method={"GET"}
        onError={generateStateOnChangeProp($state, [
          "apiRequestForGetDetailsPayment",
          "error"
        ])}
        onLoading={generateStateOnChangeProp($state, [
          "apiRequestForGetDetailsPayment",
          "loading"
        ])}
        onSuccess={generateStateOnChangeProp($state, [
          "apiRequestForGetDetailsPayment",
          "data"
        ])}
        url={"https://apigw.paziresh24.com/v1/details-payment"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "now",
    "all2",
    "all",
    "paid",
    "paid2",
    "setting",
    "requestToPay",
    "dialog",
    "ask",
    "checkbox",
    "apiRequest",
    "apiRequestforGetUserPrefrence",
    "apiRequestForGetDetailsPayment"
  ],
  now: ["now"],
  all2: ["all2", "all"],
  all: ["all"],
  paid: ["paid", "paid2"],
  paid2: ["paid2"],
  setting: ["setting"],
  requestToPay: ["requestToPay"],
  dialog: [
    "dialog",
    "ask",
    "checkbox",
    "apiRequest",
    "apiRequestforGetUserPrefrence"
  ],
  ask: ["ask", "checkbox"],
  checkbox: ["checkbox"],
  apiRequest: ["apiRequest"],
  apiRequestforGetUserPrefrence: ["apiRequestforGetUserPrefrence"],
  apiRequestForGetDetailsPayment: ["apiRequestForGetDetailsPayment"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  now: "div";
  all2: "div";
  all: "div";
  paid: "div";
  paid2: "div";
  setting: typeof Button;
  requestToPay: typeof Button;
  dialog: typeof Dialog;
  ask: "div";
  checkbox: typeof Checkbox;
  apiRequest: typeof ApiRequest;
  apiRequestforGetUserPrefrence: typeof ApiRequest;
  apiRequestForGetDetailsPayment: typeof ApiRequest;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPayment__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPayment__VariantsArgs;
    args?: PlasmicPayment__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPayment__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPayment__ArgsType,
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
          internalArgPropNames: PlasmicPayment__ArgProps,
          internalVariantPropNames: PlasmicPayment__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPayment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPayment";
  } else {
    func.displayName = `PlasmicPayment.${nodeName}`;
  }
  return func;
}

export const PlasmicPayment = Object.assign(
  // Top-level PlasmicPayment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    now: makeNodeComponent("now"),
    all2: makeNodeComponent("all2"),
    all: makeNodeComponent("all"),
    paid: makeNodeComponent("paid"),
    paid2: makeNodeComponent("paid2"),
    setting: makeNodeComponent("setting"),
    requestToPay: makeNodeComponent("requestToPay"),
    dialog: makeNodeComponent("dialog"),
    ask: makeNodeComponent("ask"),
    checkbox: makeNodeComponent("checkbox"),
    apiRequest: makeNodeComponent("apiRequest"),
    apiRequestforGetUserPrefrence: makeNodeComponent(
      "apiRequestforGetUserPrefrence"
    ),
    apiRequestForGetDetailsPayment: makeNodeComponent(
      "apiRequestForGetDetailsPayment"
    ),

    // Metadata about props expected for PlasmicPayment
    internalVariantProps: PlasmicPayment__VariantProps,
    internalArgProps: PlasmicPayment__ArgProps
  }
);

export default PlasmicPayment;
/* prettier-ignore-end */
