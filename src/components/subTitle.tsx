type SubTitleProps = React.ComponentProps<"h4"> & {
  subTitle: string;
};

export function SubTitle({ subTitle }: SubTitleProps) {
  return (
    <h4 className="text-lg md:text-xl text-my-text-blue font-bold">
      {subTitle}
    </h4>
  );
}
