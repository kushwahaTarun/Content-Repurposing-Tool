"use server";

import { ReelIdea } from "@/interface/interface";

type QueryState = { output?: ReelIdea[]; error?: string };

export async function submitQuery(
  prevState: QueryState,
  formData: FormData,
): Promise<QueryState> {
    const topic = formData.get("topic");

    if(typeof topic !== "string" || !topic.trim().length) {
        return { error: "Topic is required" };
    }

    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/generate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: topic }),
        })
        
        if(!response.ok) {
            return { error: "Failed to submit query" };
        }

        const data = await response.json();
        const parsedData = JSON.parse(data.output);
        return {output: parsedData.reels };
    }
    catch (error) {
        console.error("Error submitting query:", error);
        return { error: "An error occurred while submitting the query." };
    }

}
