export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="bg-bg py-20 lg:px-[10%] -mt-16">{children}</main>;
}
