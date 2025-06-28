import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json({
        message: "This is a Next.js API route",})
}