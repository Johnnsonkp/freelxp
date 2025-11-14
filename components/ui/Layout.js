export const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light2 p-32 dark:bg-dark xl:p-15 lg:p-16 md:p-10 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
