// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7tSQdxgu7FmCVtUmJP9sF2
// Component: DjBp9Nd5WOmO

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

import PaheHeaderMenuTextDark from "../../PaheHeaderMenuTextDark"; // plasmic-import: iEB-4Havef_M/component
import Instagram from "../../Instagram"; // plasmic-import: IX1Xf65O6Aw9/component
import Footer from "../../Footer"; // plasmic-import: qugGYwjKYlY4/component

import { useScreenVariants as useScreenVariantsnwmJTeeh34I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nwmJ_teeh34I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 7tSQdxgu7FmCVtUmJP9sF2/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: DjBp9Nd5WOmO/css

createPlasmicElementProxy;

export type PlasmicAboutUs__VariantMembers = {};
export type PlasmicAboutUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutUs__VariantsArgs;
export const PlasmicAboutUs__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutUs__ArgsType = {};
type ArgPropType = keyof PlasmicAboutUs__ArgsType;
export const PlasmicAboutUs__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutUs__OverridesType = {
  root?: Flex__<"div">;
  paheHeaderMenuTextDark?: Flex__<typeof PaheHeaderMenuTextDark>;
  container433?: Flex__<"div">;
  container434?: Flex__<"div">;
  container435?: Flex__<"div">;
  container436?: Flex__<"div">;
  instagram?: Flex__<typeof Instagram>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultAboutUsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAboutUs__RenderFunc(props: {
  variants: PlasmicAboutUs__VariantsArgs;
  args: PlasmicAboutUs__ArgsType;
  overrides: PlasmicAboutUs__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnwmJTeeh34I()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAboutUs.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAboutUs.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAboutUs.pageMetadata.title}
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
            sty.root
          )}
        >
          <PaheHeaderMenuTextDark
            data-plasmic-name={"paheHeaderMenuTextDark"}
            data-plasmic-override={overrides.paheHeaderMenuTextDark}
            className={classNames("__wab_instance", sty.paheHeaderMenuTextDark)}
          />

          <section className={classNames(projectcss.all, sty.section___39CCs)}>
            <Stack__
              as={"div"}
              data-plasmic-name={"container433"}
              data-plasmic-override={overrides.container433}
              hasGap={true}
              className={classNames(projectcss.all, sty.container433)}
            >
              <div className={classNames(projectcss.all, sty.column__u1M10)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___3LElI)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__p4TzD
                    )}
                  >
                    {"Commerce.js Demo Store"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__whGxp
                    )}
                  >
                    {
                      "This is an open source storefront built using Chec\u2019s headless architecture and the Commerce.js SDK. Commerce.js is a smarter, more efficient way to build eCommerce projects, and we hope you can see that as you explore the world custom eCommerce. Please build on top of, or pick apart this project for your own use. Everything in this project, from the storefront, to the cart, checkout and receipt, is 100% customizable. To build more custom eCommerce projects, using any frontend framework or platform, head over to commercejs.com."
                    }
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__hqLi)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__g27Cc
                      )}
                    >
                      {"Documentation"}
                    </button>
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__xKab0
                      )}
                    >
                      {"Guides from the community"}
                    </button>
                  </Stack__>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__ftViN)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__ln24C)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/commerce_storefront/images/cjsIllustrationsvg.svg",
                    fullWidth: 195,
                    fullHeight: 150,
                    aspectRatio: 1.301887
                  }}
                />
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__a5Z4P)}>
            <Stack__
              as={"div"}
              data-plasmic-name={"container434"}
              data-plasmic-override={overrides.container434}
              hasGap={true}
              className={classNames(projectcss.all, sty.container434)}
            >
              <div className={classNames(projectcss.all, sty.column__cXyke)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__cmTm)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/commerce_storefront/images/netlifyIllustrationsvg.svg",
                    fullWidth: 217,
                    fullHeight: 150,
                    aspectRatio: 1.448276
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__dAhWn)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__hrnYu)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__lMhMy
                    )}
                  >
                    {"Deploy to Netlify"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__asPz6
                    )}
                  >
                    {
                      "If you would like to deploy this project live today, click the button below and watch the magic happen!"
                    }
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wn1Tp)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__nx9Px
                      )}
                    >
                      {"Deploy to Netlify"}
                    </button>
                  </Stack__>
                </Stack__>
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section___8FGxy)}>
            <Stack__
              as={"div"}
              data-plasmic-name={"container435"}
              data-plasmic-override={overrides.container435}
              hasGap={true}
              className={classNames(projectcss.all, sty.container435)}
            >
              <div className={classNames(projectcss.all, sty.column__kQkEi)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__belUw)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__d8NZb
                    )}
                  >
                    {"Clone in GitHub"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__otWxW
                    )}
                  >
                    {
                      "If you would like to clone this project and do a manual setup, go to the repository below!"
                    }
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__m3GqM)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__imFzo
                      )}
                    >
                      {"Clone in GitHub"}
                    </button>
                  </Stack__>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__mNmxx)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__htcgG)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={
                    "/plasmic/commerce_storefront/images/githubIllustrationsvg.svg"
                  }
                />
              </div>
            </Stack__>
          </section>
          <section className={classNames(projectcss.all, sty.section__iMnxS)}>
            <Stack__
              as={"div"}
              data-plasmic-name={"container436"}
              data-plasmic-override={overrides.container436}
              hasGap={true}
              className={classNames(projectcss.all, sty.container436)}
            >
              <div className={classNames(projectcss.all, sty.column__lbHeS)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___481Qu)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={
                    "/plasmic/commerce_storefront/images/blogIllustration1Svg.svg"
                  }
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__m8HeZ)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oW2Ch)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___0MIwj
                    )}
                  >
                    {"Technical Blog"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__u31Mj
                    )}
                  >
                    {
                      "Read the full technical tutorial here if you want to get into the nitty gritty!"
                    }
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bd7Ws)}
                  >
                    <button
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        projectcss.__wab_text,
                        sty.button__oF59
                      )}
                    >
                      {"Read Blog"}
                    </button>
                  </Stack__>
                </Stack__>
              </div>
            </Stack__>
          </section>
          <Instagram
            data-plasmic-name={"instagram"}
            data-plasmic-override={overrides.instagram}
            className={classNames("__wab_instance", sty.instagram)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "paheHeaderMenuTextDark",
    "container433",
    "container434",
    "container435",
    "container436",
    "instagram",
    "footer"
  ],
  paheHeaderMenuTextDark: ["paheHeaderMenuTextDark"],
  container433: ["container433"],
  container434: ["container434"],
  container435: ["container435"],
  container436: ["container436"],
  instagram: ["instagram"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  paheHeaderMenuTextDark: typeof PaheHeaderMenuTextDark;
  container433: "div";
  container434: "div";
  container435: "div";
  container436: "div";
  instagram: typeof Instagram;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutUs__VariantsArgs;
    args?: PlasmicAboutUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAboutUs__ArgsType,
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
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    paheHeaderMenuTextDark: makeNodeComponent("paheHeaderMenuTextDark"),
    container433: makeNodeComponent("container433"),
    container434: makeNodeComponent("container434"),
    container435: makeNodeComponent("container435"),
    container436: makeNodeComponent("container436"),
    instagram: makeNodeComponent("instagram"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "About Us",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
