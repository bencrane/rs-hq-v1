export const PlatformHeading = ({ title, subtitle }) => (
  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-[1.05] tracking-tight mb-12 w-full">
    <span className="block whitespace-nowrap">{title}</span>
    {subtitle && (
      <span className="block text-[#94a3b8] italic whitespace-nowrap">{subtitle}</span>
    )}
  </h2>
);
