"use client";

import { Fragment, ReactNode } from "react";

import Header from "./header";
import Footer from "./footer";
import Preloader from "../ui/preloader";
type Props = {
  children: ReactNode;
  template: string | null;
};
export default function Layout({ children, template }: Props) {
  return (
    <Fragment>
      <Preloader />
      <div className="content" id="content" data-template={template}>
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
}
