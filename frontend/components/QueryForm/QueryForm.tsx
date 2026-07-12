"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { submitQuery } from "@/lib/action";

export default function QueryForm() {
  const initialState = { output: [], error: "" };
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    submitQuery,
    initialState,
  );

  useEffect(() => {
    if (state.output && state.output.length) {
      sessionStorage.setItem("reelIdeas", JSON.stringify(state.output));
      router.push("/result");
    }
  }, [router, state.output]);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="glass mt-10 w-full rounded-2xl border border-border/80 p-3 shadow-2xl shadow-black/30"
      action={formAction}
    >
      <Textarea
        name="topic"
        className="max-h-72 min-h-32 resize-none rounded-xl border-transparent bg-transparent text-base focus-visible:ring-primary/40"
        placeholder="Paste your script, transcript, or topic idea here..."
      />
      <div className="flex items-center justify-between gap-3 px-1 pt-2">
        <p className="hidden text-xs text-muted-foreground sm:block">
          We&apos;ll generate hooks, scripts &amp; captions instantly.
        </p>
        <Button
          type="submit"
          disabled={isPending}
          size="lg"
          className="ml-auto cursor-pointer gap-2 rounded-xl bg-primary px-5 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isPending ? (
            <>
              Generating
              <Spinner data-icon="inline-end" />
            </>
          ) : (
            <>
              Generate reel ideas
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
}
