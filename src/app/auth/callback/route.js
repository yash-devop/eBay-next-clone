import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET(request){
    console.log('requestURL',request.url);
    const requestUrl = new URL(request.url);

    const code = requestUrl.searchParams.get("code");

    if(code){
        const supabase = createRouteHandlerClient({cookies});
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect("/");
}