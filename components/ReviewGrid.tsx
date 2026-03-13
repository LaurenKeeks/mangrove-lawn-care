interface Review {
  quote: string;
  name: string;
}

export default function ReviewGrid({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, i) => (
        <article
          key={i}
          className="flex flex-col rounded-xl p-6"
          style={{
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            minHeight: "280px",
          }}
        >
          {/* Reviewer header */}
          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white font-sans"
              style={{ backgroundColor: "#1B4D2E" }}
            >
              {review.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-dark font-sans">
                {review.name}
              </p>
              <div className="flex text-gold text-sm">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s}>&#9733;</span>
                ))}
              </div>
            </div>
          </div>
          <p
            className="text-dark/80 italic leading-relaxed"
            style={{ fontSize: "16px" }}
          >
            &ldquo;{review.quote}&rdquo;
          </p>
        </article>
      ))}
    </div>
  );
}
