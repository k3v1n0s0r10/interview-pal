import SidebarWithHeader from "@/components/sidebar";
import { redirectSession } from "@/hooks/redirectSession";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await redirectSession({ protectedRoute: true });
  return <SidebarWithHeader>{children}</SidebarWithHeader>;
}
