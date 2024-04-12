import { NextResponse } from "next/server";
import { userAgent } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const url = request.nextUrl;
  // Will decode the user agent
  const { device } = userAgent(request);

  // Will check if the device type is mobile
  const isMobile = device.type === "mobile";

  // Setting the value in searchParam so that it can be used in page
  url.searchParams.set("isMobile", isMobile);

  // Will forward to the requested url with the searchParam
  return NextResponse.rewrite(url);
}

// The below matched paths will utilize this middleware
export const config = {
  matcher: ["/", "/client"],
};
