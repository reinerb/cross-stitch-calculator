import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  width: number;
  height: number;
  metric: boolean;
  className?: string;
};

function DimensionsDisplay({ title, width, height, metric, className }: Props) {
  return (
    <section className={twMerge("flex flex-col items-center gap-2", className)}>
      <h2 className="text-center text-lg font-semibold">{title}</h2>
      <div className="flex items-center gap-4">
        <p className="text-center">
          <span className="block text-center text-xl font-bold">{width}</span>
          <span className="block text-xs">{metric ? "cm" : "inches"} wide</span>
        </p>
        <p className="text-2xl">&times;</p>
        <p className="text-center">
          <span className="block text-center text-xl font-bold">{height}</span>
          <span className="block text-xs">{metric ? "cm" : "inches"} high</span>
        </p>
      </div>
    </section>
  );
}

export default DimensionsDisplay;
