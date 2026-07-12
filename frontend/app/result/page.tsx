"use client";

import { useState } from "react";

import { ReelIdea } from "@/interface/interface";

export default function ReelIdeas() {
  // state that stores the reel ideas retrieved from sessionStorage
  const [reelIdeas] = useState<ReelIdea[]>(() => {
    const stored = sessionStorage.getItem("reelIdeas");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <>
      {reelIdeas && reelIdeas.length ? (
        reelIdeas.map((idea: ReelIdea, index: number) => {
          return (
            <div key={index} className="mb-4 p-4 border rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{idea.hook}</h2>
              <h2 className="text-xl font-semibold mb-2">{idea.script}</h2>
              <h2 className="text-xl font-semibold mb-2">{idea.caption}</h2>
            </div>
          );
        })
      ) : (
        <p>No reel ideas generated.</p>
      )}
    </>
  );
}
