/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9g1e5LLLDS4TGJiaFCSEyH
// Component: JABa_xxikfr0

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
import sty from "./PlasmicProfileChannelsItem.module.css"; // plasmic-import: JABa_xxikfr0/css

import EitaaIcon from "../fragment_icons/icons/PlasmicIcon__Eitaa"; // plasmic-import: qxWwW7vbw7na/icon
import WhatsappIcon from "../fragment_icons/icons/PlasmicIcon__Whatsapp"; // plasmic-import: oob3UzcKBsd_/icon
import ChevronRightIcon from "../fragment_icons/icons/PlasmicIcon__ChevronRight"; // plasmic-import: GHdF3hS-oP_3/icon
import ChevronLeftIcon from "../fragment_icons/icons/PlasmicIcon__ChevronLeft"; // plasmic-import: r9Upp9NbiZkf/icon

createPlasmicElementProxy;

export type PlasmicProfileChannelsItem__VariantMembers = {
  noUserName: "noUserName";
};
export type PlasmicProfileChannelsItem__VariantsArgs = {
  noUserName?: SingleBooleanChoiceArg<"noUserName">;
};
type VariantPropType = keyof PlasmicProfileChannelsItem__VariantsArgs;
export const PlasmicProfileChannelsItem__VariantProps =
  new Array<VariantPropType>("noUserName");

export type PlasmicProfileChannelsItem__ArgsType = {
  numberValue2?: string;
  onNumberValueChange2?: (val: string) => void;
  usernameValue?: string;
  onUsernameValueChange?: (val: string) => void;
  type?: string;
  channelName?: string;
  guidUrl?: string;
};
type ArgPropType = keyof PlasmicProfileChannelsItem__ArgsType;
export const PlasmicProfileChannelsItem__ArgProps = new Array<ArgPropType>(
  "numberValue2",
  "onNumberValueChange2",
  "usernameValue",
  "onUsernameValueChange",
  "type",
  "channelName",
  "guidUrl"
);

export type PlasmicProfileChannelsItem__OverridesType = {
  root?: Flex__<"div">;
  number?: Flex__<typeof Input>;
  username?: Flex__<typeof Input>;
  button?: Flex__<typeof Button>;
};

export interface DefaultProfileChannelsItemProps {
  numberValue2?: string;
  onNumberValueChange2?: (val: string) => void;
  usernameValue?: string;
  onUsernameValueChange?: (val: string) => void;
  type?: string;
  channelName?: string;
  guidUrl?: string;
  noUserName?: SingleBooleanChoiceArg<"noUserName">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfileChannelsItem__RenderFunc(props: {
  variants: PlasmicProfileChannelsItem__VariantsArgs;
  args: PlasmicProfileChannelsItem__ArgsType;
  overrides: PlasmicProfileChannelsItem__OverridesType;
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
        path: "number.value",
        type: "writable",
        variableType: "text",

        valueProp: "numberValue2",
        onChangeProp: "onNumberValueChange2"
      },
      {
        path: "username.value",
        type: "writable",
        variableType: "text",

        valueProp: "usernameValue",
        onChangeProp: "onUsernameValueChange"
      },
      {
        path: "noUserName",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noUserName
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__u6DHm)}
      >
        {(() => {
          try {
            return $props.type === "eitaa";
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
          <EitaaIcon
            className={classNames(projectcss.all, sty.svg__gIdMc)}
            role={"img"}
          />
        ) : null}
        {(() => {
          try {
            return $props.type == "whatsapp";
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
          <WhatsappIcon
            className={classNames(projectcss.all, sty.svg__o6Pq9)}
            role={"img"}
          />
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sNwbV
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.channelName;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "\u0627\u06cc\u062a\u0627";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__aaHpl, {
          [sty.freeBoxnoUserName__aaHpl0NTyP]: hasVariant(
            $state,
            "noUserName",
            "noUserName"
          )
        })}
      >
        <Input
          data-plasmic-name={"number"}
          data-plasmic-override={overrides.number}
          className={classNames("__wab_instance", sty.number)}
          onChange={async (...eventArgs: any) => {
            generateStateOnChangeProp($state, ["number", "value"]).apply(
              null,
              eventArgs
            );
          }}
          placeholder={
            "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"
          }
          type={"text"}
          value={generateStateValueProp($state, ["number", "value"])}
        />

        {(hasVariant($state, "noUserName", "noUserName") ? false : true) ? (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__v832N, {
              [sty.freeBoxnoUserName__v832N0NTyP]: hasVariant(
                $state,
                "noUserName",
                "noUserName"
              )
            })}
          >
            <Input
              data-plasmic-name={"username"}
              data-plasmic-override={overrides.username}
              className={classNames("__wab_instance", sty.username)}
              onChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, ["username", "value"]).apply(
                  null,
                  eventArgs
                );
              }}
              placeholder={(() => {
                try {
                  return `نام کاربری ${$props.channelName}`;
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
              type={"text"}
              value={generateStateValueProp($state, ["username", "value"])}
            />

            {(() => {
              try {
                return !!$props.guidUrl;
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
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                children2={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hzwft,
                      {
                        [sty.textnoUserName__hzwft0NTyP]: hasVariant(
                          $state,
                          "noUserName",
                          "noUserName"
                        )
                      }
                    )}
                  >
                    {"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc"}
                  </div>
                }
                className={classNames("__wab_instance", sty.button, {
                  [sty.buttonnoUserName]: hasVariant(
                    $state,
                    "noUserName",
                    "noUserName"
                  )
                })}
                link={(() => {
                  try {
                    return $props.guidUrl;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "https://opium-dashboard.paziresh24.com/help-eitaa/";
                    }
                    throw e;
                  }
                })()}
                onClick={async event => {
                  const $steps = {};
                }}
                outline={true}
                size={"compact"}
                target={true}
              />
            ) : null}
          </Stack__>
        ) : null}
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "number", "username", "button"],
  number: ["number"],
  username: ["username"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  number: typeof Input;
  username: typeof Input;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileChannelsItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileChannelsItem__VariantsArgs;
    args?: PlasmicProfileChannelsItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfileChannelsItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProfileChannelsItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProfileChannelsItem__ArgProps,
          internalVariantPropNames: PlasmicProfileChannelsItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileChannelsItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileChannelsItem";
  } else {
    func.displayName = `PlasmicProfileChannelsItem.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileChannelsItem = Object.assign(
  // Top-level PlasmicProfileChannelsItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    number: makeNodeComponent("number"),
    username: makeNodeComponent("username"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicProfileChannelsItem
    internalVariantProps: PlasmicProfileChannelsItem__VariantProps,
    internalArgProps: PlasmicProfileChannelsItem__ArgProps
  }
);

export default PlasmicProfileChannelsItem;
/* prettier-ignore-end */
