export default function Toolbar({ height }: { height: string }) {
  return (
    <div
      className={`z-[49] flex h-[${height}] w-full shrink-0 items-center gap-x-2 overflow-x-auto border-b bg-white p-2`}
    >
      Toolbar
    </div>
  );
}
