import { twMerge } from "tailwind-merge"; 
export const Typography = ({ variant = "p", children, className })=> {
  const Tag = variant;
  const styles = {
  h1: "text-mobile-heading-large leading-mobile-heading-large sm:text-heading-large sm:leading-heading-large font-jakarta tracking-[1px] font-extrabold text-primary",
  h2: "text-mobile-heading-medium leading-mobile-heading-medium sm:text-heading-medium sm:leading-heading-medium tracking-[0px] font-jakarta font-bold text-black1",
  h3: "text-mobile-heading-small leading-mobile-heading-small sm:text-heading-small sm:leading-heading-small font-jakarta font-bold",
  h4: "text-small leading-small sm:text-small sm:leading-small font-jakarta font-semibold tracking-[0px] text-primary",
  p: "text-small leading-small sm:text-medium sm:leading-medium tracking-[0px] font-medium font-jakarta",
  span: "font-jakarta",
};

  return <Tag className={twMerge(styles[variant], className)}>{children}</Tag>;
};



