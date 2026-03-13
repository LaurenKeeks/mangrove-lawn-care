"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import EstimateModal from "./EstimateModal";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [estimateOpen, setEstimateOpen] = useState(false);

  useEffect(() => {
    const handler = () => setEstimateOpen(true);
    document.addEventListener("open-estimate-modal", handler);
    return () => document.removeEventListener("open-estimate-modal", handler);
  }, []);

  return (
    <>
      <Navbar onOpenEstimate={() => setEstimateOpen(true)} />
      {children}
      <EstimateModal
        isOpen={estimateOpen}
        onClose={() => setEstimateOpen(false)}
      />
    </>
  );
}
