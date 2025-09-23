export const Button = ({variant = "primary", children, className, icon}) => {
    const staticStyles = "flex items-center gap-2 cursor-pointer hover:border-[1px] hover:border-primary border-[1px] border-transparent transition-all duration-300";
    const styles = {
        primary: "bg-accent text-black1 py-2 px-[18px] rounded-2xl sm:border-[1px] sm:border-primary sm:py-4 sm:px-6 text-small tracking-[0] font-bold font-family-jakarta",
        secondary: "bg-lightGreen px-[16px] py-2 w-full text-black1 rounded-[8px] text-small tracking-[0] font-bold font-family-jakarta",
        trialBtn: "bg-white px-[15.61px] py-[7.8px] text-black1 rounded-[7.8px] text-[13.66px] leading-[20.49px] tracking-[0] font-bold font-family-jakarta",
    }
    return (
        <button className={`${staticStyles} ${styles[variant]} ${className}`}>
            {icon && <img src={icon} alt="rocket icon" />}
            {children}
        </button>    
    )
};

