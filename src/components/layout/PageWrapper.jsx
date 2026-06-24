export const PageWrapper = ({ children }) => (
  <div className="min-h-screen bg-[#040a18] flex flex-col md:flex-row relative selection:bg-white/[0.1] selection:text-white">
    {children}
  </div>
);
