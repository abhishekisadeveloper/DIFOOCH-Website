
const Typography = ({ variant = "p", children, className = "" }) => {
  const Tag = variant;

  const styles = {
  h1: "text-[var(--text-heading-large)] leading-[var(--leading-heading-large)] font-[var(--font-family-jakarta)] font-bold text-[var(--color-primary)]",
  h2: "text-[var(--text-heading-medium)] leading-[var(--leading-heading-medium)] font-[var(--font-family-jakarta)] font-medium",
  p: "text-[var(--text-medium)] leading-[var(--leading-medium)] font-[var(--font-family-jakarta)]",
  span: "text-[var(--text-small)] leading-[var(--leading-small)] font-[var(--font-family-jakarta)]",
};

  return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
};

export default Typography;

