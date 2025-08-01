/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: rR-1UY0gBJU1

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
import sty from "./PlasmicBookHistory.module.css"; // plasmic-import: rR-1UY0gBJU1/css

import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: WiLor5jWTYZW/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: cEnI6Xs2nrZq/icon

createPlasmicElementProxy;

export type PlasmicBookHistory__VariantMembers = {};
export type PlasmicBookHistory__VariantsArgs = {};
type VariantPropType = keyof PlasmicBookHistory__VariantsArgs;
export const PlasmicBookHistory__VariantProps = new Array<VariantPropType>();

export type PlasmicBookHistory__ArgsType = {
  listOfBookHistory?: any;
  date?: string;
  openHistory?: boolean;
  onOpenHistoryChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicBookHistory__ArgsType;
export const PlasmicBookHistory__ArgProps = new Array<ArgPropType>(
  "listOfBookHistory",
  "date",
  "openHistory",
  "onOpenHistoryChange"
);

export type PlasmicBookHistory__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultBookHistoryProps {
  listOfBookHistory?: any;
  date?: string;
  openHistory?: boolean;
  onOpenHistoryChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBookHistory__RenderFunc(props: {
  variants: PlasmicBookHistory__VariantsArgs;
  args: PlasmicBookHistory__ArgsType;
  overrides: PlasmicBookHistory__OverridesType;
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
        path: "openHistory",
        type: "writable",
        variableType: "boolean",

        valueProp: "openHistory",
        onChangeProp: "onOpenHistoryChange"
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__opJv9)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__oouQj
          )}
        >
          {
            "\u0633\u0648\u0627\u0628\u0642 \u0645\u0631\u0627\u062c\u0639\u0647"
          }
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__w8JD)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5Eyf5
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (() => {
                    const filteredList = $props.listOfBookHistory.filter(
                      item => item.formattedDate < $props.date
                    );
                    const latestFormattedDate = filteredList.reduce(
                      (prev, current) =>
                        prev.formattedDate > current.formattedDate
                          ? prev
                          : current
                    ).formattedDate;
                    const gregorianDate = new Date(
                      parseInt(latestFormattedDate) * 1000
                    );
                    const persianDate = new Intl.DateTimeFormat("fa-IR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    }).format(gregorianDate);
                    return persianDate;
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
              return !$state.openHistory;
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
            <Icon24Icon
              className={classNames(projectcss.all, sty.svg__qn5Rs)}
              onClick={async event => {
                const $steps = {};

                $steps["updateOpenHistory"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["openHistory"]
                        },
                        operation: 4
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

                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateOpenHistory"] != null &&
                  typeof $steps["updateOpenHistory"] === "object" &&
                  typeof $steps["updateOpenHistory"].then === "function"
                ) {
                  $steps["updateOpenHistory"] = await $steps[
                    "updateOpenHistory"
                  ];
                }
              }}
              role={"img"}
            />
          ) : null}
          {(() => {
            try {
              return $state.openHistory;
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
            <ChevronDownIcon
              className={classNames(projectcss.all, sty.svg__waZqr)}
              onClick={async event => {
                const $steps = {};

                $steps["updateOpenHistory"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["openHistory"]
                        },
                        operation: 4
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

                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateOpenHistory"] != null &&
                  typeof $steps["updateOpenHistory"] === "object" &&
                  typeof $steps["updateOpenHistory"].then === "function"
                ) {
                  $steps["updateOpenHistory"] = await $steps[
                    "updateOpenHistory"
                  ];
                }
              }}
              role={"img"}
            />
          ) : null}
        </Stack__>
      </Stack__>
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
  PlasmicBookHistory__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBookHistory__VariantsArgs;
    args?: PlasmicBookHistory__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBookHistory__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBookHistory__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBookHistory__ArgProps,
          internalVariantPropNames: PlasmicBookHistory__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBookHistory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBookHistory";
  } else {
    func.displayName = `PlasmicBookHistory.${nodeName}`;
  }
  return func;
}

export const PlasmicBookHistory = Object.assign(
  // Top-level PlasmicBookHistory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBookHistory
    internalVariantProps: PlasmicBookHistory__VariantProps,
    internalArgProps: PlasmicBookHistory__ArgProps
  }
);

export default PlasmicBookHistory;
/* prettier-ignore-end */
