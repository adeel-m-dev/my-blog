import React, { ComponentType } from "react";
import loadable from "./utils/loadable";

const MainPage = loadable(() => import("./components/MainPage"));
const SinglePost = loadable(() => import("./components/SinglePost"));

export interface Routing {
  path: string;
  component: ComponentType<React.PropsWithChildren<any>>;
  children?: Routing[];
}

export const PublicRoutes: Routing[] = [
  { path: "/", component: MainPage },
  { path: "/single", component: SinglePost },
];
