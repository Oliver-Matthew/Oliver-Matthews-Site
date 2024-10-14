"use client";

import { Fragment, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
