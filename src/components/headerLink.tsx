type HeaderLinkProps = React.ComponentProps<"div">;

export function HeaderLink({ children, ...props }: HeaderLinkProps) {
  return (
    <div
      {...props}
      className="select-none p-1 group text-my-primary-text font-medium cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity active:opacity-50"
    >
      {children}
    </div>
  );
}
