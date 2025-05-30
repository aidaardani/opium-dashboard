/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: s9QYwyQBTqhJ

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
import sty from "./PlasmicActiveOfficeBooking.module.css"; // plasmic-import: s9QYwyQBTqhJ/css

createPlasmicElementProxy;

export type PlasmicActiveOfficeBooking__VariantMembers = {
  officeBook: "officeBook";
  onlineBook: "onlineBook";
  selected: "selected";
};
export type PlasmicActiveOfficeBooking__VariantsArgs = {
  officeBook?: SingleBooleanChoiceArg<"officeBook">;
  onlineBook?: SingleBooleanChoiceArg<"onlineBook">;
  selected?: SingleBooleanChoiceArg<"selected">;
};
type VariantPropType = keyof PlasmicActiveOfficeBooking__VariantsArgs;
export const PlasmicActiveOfficeBooking__VariantProps =
  new Array<VariantPropType>("officeBook", "onlineBook", "selected");

export type PlasmicActiveOfficeBooking__ArgsType = { onselected?: () => void };
type ArgPropType = keyof PlasmicActiveOfficeBooking__ArgsType;
export const PlasmicActiveOfficeBooking__ArgProps = new Array<ArgPropType>(
  "onselected"
);

export type PlasmicActiveOfficeBooking__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultActiveOfficeBookingProps {
  onselected?: () => void;
  officeBook?: SingleBooleanChoiceArg<"officeBook">;
  onlineBook?: SingleBooleanChoiceArg<"onlineBook">;
  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicActiveOfficeBooking__RenderFunc(props: {
  variants: PlasmicActiveOfficeBooking__VariantsArgs;
  args: PlasmicActiveOfficeBooking__ArgsType;
  overrides: PlasmicActiveOfficeBooking__OverridesType;
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
        path: "officeBook",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.officeBook
      },
      {
        path: "onlineBook",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.onlineBook
      },
      {
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
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
        sty.root,
        {
          [sty.rootofficeBook]: hasVariant($state, "officeBook", "officeBook"),
          [sty.rootonlineBook]: hasVariant($state, "onlineBook", "onlineBook"),
          [sty.rootselected]: hasVariant($state, "selected", "selected")
        }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runOnselected"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onselected"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnselected"] != null &&
          typeof $steps["runOnselected"] === "object" &&
          typeof $steps["runOnselected"].then === "function"
        ) {
          $steps["runOnselected"] = await $steps["runOnselected"];
        }
      }}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textofficeBook]: hasVariant($state, "officeBook", "officeBook"),
          [sty.textonlineBook]: hasVariant($state, "onlineBook", "onlineBook")
        })}
      >
        {hasVariant($state, "onlineBook", "onlineBook") ? (
          <React.Fragment>
            {(() => {
              try {
                return "نوبت‌های آنلاین";
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
        ) : hasVariant($state, "officeBook", "officeBook") ? (
          <React.Fragment>
            {(() => {
              try {
                return " نوبت‌های حضوری ";
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
        ) : (
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700 }}
            >
              {
                "+ \u0641\u0639\u0627\u0644\u0633\u0627\u0632\u06cc \u0646\u0648\u0628\u062a \u062f\u0647\u06cc \u0645\u0637\u0628"
              }
            </span>
          </React.Fragment>
        )}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActiveOfficeBooking__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActiveOfficeBooking__VariantsArgs;
    args?: PlasmicActiveOfficeBooking__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActiveOfficeBooking__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicActiveOfficeBooking__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicActiveOfficeBooking__ArgProps,
          internalVariantPropNames: PlasmicActiveOfficeBooking__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicActiveOfficeBooking__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActiveOfficeBooking";
  } else {
    func.displayName = `PlasmicActiveOfficeBooking.${nodeName}`;
  }
  return func;
}

export const PlasmicActiveOfficeBooking = Object.assign(
  // Top-level PlasmicActiveOfficeBooking renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicActiveOfficeBooking
    internalVariantProps: PlasmicActiveOfficeBooking__VariantProps,
    internalArgProps: PlasmicActiveOfficeBooking__ArgProps
  }
);

export default PlasmicActiveOfficeBooking;
/* prettier-ignore-end */
