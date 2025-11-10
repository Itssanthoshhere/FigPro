"use client";

// import { CollaborativeApp } from "./CollaborativeApp";

import Live from "@/components/Live";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    /* <CollaborativeApp /> */

    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <Live />
      </section>
    </main>
  );
}
