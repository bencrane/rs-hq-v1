export const BodyText = ({ children, className = "" }) => (
  <p className={`font-sans text-sm md:text-base text-[#cbd5e1] leading-loose font-light ${className}`}>
    {children}
  </p>
);
