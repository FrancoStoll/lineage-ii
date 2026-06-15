export const Embers = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="spark absolute" />
      ))}
    </div>
  );
};
