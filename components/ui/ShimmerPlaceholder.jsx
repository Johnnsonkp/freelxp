import { useEffect, useState } from "react";

export const ShimmerPlaceholder = () => {
  const [colorIndex, setColorIndex] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        className={`
          w-full h-full blur-[30px] transition-colors duration-700 ease-in-out rounded-full scale-150 opacity-0
          ${colorIndex === true ? "bg-gray-300 opacity-100" : "bg-gray-400 opacity-100"}`}
      />
    </div>
  );
};
