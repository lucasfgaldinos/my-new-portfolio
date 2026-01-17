type SubTitleProps = React.ComponentProps<"h4"> & {
  subTitle: string;
};

export function SubTitle({ subTitle }: SubTitleProps) {
  return (
    <h4 className="text-lg md:text-xl text-blue-600 font-bold">{subTitle}</h4>
  );
}
