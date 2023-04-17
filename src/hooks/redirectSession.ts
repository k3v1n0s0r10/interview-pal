import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const redirectSession = async ({
  protectedRoute,
}: {
  protectedRoute: boolean;
}) => {
  const session = await getServerSession(authOptions);
  const pathname = protectedRoute ? "/login" : "/prep";

  if ((protectedRoute && !session) || (!protectedRoute && session))
    redirect(pathname);
};
