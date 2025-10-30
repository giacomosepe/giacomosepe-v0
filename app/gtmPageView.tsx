// app/GtmPageView.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GtmPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const lastUrlRef = useRef<string | null>(null);

	useEffect(() => {
		const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
		if (url === lastUrlRef.current) return; // avoid duplicate pushes
		lastUrlRef.current = url;

		// Ensure dataLayer exists
		// @ts-ignore
		window.dataLayer = window.dataLayer || [];
		// Push a standardized virtual pageview
		// @ts-ignore
		window.dataLayer.push({
			event: "pageview", // <- we'll listen for this in GTM
			page_path: url,
			page_location: window.location.href,
			page_title: document.title,
		});
	}, [pathname, searchParams]);

	return null;
}
