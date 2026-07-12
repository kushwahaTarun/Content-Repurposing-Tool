import QueryForm from "@/components/QueryForm/QueryForm";

export default function Home() {
  return (
    <section className="min-h-screen min-w-full flex justify-center items-center">
      <div>
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Content Repurposing Tool
        </h1>

        {/* Textarea and the Generate reel ideas button */}
        <QueryForm />
      </div>
    </section>
  );
}
