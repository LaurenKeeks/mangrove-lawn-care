"use client";

import { useState } from "react";

type FilterTab = "All Services" | "Lawn & Yard Care" | "Landscape & Property Services";

const TABS: FilterTab[] = ["All Services", "Lawn & Yard Care", "Landscape & Property Services"];

export default function ServiceFilter({
  lawnCards,
  landscapeCards,
}: {
  lawnCards: React.ReactNode;
  landscapeCards: React.ReactNode;
}) {
  const [active, setActive] = useState<FilterTab>("All Services");

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="rounded-full px-5 py-2 text-sm font-semibold transition-colors cursor-pointer"
            style={
              active === tab
                ? { backgroundColor: "#1B4D2E", color: "#ffffff" }
                : { backgroundColor: "#f0f0f0", color: "#333333" }
            }
            onMouseEnter={(e) => {
              if (active !== tab) {
                e.currentTarget.style.backgroundColor = "#e0e0e0";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== tab) {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {(active === "All Services" || active === "Lawn & Yard Care") && lawnCards}
        {(active === "All Services" || active === "Landscape & Property Services") && landscapeCards}
      </div>
    </>
  );
}
