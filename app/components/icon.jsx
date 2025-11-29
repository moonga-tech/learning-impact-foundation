// Metadata/route placeholder — return a valid response so Next's metadata route loader succeeds
import { NextResponse } from "next/server";

export default function handler() {
    // Return an empty 204 response — this satisfies the route handler requirement
    return new NextResponse(null, { status: 204 });
}