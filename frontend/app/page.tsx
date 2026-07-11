import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  return (
    <section className="min-h-screen min-w-full flex justify-center items-center">
      <div>
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Content Repurposing Tool
        </h1>

        {/* Textarea and the Generate reel ideas button */}
        <form className="mt-4 flex flex-col gap-4">
          <Textarea className="max-h-100" placeholder="Type your script" />
          <Button type="submit" className="cursor-pointer">
            Generate reel ideas
            <Spinner data-icon="inline-start" />
          </Button>
        </form>
      </div>
    </section>
  );
}
