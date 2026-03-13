"use client";

export default function ServiceEstimateLink() {
  return (
    <button
      onClick={() => {
        document.dispatchEvent(new CustomEvent("open-estimate-modal"));
      }}
      className="mt-4 self-start text-sm font-semibold transition-colors hover:underline cursor-pointer"
      style={{ color: "#1B4D2E" }}
    >
      Get a Free Estimate &rarr;
    </button>
  );
}
