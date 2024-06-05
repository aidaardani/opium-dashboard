// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: IkLsGKQP_uPj

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

import { Popover } from "@/fragment/components/popover"; // plasmic-import: umJXC-fyxDQn/codeComponent
import DrCenter from "../../DrCenter"; // plasmic-import: Y5f_I7uzx8ZQ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_fragment_design_system_css from "../fragment_design_system/plasmic.module.css"; // plasmic-import: h9Dbk9ygddw7UVEq1NNhKi/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9g1e5LLLDS4TGJiaFCSEyH/projectcss
import sty from "./PlasmicDrCenters.module.css"; // plasmic-import: IkLsGKQP_uPj/css

import ChevronDownIcon from "../fragment_icons/icons/PlasmicIcon__ChevronDown"; // plasmic-import: aC_QFogxt1Ko/icon
import ChevronUpIcon from "../fragment_icons/icons/PlasmicIcon__ChevronUp"; // plasmic-import: YXreB8gS3SjV/icon

createPlasmicElementProxy;

export type PlasmicDrCenters__VariantMembers = {};
export type PlasmicDrCenters__VariantsArgs = {};
type VariantPropType = keyof PlasmicDrCenters__VariantsArgs;
export const PlasmicDrCenters__VariantProps = new Array<VariantPropType>();

export type PlasmicDrCenters__ArgsType = {
  centers?: any;
  onSelectedCenterChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicDrCenters__ArgsType;
export const PlasmicDrCenters__ArgProps = new Array<ArgPropType>(
  "centers",
  "onSelectedCenterChange"
);

export type PlasmicDrCenters__OverridesType = {
  root?: Flex__<"div">;
  fragmentPopover?: Flex__<typeof Popover>;
  text?: Flex__<"div">;
};

export interface DefaultDrCentersProps {
  centers?: any;
  onSelectedCenterChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDrCenters__RenderFunc(props: {
  variants: PlasmicDrCenters__VariantsArgs;
  args: PlasmicDrCenters__ArgsType;
  overrides: PlasmicDrCenters__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "selectedCenter",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "all",

        onChangeProp: "onSelectedCenterChange"
      },
      {
        path: "fragmentPopover.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "fragmentPopover"
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
        sty.root
      )}
      dr={"rtl"}
    >
      <Popover
        data-plasmic-name={"fragmentPopover"}
        data-plasmic-override={overrides.fragmentPopover}
        className={classNames("__wab_instance", sty.fragmentPopover)}
        content={
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jC2P)}
          >
            <DrCenter
              className={classNames("__wab_instance", sty.drCenter__ljbmU)}
              name={"\u06a9\u0644 \u0646\u0648\u0628\u062a\u200c\u0647\u0627"}
              officeBook={undefined}
              onlineBook={undefined}
              onselected={async () => {
                const $steps = {};

                $steps["updateSelectedCenter"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["selectedCenter"]
                        },
                        operation: 0,
                        value: "all"
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

                $steps["updateSelectedCenter2"] = true
                  ? (() => {
                      const actionArgs = {
                        tplRef: "fragmentPopover",
                        action: "close"
                      };
                      return (({ tplRef, action, args }) => {
                        return $refs?.[tplRef]?.[action]?.(...(args ?? []));
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateSelectedCenter2"] != null &&
                  typeof $steps["updateSelectedCenter2"] === "object" &&
                  typeof $steps["updateSelectedCenter2"].then === "function"
                ) {
                  $steps["updateSelectedCenter2"] = await $steps[
                    "updateSelectedCenter2"
                  ];
                }
              }}
              selected={(() => {
                try {
                  return $state.selectedCenter == "all";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })()}
            />

            {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
              (() => {
                try {
                  return $props.centers;
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
                <DrCenter
                  className={classNames("__wab_instance", sty.drCenter__j931)}
                  key={currentIndex}
                  name={(() => {
                    try {
                      return currentItem.name;
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
                  officeBook={(() => {
                    try {
                      return (
                        currentItem.name.includes("مطب") &&
                        currentItem.type_id === 1 &&
                        currentItem.id !== "5532"
                      );
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()}
                  onlineBook={(() => {
                    try {
                      return currentItem.id === "5532";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()}
                  onselected={async () => {
                    const $steps = {};

                    $steps["updateSelectedCenter"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["selectedCenter"]
                            },
                            operation: 0,
                            value: currentItem.id
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

                    $steps["updateSelectedCenter2"] = true
                      ? (() => {
                          const actionArgs = {
                            tplRef: "fragmentPopover",
                            action: "close"
                          };
                          return (({ tplRef, action, args }) => {
                            return $refs?.[tplRef]?.[action]?.(...(args ?? []));
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateSelectedCenter2"] != null &&
                      typeof $steps["updateSelectedCenter2"] === "object" &&
                      typeof $steps["updateSelectedCenter2"].then === "function"
                    ) {
                      $steps["updateSelectedCenter2"] = await $steps[
                        "updateSelectedCenter2"
                      ];
                    }
                  }}
                  selected={(() => {
                    try {
                      return $state.selectedCenter == currentItem.id;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })()}
                />
              );
            })}
          </Stack__>
        }
        onOpenChange={generateStateOnChangeProp($state, [
          "fragmentPopover",
          "open"
        ])}
        open={generateStateValueProp($state, ["fragmentPopover", "open"])}
        ref={ref => {
          $refs["fragmentPopover"] = ref;
        }}
        trigger={
          <div className={classNames(projectcss.all, sty.freeBox__cxKPj)}>
            <div
              className={classNames(projectcss.all, sty.freeBox__zu23P)}
              dr={"rtl"}
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
                <React.Fragment>
                  {(() => {
                    try {
                      return (() => {
                        if ($state.selectedCenter == "all") return "کل نوبت‌ها";
                        if ($state.selectedCenter == "5532")
                          return "نوبت‌های آنلاین";
                        if (
                          $state.selectedCenter !== "5532" &&
                          $props.centers.find(
                            center => center.id == $state.selectedCenter
                          ).type_id == 1
                        )
                          return "نوبت‌های حضوری";
                      })();
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "\u06a9\u0644 \u0646\u0648\u0628\u062a\u200c\u0647\u0627";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
              {(() => {
                try {
                  return $state.fragmentPopover.open === false;
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
                <ChevronDownIcon
                  className={classNames(projectcss.all, sty.svg__cx4Z5)}
                  role={"img"}
                />
              ) : null}
              {(() => {
                try {
                  return $state.fragmentPopover.open === true;
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
                <ChevronUpIcon
                  className={classNames(projectcss.all, sty.svg__ie7)}
                  role={"img"}
                />
              ) : null}
            </div>
          </div>
        }
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "fragmentPopover", "text"],
  fragmentPopover: ["fragmentPopover", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  fragmentPopover: typeof Popover;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDrCenters__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDrCenters__VariantsArgs;
    args?: PlasmicDrCenters__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDrCenters__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDrCenters__ArgsType,
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
          internalArgPropNames: PlasmicDrCenters__ArgProps,
          internalVariantPropNames: PlasmicDrCenters__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrCenters__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDrCenters";
  } else {
    func.displayName = `PlasmicDrCenters.${nodeName}`;
  }
  return func;
}

export const PlasmicDrCenters = Object.assign(
  // Top-level PlasmicDrCenters renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fragmentPopover: makeNodeComponent("fragmentPopover"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDrCenters
    internalVariantProps: PlasmicDrCenters__VariantProps,
    internalArgProps: PlasmicDrCenters__ArgProps
  }
);

export default PlasmicDrCenters;
/* prettier-ignore-end */