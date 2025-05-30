/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: 3W2JvuCUpZaO

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

import ActivationProcess from "../../ActivationProcess"; // plasmic-import: 1sYr9T24RxmQ/component
import ActivationConsultCost2 from "../../ActivationConsultCost2"; // plasmic-import: nfu3aryCX9a4/component
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicActivationConsultCost.module.css"; // plasmic-import: 3W2JvuCUpZaO/css

createPlasmicElementProxy;

export type PlasmicActivationConsultCost__VariantMembers = {};
export type PlasmicActivationConsultCost__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivationConsultCost__VariantsArgs;
export const PlasmicActivationConsultCost__VariantProps =
  new Array<VariantPropType>();

export type PlasmicActivationConsultCost__ArgsType = {};
type ArgPropType = keyof PlasmicActivationConsultCost__ArgsType;
export const PlasmicActivationConsultCost__ArgProps = new Array<ArgPropType>();

export type PlasmicActivationConsultCost__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<"div">;
  text?: Flex__<"div">;
  activationProcess?: Flex__<typeof ActivationProcess>;
  activationConsultCost2?: Flex__<typeof ActivationConsultCost2>;
  sideEffect?: Flex__<typeof SideEffect>;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultActivationConsultCostProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActivationConsultCost__RenderFunc(props: {
  variants: PlasmicActivationConsultCost__VariantsArgs;
  args: PlasmicActivationConsultCost__ArgsType;
  overrides: PlasmicActivationConsultCost__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">
          {PlasmicActivationConsultCost.pageMetadata.title}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicActivationConsultCost.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicActivationConsultCost.pageMetadata.title}
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
            plasmic_plasmic_rich_components_css.plasmic_tokens,
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
              {
                "\u0645\u0628\u0644\u063a \u0648\u06cc\u0632\u06cc\u062a \u0622\u0646\u0644\u0627\u06cc\u0646"
              }
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__vOfvK)}>
            <div className={classNames(projectcss.all, sty.freeBox__sgtiQ)}>
              <ActivationProcess
                data-plasmic-name={"activationProcess"}
                data-plasmic-override={overrides.activationProcess}
                className={classNames("__wab_instance", sty.activationProcess)}
                isConsult={true}
                step={4}
              />
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__hYLfr)}>
              <ActivationConsultCost2
                data-plasmic-name={"activationConsultCost2"}
                data-plasmic-override={overrides.activationConsultCost2}
                channels={(() => {
                  try {
                    return $ctx.query.channels;
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
                  sty.activationConsultCost2
                )}
                userId={(() => {
                  try {
                    return $ctx.query.userId;
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
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
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

              $steps["loadMetrika"] = true
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
                $steps["loadMetrika"] != null &&
                typeof $steps["loadMetrika"] === "object" &&
                typeof $steps["loadMetrika"].then === "function"
              ) {
                $steps["loadMetrika"] = await $steps["loadMetrika"];
              }

              $steps["sentEvent"] = true
                ? (() => {
                    const actionArgs = {
                      args: [
                        (() => {
                          try {
                            return (() => {
                              const userId =
                                $ctx.query.userId ||
                                localStorage.getItem("userId");
                              if ($ctx.query.userId) {
                                localStorage.setItem(
                                  "userId",
                                  $ctx.query.userId
                                );
                              }
                              return {
                                event_group: "activation-page",
                                data: {
                                  userId: userId,
                                  pagePath: window.location.href
                                },
                                event_type: "load-page-consult-cost"
                              };
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
                      ]
                    };
                    return $globalActions["Splunk.sendLog"]?.apply(null, [
                      ...actionArgs.args
                    ]);
                  })()
                : undefined;
              if (
                $steps["sentEvent"] != null &&
                typeof $steps["sentEvent"] === "object" &&
                typeof $steps["sentEvent"].then === "function"
              ) {
                $steps["sentEvent"] = await $steps["sentEvent"];
              }
            }}
          />

          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
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
  root: [
    "root",
    "header",
    "text",
    "activationProcess",
    "activationConsultCost2",
    "sideEffect",
    "embedHtml"
  ],
  header: ["header", "text"],
  text: ["text"],
  activationProcess: ["activationProcess"],
  activationConsultCost2: ["activationConsultCost2"],
  sideEffect: ["sideEffect"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  text: "div";
  activationProcess: typeof ActivationProcess;
  activationConsultCost2: typeof ActivationConsultCost2;
  sideEffect: typeof SideEffect;
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivationConsultCost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivationConsultCost__VariantsArgs;
    args?: PlasmicActivationConsultCost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivationConsultCost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActivationConsultCost__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicActivationConsultCost__ArgProps,
          internalVariantPropNames: PlasmicActivationConsultCost__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActivationConsultCost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivationConsultCost";
  } else {
    func.displayName = `PlasmicActivationConsultCost.${nodeName}`;
  }
  return func;
}

export const PlasmicActivationConsultCost = Object.assign(
  // Top-level PlasmicActivationConsultCost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    text: makeNodeComponent("text"),
    activationProcess: makeNodeComponent("activationProcess"),
    activationConsultCost2: makeNodeComponent("activationConsultCost2"),
    sideEffect: makeNodeComponent("sideEffect"),
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicActivationConsultCost
    internalVariantProps: PlasmicActivationConsultCost__VariantProps,
    internalArgProps: PlasmicActivationConsultCost__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "مبلغ بیعانه",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicActivationConsultCost;
/* prettier-ignore-end */
