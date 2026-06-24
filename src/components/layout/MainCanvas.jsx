export const MainCanvas = ({ children }) => (
  <main className="flex min-h-screen w-full flex-col md:ml-sidebar">
    <div className="flex-1 px-8 pb-24 pt-hang-sm md:px-16 md:pt-hang lg:px-24">
      <div className="w-full max-w-5xl">{children}</div>
    </div>

    <footer className="mt-auto flex items-center justify-between border-t border-line-soft bg-sunken px-8 py-8 md:px-16 md:py-10 lg:px-24">
      <span className="font-serif text-lg italic text-faint">
        &copy; {new Date().getFullYear()} Rare Structure HoldCo.
      </span>
    </footer>
  </main>
);
