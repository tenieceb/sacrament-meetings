export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav>
        {/* meetings-specific navigation */}
      </nav>

      {children}
    </section>
  );
}