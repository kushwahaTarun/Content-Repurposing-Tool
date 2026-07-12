import { Sparkles } from "lucide-react";

import QueryForm from "@/components/QueryForm/QueryForm";
import { AuroraBackground } from "@/components/shared/AuroraBackground";

export default function Home() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 sm:py-24">
      <AuroraBackground />

      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <Sparkles className="size-3.5 text-primary" />
          AI-powered content repurposing
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Turn one script into
          <span className="text-gradient"> endless reel ideas</span>
        </h1>

        <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
          Paste your script or topic below and get scroll-stopping hooks,
          scripts, and captions in seconds.
        </p>

        <QueryForm />
      </div>
    </section>
  );
}
