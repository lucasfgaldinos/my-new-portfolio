type HeaderLinkProps = React.ComponentProps<"div">;

export function HeaderLink({ children, ...props }: HeaderLinkProps) {
  return (
    <div
      {...props}
      className="select-none px-3 py-1 rounded-bl-2xl rounded-br-sm rounded-tl-sm rounded-tr-2xl hover:transition-colors backface-hidden group text-my-primary-text font-medium cursor-pointer flex items-center gap-1 hover:bg-my-text-blue"
    >
      {children}
    </div>
  );
}
