"use client";

export default function CTAButton({
  children = "Get a Free Estimate",
  variant = "primary",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "white";
}) {
  const styles =
    variant === "white"
      ? "bg-white text-forest hover:bg-forest hover:text-white border-2 border-white"
      : "bg-forest text-white hover:bg-white hover:text-forest";

  return (
    <button
      onClick={() => {
        document.dispatchEvent(new CustomEvent("open-estimate-modal"));
      }}
      className={`rounded-full px-8 py-3.5 text-base font-semibold transition-colors cursor-pointer ${styles}`}
    >
      {children}
    </button>
  );
}
