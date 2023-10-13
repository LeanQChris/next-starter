import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // handle page authentication here
    return NextResponse.next();
}

export const config = {
    matchers: []
}