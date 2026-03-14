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
      {/* Mobile dropdown */}
      <div className="mb-12 md:hidden">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value as FilterTab)}
          className="w-full rounded-lg border-2 px-4 py-3 text-sm font-semibold appearance-none bg-white cursor-pointer"
          style={{ borderColor: "#1B4D2E", color: "#1B4D2E", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%231B4D2E' d='M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          {TABS.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop filter tabs */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 mb-16">
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
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {(active === "All Services" || active === "Lawn & Yard Care") && lawnCards}
        {(active === "All Services" || active === "Landscape & Property Services") && landscapeCards}
      </div>
    </>
  );
}
