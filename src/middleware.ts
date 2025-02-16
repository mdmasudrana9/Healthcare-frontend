import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];
const commonPrivatesRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasedPrivateRuotes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  "SUPER-ADMIN": [/^\/dashboard\/super-admin/],
};

type role = keyof typeof roleBasedPrivateRuotes;

export function middleware(request: NextRequest) {
  //   console.log(request.nextUrl);
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (accessToken && commonPrivatesRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role = decodedData?.role;

  // if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //   return NextResponse.next();
  // }
  // if (role === "DOCTOR" && pathname.startsWith("/dashboard/doctor")) {
  //   return NextResponse.next();
  // }
  // if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //   return NextResponse.next();
  // }
  // if (role === "DOCTOR" && pathname.startsWith("/dashboard/doctor")) {
  //   return NextResponse.next();
  // }
  if (role && roleBasedPrivateRuotes[role as role]) {
    const routes = roleBasedPrivateRuotes[role as role];
    if (routes.some((route) => pathname.match(pathname))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
