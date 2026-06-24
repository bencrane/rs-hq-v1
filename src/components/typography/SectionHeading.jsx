export const SectionHeading = ({ children, className = "" }) => (
  <h2 className={`font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-24 max-w-2xl ${className}`}>
    {children}
  </h2>
);
