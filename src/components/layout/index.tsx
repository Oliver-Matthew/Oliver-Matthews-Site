"use client";

import { Fragment, ReactNode } from "react";

import Header from "./header";
import Footer from "./footer";
type Props = {
  children: ReactNode;
  template: string | null;
};
export default function Layout({ children, template }: Props) {
  return (
    <Fragment>
      <Header />
      <div className="content" data-template={template}>
        {children}
      </div>
      <Footer />
    </Fragment>
  );
}
