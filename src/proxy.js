import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

//ei proxy er through sign-in na kore profile e jaite dibe na! 
export async function proxy(request) {
    //session ta ke get korche
    const session = await auth.api.getSession({
        headers: await headers()
    })

    //jodi session na thake tahole sign-in page e pathiye dicche
    if(!session) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    //jodi session thake tahole next e je khane jabe seikhane jabe
    return NextResponse.next();
}

export const config = {
  matcher: ["/profile"], // Specify the routes the middleware applies to
};