"use client";

import {
	Fragment,
	type ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Interactions } from "@/interactions";
import Layout from "@/components/layout";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
	children: ReactNode;
};

export default function AppProvider({ children }: Props) {
	const pathname = usePathname();
	const [template, setTemplate] = useState<string | null>(null);

	const getTemplate = useCallback(() => {
		const _pathname = pathname.replace("/", "");
		if (_pathname === "") {
			setTemplate("home");
			return;
		}
		if (_pathname === "about-us") {
			setTemplate("about");
			return;
		}
		if (_pathname === "careers") {
			setTemplate("careers");
			return;
		}
		setTemplate(pathname);
		return;
	}, [pathname]);

	useEffect(() => {
		getTemplate();
	}, [getTemplate]);

	useGSAP(() => {
		new Interactions({ template: template });
		window.scrollTo(0, 0);
	}, [template]);

	gsap.registerPlugin(ScrollTrigger);

	return (
		<Fragment>
			<Layout template={template}>{children}</Layout>
		</Fragment>
	);
}
