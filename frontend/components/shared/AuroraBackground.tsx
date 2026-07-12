export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 -left-32 size-[36rem] rounded-full bg-primary/25 blur-[140px]" />
      <div className="absolute top-1/3 -right-32 size-[30rem] rounded-full bg-accent/25 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 size-[26rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
