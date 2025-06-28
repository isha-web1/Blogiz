"use server";

import { Blog } from "@/types";


export const createBlog = async (data : Blog) => {
    const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache : "no-store", // Disable caching for this request
    });
    
    if (!res.ok) {
        throw new Error("Failed to create blog");
    }
    
    const blogInfo = await res.json();
    return blogInfo;
}