import {  NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json({message : "Hello from API route!"}, )
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const POST = async (request : Request) => {
    return NextResponse.json({message : "Hello from API route!"}, )
}
export const DELETE = async () => {
    return NextResponse.json({message : "Hello from API route!"}, )
}
export const PUT = async () => {
    return NextResponse.json({message : "Hello from API route!"}, )
}
export const PATCH = async () => {
    return NextResponse.json({message : "Hello from API route!"}, )
}