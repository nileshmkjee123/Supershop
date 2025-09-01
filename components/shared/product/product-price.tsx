import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number | { toNumber: () => number }; // allow Decimal
  className?: string;
}) => {
  const numericValue =
    typeof value === "object" && "toNumber" in value
      ? value.toNumber()
      : Number(value);

  const stringValue = numericValue.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
