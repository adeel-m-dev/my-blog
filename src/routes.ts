import React, { ComponentType } from "react";
import loadable from "./utils/loadable";

const NavbarSimple = loadable(() => import("./pages/Navbar/index"));
const LandingPage = loadable(() => import("./pages"));

export interface Routing {
  path: string;
  component: ComponentType<React.PropsWithChildren<any>>;
  children?: Routing[];
}

export const PublicRoutes: Routing[] = [
  { path: "/", component: LandingPage },
  { path: "/nav", component: NavbarSimple },
  //   { path: "/register/:username/:plan?", component: () => <Register /> },
  //   { path: "/checkin/:boothId", component: () => <EventCheckForm /> },
  //   { path: "/direct/:user", component: () => <DirectLandingPage /> },
  //   { path: "/public/store", component: () => <ECommerceStoreContainer /> },
  //   { path: "/public/p/:slug", component: () => <PublicPageViewContainer /> },
  //   { path: "/event/:slug/:user", component: () => <GuestEventRegistration /> },
];
