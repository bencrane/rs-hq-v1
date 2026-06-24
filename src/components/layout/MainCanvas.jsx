export const MainCanvas = ({ children }) => (
  <main className="flex min-h-screen w-full flex-col md:ml-auto md:w-2/3 lg:w-3/4">
    <div className="flex-grow">
      <div className="min-h-[600px] max-w-5xl px-8 pb-32 pt-frame-top-sm md:px-16 md:pt-frame-top-md lg:px-32 lg:pt-frame-top">
        {children}
      </div>
    </div>

    <footer className="mt-auto flex items-center justify-between border-t border-line-soft bg-sunken px-8 py-8 md:px-24 md:py-12 lg:px-32">
      <span className="font-serif text-lg italic text-faint">
        &copy; {new Date().getFullYear()} Rare Structure HoldCo.
      </span>
    </footer>
  </main>
);
