type HeaderLinkProps = React.ComponentProps<"div">;

export function HeaderLink({ children, ...props }: HeaderLinkProps) {
  return (
    <div
      {...props}
      className="select-none p-1 group font-medium cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity active:opacity-60"
    >
      {children}
    </div>
  );
}
