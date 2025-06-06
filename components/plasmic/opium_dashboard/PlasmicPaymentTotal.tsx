/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: mbDXrFsrMCB0

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
import DrCenters from "../../DrCenters"; // plasmic-import: IkLsGKQP_uPj/component
import PaymentSetting from "../../PaymentSetting"; // plasmic-import: u5OpNiUAc1Uk/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsfobTirRaixGf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fobTIRRaixGf/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicPaymentTotal.module.css"; // plasmic-import: mbDXrFsrMCB0/css

createPlasmicElementProxy;

export type PlasmicPaymentTotal__VariantMembers = {
  active: "active";
};
export type PlasmicPaymentTotal__VariantsArgs = {
  active?: SingleBooleanChoiceArg<"active">;
};
type VariantPropType = keyof PlasmicPaymentTotal__VariantsArgs;
export const PlasmicPaymentTotal__VariantProps = new Array<VariantPropType>(
  "active"
);

export type PlasmicPaymentTotal__ArgsType = { userId?: any };
type ArgPropType = keyof PlasmicPaymentTotal__ArgsType;
export const PlasmicPaymentTotal__ArgProps = new Array<ArgPropType>("userId");

export type PlasmicPaymentTotal__OverridesType = {
  payment?: Flex__<"div">;
  center?: Flex__<"div">;
  apiRequest?: Flex__<typeof ApiRequest>;
  drCenters?: Flex__<typeof DrCenters>;
  paymentSetting?: Flex__<typeof PaymentSetting>;
  runCodeGtmMetrica?: Flex__<typeof SideEffect>;
  gtm?: Flex__<typeof Embed>;
};

export interface DefaultPaymentTotalProps {
  userId?: any;
  active?: SingleBooleanChoiceArg<"active">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPaymentTotal__RenderFunc(props: {
  variants: PlasmicPaymentTotal__VariantsArgs;
  args: PlasmicPaymentTotal__ArgsType;
  overrides: PlasmicPaymentTotal__OverridesType;
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
        path: "drCenters.selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "all"
      },
      {
        path: "selectedCenterInAddPatient",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "holiday",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "dontShowOnlineVisit",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "userCenterService",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "active",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.active
      },
      {
        path: "usercenterserviceDeactive",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "countOfBook",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "loadingonoff",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "settingBookingPayment",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "apiRequest.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "apiRequest.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
      },
      {
        path: "apiRequest.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apiRequest"
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
      data-plasmic-name={"payment"}
      data-plasmic-override={overrides.payment}
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
        sty.payment,
        { [sty.paymentactive]: hasVariant($state, "active", "active") }
      )}
      dir={"rtl"}
    >
      <div
        data-plasmic-name={"center"}
        data-plasmic-override={overrides.center}
        className={classNames(projectcss.all, sty.center)}
      >
        <ApiRequest
          data-plasmic-name={"apiRequest"}
          data-plasmic-override={overrides.apiRequest}
          className={classNames("__wab_instance", sty.apiRequest)}
          errorDisplay={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tcsPd
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
                sty.text__idgKc
              )}
            >
              {"Loading..."}
            </div>
          }
          method={"GET"}
          onError={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["apiRequest", "error"]).apply(
              null,
              eventArgs
            );
          }}
          onLoading={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["apiRequest", "loading"]).apply(
              null,
              eventArgs
            );
          }}
          onSuccess={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["apiRequest", "data"]).apply(
              null,
              eventArgs
            );
          }}
          ref={ref => {
            $refs["apiRequest"] = ref;
          }}
          url={"https://api.paziresh24.com/V1/doctor/centers"}
        />

        <div className={classNames(projectcss.all, sty.freeBox__uhLc)}>
          <div className={classNames(projectcss.all, sty.freeBox__cxv0I)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8L9Do
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {
                    "\u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0648\u0639 \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628"
                  }
                </span>
              </React.Fragment>
            </div>
            <DrCenters
              data-plasmic-name={"drCenters"}
              data-plasmic-override={overrides.drCenters}
              centers={(() => {
                try {
                  return $state.apiRequest.data.data;
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
              className={classNames("__wab_instance", sty.drCenters)}
              hasAllOption={(() => {
                try {
                  return false;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return false;
                  }
                  throw e;
                }
              })()}
              onSelectedCenterChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "drCenters",
                  "selectedCenter"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }

                (async val => {
                  const $steps = {};

                  $steps["updateSelectedCenter"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["selectedCenter"]
                          },
                          operation: 0,
                          value: $state.drCenters.selectedCenter
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
                    $steps["updateSelectedCenter"] != null &&
                    typeof $steps["updateSelectedCenter"] === "object" &&
                    typeof $steps["updateSelectedCenter"].then === "function"
                  ) {
                    $steps["updateSelectedCenter"] = await $steps[
                      "updateSelectedCenter"
                    ];
                  }
                }).apply(null, eventArgs);
              }}
            />
          </div>
          <PaymentSetting
            data-plasmic-name={"paymentSetting"}
            data-plasmic-override={overrides.paymentSetting}
            center={(() => {
              try {
                return $state.apiRequest.data.data;
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
            className={classNames("__wab_instance", sty.paymentSetting)}
            selectedCenter={(() => {
              try {
                return (
                  $state.apiRequest.data.data.find(
                    center => center.user_center_id == $state.selectedCenter
                  )?.user_center_id ??
                  $state.apiRequest.data.data.find(
                    item => item.is_active_booking === true
                  ).user_center_id
                );
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
            userId={(() => {
              try {
                return $props.userId;
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
        </div>
      </div>
      <SideEffect
        data-plasmic-name={"runCodeGtmMetrica"}
        data-plasmic-override={overrides.runCodeGtmMetrica}
        className={classNames("__wab_instance", sty.runCodeGtmMetrica)}
        onMount={async () => {
          const $steps = {};

          $steps["runCode"] = true
            ? (() => {
                const actionArgs = {
                  customFunction: async () => {
                    return (() => {
                      function loadGTM() {
                        var gtmScript = document.createElement("script");
                        gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P5RPLDP');`;
                        document.head.appendChild(gtmScript);
                        var gtmNoScript = document.createElement("noscript");
                        gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5RPLDP"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
                        document.body.insertBefore(
                          gtmNoScript,
                          document.body.firstChild
                        );
                      }
                      return loadGTM();
                    })();
                  }
                };
                return (({ customFunction }) => {
                  return customFunction();
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["runCode"] != null &&
            typeof $steps["runCode"] === "object" &&
            typeof $steps["runCode"].then === "function"
          ) {
            $steps["runCode"] = await $steps["runCode"];
          }

          $steps["loadMetrica"] = true
            ? (() => {
                const actionArgs = {
                  customFunction: async () => {
                    return (() => {
                      function loadMetrika() {
                        var metrikaScript = document.createElement("script");
                        metrikaScript.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(98277236, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });`;
                        document.head.appendChild(metrikaScript);
                        var metrikaNoScript =
                          document.createElement("noscript");
                        metrikaNoScript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/98277236" style="position:absolute; left:-9999px;" alt="" /></div>`;
                        document.body.insertBefore(
                          metrikaNoScript,
                          document.body.firstChild
                        );
                      }
                      return loadMetrika();
                    })();
                  }
                };
                return (({ customFunction }) => {
                  return customFunction();
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["loadMetrica"] != null &&
            typeof $steps["loadMetrica"] === "object" &&
            typeof $steps["loadMetrica"].then === "function"
          ) {
            $steps["loadMetrica"] = await $steps["loadMetrica"];
          }
        }}
      />

      <Embed
        data-plasmic-name={"gtm"}
        data-plasmic-override={overrides.gtm}
        className={classNames("__wab_instance", sty.gtm)}
        code={
          '\n<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5RPLDP"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->\n\n<!-- Yandex.Metrika counter -->\n<script type="text/javascript" >\n   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();\n   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n   ym(98277236, "init", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true\n   });\n</script>\n<noscript><div><img src="https://mc.yandex.ru/watch/98277236" style="position:absolute; left:-9999px;" alt="" /></div></noscript>\n<!-- /Yandex.Metrika counter -->'
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  payment: [
    "payment",
    "center",
    "apiRequest",
    "drCenters",
    "paymentSetting",
    "runCodeGtmMetrica",
    "gtm"
  ],
  center: ["center", "apiRequest", "drCenters", "paymentSetting"],
  apiRequest: ["apiRequest"],
  drCenters: ["drCenters"],
  paymentSetting: ["paymentSetting"],
  runCodeGtmMetrica: ["runCodeGtmMetrica"],
  gtm: ["gtm"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  payment: "div";
  center: "div";
  apiRequest: typeof ApiRequest;
  drCenters: typeof DrCenters;
  paymentSetting: typeof PaymentSetting;
  runCodeGtmMetrica: typeof SideEffect;
  gtm: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPaymentTotal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPaymentTotal__VariantsArgs;
    args?: PlasmicPaymentTotal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPaymentTotal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPaymentTotal__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPaymentTotal__ArgProps,
          internalVariantPropNames: PlasmicPaymentTotal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPaymentTotal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "payment") {
    func.displayName = "PlasmicPaymentTotal";
  } else {
    func.displayName = `PlasmicPaymentTotal.${nodeName}`;
  }
  return func;
}

export const PlasmicPaymentTotal = Object.assign(
  // Top-level PlasmicPaymentTotal renders the root element
  makeNodeComponent("payment"),
  {
    // Helper components rendering sub-elements
    center: makeNodeComponent("center"),
    apiRequest: makeNodeComponent("apiRequest"),
    drCenters: makeNodeComponent("drCenters"),
    paymentSetting: makeNodeComponent("paymentSetting"),
    runCodeGtmMetrica: makeNodeComponent("runCodeGtmMetrica"),
    gtm: makeNodeComponent("gtm"),

    // Metadata about props expected for PlasmicPaymentTotal
    internalVariantProps: PlasmicPaymentTotal__VariantProps,
    internalArgProps: PlasmicPaymentTotal__ArgProps
  }
);

export default PlasmicPaymentTotal;
/* prettier-ignore-end */
