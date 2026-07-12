"use server";

export async function submitQuery(prevState, formData: FormData) {
    const topic = formData.get("topic");

    if(!topic || !topic.trim().length) {
        return { error: "Topic is required" };
    }

    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/generates`, {
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
