export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-5xl w-full py-6 md:py-10 px-4 md:px-10 mx-auto flex flex-col">
        <div
          className="max-w-sm mx-auto w-full h-px mb-6 md:mb-10"
          style={{
            background:
              "linear-gradient(90deg, #0000, rgba(50,80,255, 0.40), #0000)",
          }}
        />
        <p className="text-muted-foreground text-center text-xs md:text-sm">
          &copy; {currentYear} - <strong>Lucas Galdino</strong>. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
