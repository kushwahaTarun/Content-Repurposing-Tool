"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
    <>
      <form className="mt-4 flex flex-col gap-4" action={formAction}>
        <Textarea
          name="topic"
          className="max-h-100"
          placeholder="Type your script"
        />
        <Button type="submit" className="cursor-pointer">
          Generate reel ideas
          {isPending && <Spinner data-icon="inline-start" />}
        </Button>
      </form>
    </>
  );
}
