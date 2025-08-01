/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: RPoKJwDI8F3t

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
import HoursDaysOfWeek from "../../HoursDaysOfWeek"; // plasmic-import: lSLy8Nehd6MM/component
import Button from "../../Button"; // plasmic-import: oVzoHzMf1TLl/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariantsfobTirRaixGf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fobTIRRaixGf/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicWorkhoursPage.module.css"; // plasmic-import: RPoKJwDI8F3t/css

import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicWorkhoursPage__VariantMembers = {};
export type PlasmicWorkhoursPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicWorkhoursPage__VariantsArgs;
export const PlasmicWorkhoursPage__VariantProps = new Array<VariantPropType>();

export type PlasmicWorkhoursPage__ArgsType = {};
type ArgPropType = keyof PlasmicWorkhoursPage__ArgsType;
export const PlasmicWorkhoursPage__ArgProps = new Array<ArgPropType>();

export type PlasmicWorkhoursPage__OverridesType = {
  workhoursPage?: Flex__<"div">;
  apIworkhours?: Flex__<typeof ApiRequest>;
  drCenters?: Flex__<typeof DrCenters>;
  hoursDaysOfWeek?: Flex__<typeof HoursDaysOfWeek>;
  vacation?: Flex__<"div">;
  button?: Flex__<typeof Button>;
  runCodeGtmMetrica?: Flex__<typeof SideEffect>;
  gtm?: Flex__<typeof Embed>;
};

export interface DefaultWorkhoursPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWorkhoursPage__RenderFunc(props: {
  variants: PlasmicWorkhoursPage__VariantsArgs;
  args: PlasmicWorkhoursPage__ArgsType;
  overrides: PlasmicWorkhoursPage__OverridesType;
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
        path: "drCenters.selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "centers",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "selectedCenter",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "all"
      },
      {
        path: "hoursDaysOfWeek.duration",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "speciality",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "apIworkhours.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apIworkhours"
      },
      {
        path: "apIworkhours.error",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apIworkhours"
      },
      {
        path: "apIworkhours.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "apIworkhours"
      },
      {
        path: "provider",
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfobTirRaixGf()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicWorkhoursPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicWorkhoursPage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicWorkhoursPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"workhoursPage"}
          data-plasmic-override={overrides.workhoursPage}
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
            sty.workhoursPage
          )}
          dir={"rtl"}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__d4Ycy)}
          >
            <ApiRequest
              data-plasmic-name={"apIworkhours"}
              data-plasmic-override={overrides.apIworkhours}
              className={classNames("__wab_instance", sty.apIworkhours)}
              errorDisplay={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dggG
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
                    sty.text__vTc3O
                  )}
                >
                  {"Loading..."}
                </div>
              }
              method={"GET"}
              onError={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "apIworkhours",
                  "error"
                ]).apply(null, eventArgs);
              }}
              onLoading={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "apIworkhours",
                  "loading"
                ]).apply(null, eventArgs);
              }}
              onSuccess={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "apIworkhours",
                  "data"
                ]).apply(null, eventArgs);

                (async data => {
                  const $steps = {};
                }).apply(null, eventArgs);
              }}
              ref={ref => {
                $refs["apIworkhours"] = ref;
              }}
              url={"https://api.paziresh24.com/V1/doctor/centers"}
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___9HgIy)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2TFhG
                )}
              >
                {"\u0633\u0627\u0639\u0627\u062a \u06a9\u0627\u0631\u06cc"}
              </div>
              <DrCenters
                data-plasmic-name={"drCenters"}
                data-plasmic-override={overrides.drCenters}
                centers={(() => {
                  try {
                    return $state.apIworkhours.data.data;
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
                hasAllOption={false}
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
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__lw8Cb)}>
              {(() => {
                try {
                  return $state.apIworkhours?.data?.data?.some(
                    center =>
                      center.user_center_id === $state.drCenters.selectedCenter
                  );
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
                <HoursDaysOfWeek
                  data-plasmic-name={"hoursDaysOfWeek"}
                  data-plasmic-override={overrides.hoursDaysOfWeek}
                  centerId={(() => {
                    try {
                      return $state.apIworkhours.data.data.find(
                        center =>
                          center.user_center_id ===
                          $state.drCenters.selectedCenter
                      ).id;
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
                  className={classNames("__wab_instance", sty.hoursDaysOfWeek)}
                  duration={generateStateValueProp($state, [
                    "hoursDaysOfWeek",
                    "duration"
                  ])}
                  onDurationChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "hoursDaysOfWeek",
                      "duration"
                    ]).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
                  }}
                  userCenterId={(() => {
                    try {
                      return $state.selectedCenter;
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
              ) : null}
            </div>
          </Stack__>
          {(() => {
            try {
              return (
                $state.apIworkhours.data.data.find(
                  item =>
                    item.user_center_id === $state.selectedCenter &&
                    item.id !== "5532" &&
                    item.type_id === 1
                ) !== undefined
              );
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
              data-plasmic-name={"vacation"}
              data-plasmic-override={overrides.vacation}
              hasGap={true}
              className={classNames(projectcss.all, sty.vacation)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___0YkBo)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__p3Plx
                  )}
                >
                  {
                    "\u0645\u062f\u06cc\u0631\u06cc\u062a \u062a\u0639\u0637\u06cc\u0644\u06cc \u0647\u0627"
                  }
                </div>
              </Stack__>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vKqZd
                )}
              >
                {
                  "\u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631 \u0631\u0648\u0632\u0647\u0627\u06cc \u062a\u0639\u0637\u06cc\u0644 \u0646\u0648\u0628\u062a\u200c\u062f\u0647\u06cc \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc \u0645\u0637\u0628 \u062e\u0648\u062f \u0631\u0627 \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f \u0648 \u0628\u0647 \u0628\u06cc\u0645\u0627\u0631\u0627\u0646 \u062f\u0631 \u0631\u0648\u0632\u0647\u0627\u06cc \u062a\u0639\u0637\u06cc\u0644 \u062f\u0631 \u0645\u0637\u0628 \u062e\u0648\u062f \u062e\u062f\u0645\u062a \u0627\u0631\u0627\u0626\u0647 \u062f\u0647\u06cc\u062f."
                }
              </div>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                children2={
                  "\u0645\u062f\u06cc\u0631\u06cc\u062a \u062a\u0639\u0637\u06cc\u0644\u06cc \u0647\u0627\u06cc \u0645\u0637\u0628"
                }
                className={classNames("__wab_instance", sty.button)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToHolidays"] = true
                    ? (() => {
                        const actionArgs = { destination: `/holidays/index` };
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
                    $steps["goToHolidays"] != null &&
                    typeof $steps["goToHolidays"] === "object" &&
                    typeof $steps["goToHolidays"].then === "function"
                  ) {
                    $steps["goToHolidays"] = await $steps["goToHolidays"];
                  }

                  $steps["invokeGlobalAction"] = true
                    ? (() => {
                        const actionArgs = { args: [] };
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
                    $steps["invokeGlobalAction"] = await $steps[
                      "invokeGlobalAction"
                    ];
                  }
                }}
              />
            </Stack__>
          ) : null}
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
                            var gtmNoScript =
                              document.createElement("noscript");
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
                            var metrikaScript =
                              document.createElement("script");
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  workhoursPage: [
    "workhoursPage",
    "apIworkhours",
    "drCenters",
    "hoursDaysOfWeek",
    "vacation",
    "button",
    "runCodeGtmMetrica",
    "gtm"
  ],
  apIworkhours: ["apIworkhours"],
  drCenters: ["drCenters"],
  hoursDaysOfWeek: ["hoursDaysOfWeek"],
  vacation: ["vacation", "button"],
  button: ["button"],
  runCodeGtmMetrica: ["runCodeGtmMetrica"],
  gtm: ["gtm"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  workhoursPage: "div";
  apIworkhours: typeof ApiRequest;
  drCenters: typeof DrCenters;
  hoursDaysOfWeek: typeof HoursDaysOfWeek;
  vacation: "div";
  button: typeof Button;
  runCodeGtmMetrica: typeof SideEffect;
  gtm: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWorkhoursPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWorkhoursPage__VariantsArgs;
    args?: PlasmicWorkhoursPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWorkhoursPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWorkhoursPage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicWorkhoursPage__ArgProps,
          internalVariantPropNames: PlasmicWorkhoursPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWorkhoursPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "workhoursPage") {
    func.displayName = "PlasmicWorkhoursPage";
  } else {
    func.displayName = `PlasmicWorkhoursPage.${nodeName}`;
  }
  return func;
}

export const PlasmicWorkhoursPage = Object.assign(
  // Top-level PlasmicWorkhoursPage renders the root element
  makeNodeComponent("workhoursPage"),
  {
    // Helper components rendering sub-elements
    apIworkhours: makeNodeComponent("apIworkhours"),
    drCenters: makeNodeComponent("drCenters"),
    hoursDaysOfWeek: makeNodeComponent("hoursDaysOfWeek"),
    vacation: makeNodeComponent("vacation"),
    button: makeNodeComponent("button"),
    runCodeGtmMetrica: makeNodeComponent("runCodeGtmMetrica"),
    gtm: makeNodeComponent("gtm"),

    // Metadata about props expected for PlasmicWorkhoursPage
    internalVariantProps: PlasmicWorkhoursPage__VariantProps,
    internalArgProps: PlasmicWorkhoursPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "ساعت کاری",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWorkhoursPage;
/* prettier-ignore-end */
