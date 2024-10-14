"use client";

import { Fragment, ReactNode } from "react";
import { useGSAP } from "@gsap/react";

import { Interactions } from "@/interactions";
import Layout from "@/components/layout";

type Props = {
  children: ReactNode;
};

export default function AppProvider({ children }: Props) {
  useGSAP(() => {
    new Interactions();
  });

  return (
    <Fragment>
      <Layout>{children}</Layout>
    </Fragment>
  );
}
