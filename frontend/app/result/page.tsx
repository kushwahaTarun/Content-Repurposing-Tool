"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, Clapperboard, MessageSquareQuote, Sparkles } from "lucide-react";

import { ReelIdea } from "@/interface/interface";
import { AuroraBackground } from "@/components/shared/AuroraBackground";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ReelIdeas() {
  const [reelIdeas] = useState<ReelIdea[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = sessionStorage.getItem("reelIdeas");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <section className="relative min-h-screen w-full px-4 py-16 sm:py-20">
      <AuroraBackground />

      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 self-start rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back
          </Link>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
            <Sparkles className="size-3.5 text-primary" />
            {reelIdeas.length} reel {reelIdeas.length === 1 ? "idea" : "ideas"} generated
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Your <span className="text-gradient">reel ideas</span> are ready
          </h1>
        </motion.div>

        {reelIdeas && reelIdeas.length ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            {reelIdeas.map((idea: ReelIdea, index: number) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl border border-border/80 p-6 shadow-xl shadow-black/20 transition-shadow hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <h2 className="text-lg font-semibold text-foreground">
                    {idea.hook}
                  </h2>
                </div>

                <div className="mb-4 flex gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4">
                  <Clapperboard className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Script
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {idea.script}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-border/60 bg-secondary/40 p-4">
                  <MessageSquareQuote className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      Caption
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {idea.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass flex flex-col items-center gap-3 rounded-2xl border border-border/80 p-12 text-center"
          >
            <p className="text-muted-foreground">No reel ideas generated.</p>
            <Link
              href="/"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Go back and try again
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
