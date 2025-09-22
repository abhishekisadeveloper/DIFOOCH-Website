
const Typography = ({ variant = "p", children, className }) => {
  const Tag = variant;

  

  return <Tag className={`${className}`}>{children}</Tag>;
};

export default Typography;

