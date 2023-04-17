import { redirectSession } from "@/hooks/redirectSession";

import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default async function Home() {
  await redirectSession({ protectedRoute: false });

  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}
