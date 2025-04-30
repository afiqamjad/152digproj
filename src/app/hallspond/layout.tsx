export default function HallsPondLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className="h-full">{children}</main>
    );
  }