export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-my-secondary-text">
      <div className="max-w-5xl w-full py-4 md:py-10 px-4 md:px-10 mx-auto">
        <p className="text-my-secondary-text text-center text-xs md:text-sm">
          &copy; {currentYear} - <strong>Lucas Galdino</strong>. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
