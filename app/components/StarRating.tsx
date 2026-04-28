// StarRating.tsx
interface StarRatingProps {
  rate: number;
}

export const StarRating = ({ rate }: StarRatingProps) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rate);

  return (
    <div className="flex items-center gap-0.5 text-ui-cta">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FullStar key={`full-${i}`} />
      ))}
      {halfStar && <HalfStar id={`half-${rate}`} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <EmptyStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

const FullStar = () => (
  <span className="text-lg leading-none">&#9733;</span>
);

const HalfStar = ({ id }: { id: string }) => (
  <span className="flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 24 24">
      <defs>
        <linearGradient id={id}>
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        stroke="currentColor"
        strokeWidth="1"
        d="M12 .587l3.668 7.572 8.332 1.151-6.064 5.898 1.512 8.276L12 18.896 4.552 23.484l1.512-8.276L0 9.31l8.332-1.151L12 .587z"
      />
    </svg>
  </span>
);

const EmptyStar = () => (
  <span className="text-lg leading-none opacity-30">&#9733;</span>
);