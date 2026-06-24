export const MainCanvas = ({ children }) => (
  <main className="ml-rail flex min-h-screen flex-col md:ml-sidebar">
    <div className="flex flex-1 flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
      <div className="w-full max-w-4xl">{children}</div>
    </div>

    <footer className="flex items-center justify-between border-t border-line-soft bg-sunken px-8 py-8 md:px-16 md:py-10 lg:px-24">
      <span className="font-serif text-lg italic text-faint">
        &copy; {new Date().getFullYear()} Rare Structure HoldCo.
      </span>
    </footer>
  </main>
);
