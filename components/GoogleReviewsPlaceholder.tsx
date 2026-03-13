export default function GoogleReviewsPlaceholder() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
          >
            {/* Stars */}
            <div className="mb-4 flex gap-1 text-xl text-gold">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s}>&#9733;</span>
              ))}
            </div>

            {/* Shimmer text lines */}
            <div className="space-y-2.5">
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-4/6 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Reviewer name shimmer + Google icon */}
            <div className="mt-5 flex items-center justify-between">
              <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-forest/10 py-3 px-4 text-center text-sm font-medium text-forest">
        Live Google reviews coming soon — verified by Google
      </div>
    </div>
  );
}
