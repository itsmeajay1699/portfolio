const MainWrapper = ({ children, className }) => {
  return (
    <div className={`w-full mx-auto md:px-16 px-8 ${className}`}>
      {children}
    </div>
  );
};

export default MainWrapper;
