interface CardItemProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
  makeFlex: boolean;
}

const CardItem = ({ data, makeFlex = true }: CardItemProps) => {
  const Icon = data.icon;
  return (
    <div
      className={`p-3 rounded-md ${
        makeFlex ? "flex gap-6 bg-temp-color-2" : "block gap-3 bg-temp-color-7"
      }
        justify-center`}
    >
      <div
        className={`${
          !makeFlex && "w-14 h-14 bg-temp-color-1 rounded-full flex items-center justify-center pt-0"
        } text-2xl text-temp-color-8 pt-2`}
      >
        <Icon />
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <p className={`font-bold ${makeFlex ? " " : "text-temp-color-1"}`}>
          <strong>{data.title}</strong>
        </p>
        <p className={`${!makeFlex && "text-temp-color-2"}`}> {data.description}</p>
      </div>
    </div>
  );
};
export default CardItem;
