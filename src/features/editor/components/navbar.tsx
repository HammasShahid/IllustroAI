export default function Navbar({ height }: { height: string }) {
  return (
    <nav
      className={`flex h-[${height}] w-full items-center gap-x-8 border-b bg-white p-4 lg:pl-[34px]`}
    >
      Nav
    </nav>
  );
}
