import { redirectSession } from "@/hooks/redirectSession";

import Header from "@/components/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await redirectSession({ protectedRoute: false });

  return (
    <>
      <Header />
      {children}
    </>
  );
}
