interface StarRatingProps {
  rate: number;
}

export const StarRating = ({ rate }: StarRatingProps) => {
  const fullStars = Array.from({ length: Math.floor(rate) }, (_, i) => i);
  const halfStar = rate % 1 !== 0;
  const emptyStars = Array.from({ length: 5 - Math.ceil(rate) }, (_, i) => i);

  return (
    <div
      className="flex justify-between tracking-wide
        text-light-iconColor items-center"
    >
      {fullStars.map((index) => {
        return <FullStars key={index} />;
      })}

      {halfStar && <HalfStar />}

      {emptyStars.map((index) => {
        return (
          <EmptyStars
          
            key={index}
          />
        );
      })}
    </div>
  );
};

function FullStars() {
  return <h1 className="text-xl">&#9733;</h1>;
}

function HalfStar() {
  return (
    <span className="flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="half">
            <stop
              offset="50%"
              stopColor="#3b757f"
            />
            <stop
              offset="50%"
              stopColor="white"
              stopOpacity="1"
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          stroke="#3b757f"
          strokeWidth="1"
          d="M12 .587l3.668 7.572 8.332 1.151-6.064 5.898 1.512 8.276L12 18.896 4.552 23.484l1.512-8.276L0 9.31l8.332-1.151L12 .587z"
        />
      </svg>
    </span>
  );
}

function EmptyStars() {
  return <h1 className="text-xl">&#9734;</h1>;
}
