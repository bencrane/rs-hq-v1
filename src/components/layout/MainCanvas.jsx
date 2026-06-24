export const MainCanvas = ({ children }) => (
  <main className="w-full md:w-2/3 lg:w-3/4 md:ml-auto min-h-screen flex flex-col">
    <div className="flex-grow">
      <div className="px-8 md:px-16 lg:px-32 pt-32 md:pt-48 lg:pt-[25vh] max-w-4xl min-h-[600px] animate-in fade-in duration-300 pb-32">
        {children}
      </div>
    </div>
    
    <footer className="px-8 py-8 md:px-24 md:py-12 lg:px-32 lg:py-12 border-t border-white/[0.04] flex justify-between items-center bg-[#030814] mt-auto">
      <span className="font-serif text-lg text-[#64748b] italic">
        &copy; {new Date().getFullYear()} Rare Structure HoldCo.
      </span>
    </footer>
  </main>
);
