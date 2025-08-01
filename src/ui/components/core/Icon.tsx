import * as icons from "../../../assets/icons";

interface IconProps {
  name: keyof typeof icons;
  size: number;
  colors?: string[];
}

const Icon = ({ name, size, colors = [] }: IconProps) => {
  const paths = icons[name];

  return (
    <svg
      role="img"
      aria-label={name}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} fill={colors[i] ?? "currentColor"} />
      ))}
    </svg>
  );
};

export default Icon
