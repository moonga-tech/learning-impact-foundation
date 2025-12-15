// Temporary route handler placeholder to satisfy Next's metadata route loader.
// This is a server-only default export (route handler) so Next can load
// `/components/icon` metadata without attempting to call client code.
import { NextResponse } from "next/server";

export default function handler() {
	// Return an empty 204 response — this satisfies the route handler requirement
	return new NextResponse(null, { status: 204 });
}

// TODO: once the build is stable and no pages import this file as a component,
// consider deleting this file so Next no longer generates a `/components/icon`
// metadata route.