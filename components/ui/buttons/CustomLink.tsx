import Link from 'next/link';
import { useRouter } from 'next/router';

export interface CustomLinkProps {
  title: string;
  href: string;
  className?: string;
}

export interface CustomMobileLinkProps {
  title: string;
  href: string;
  className?: string;
  toggle: () => void;
}

export const CustomLink = ({ title, href, className }: CustomLinkProps) => {
  const router = useRouter();
  const highlight = `bg-[#26184A] dark:bg-[#ec5899]`;
  const highlightText = `text-[#26184A] dark:text-[#ec5899]`;

  return (
    <Link
      href={href}
      className={`${className} 
        relative group px-5 
        cursor-pointer h-[100%] overflow-hidden
        ${router.asPath === href ? highlightText : "dark:text-light"}
        group-hover:highlightText
        `
      }
      style={{
        fontWeight: router.asPath === href && "semi-bold" 
      }}
    >
      {title}
      <span
        className={`
          ${router.asPath === href ? "w-full" : "w-0"} 
          h-[2.5px] inline-block absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 
          z-10 bg-dark !hover:w-full
          ${router.asPath === href && highlight}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const CustomMobileLink = ({ title, href, className = "", toggle }: CustomMobileLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group border-[#EBF0F5] px-8 text-light dark:text-dark mt-1`}
      style={{
        background:
          router.asPath === href
            ? "linear-gradient(360deg, rgba(107, 216, 111, 0.8) -94.82%, rgba(49, 239, 195, 0) 70.64%)"
            : "transparent",
        color: router.asPath === href && "rgba(22, 163, 73, 1)",
      }}
    >
      {title}
      <span style={{backgroundColor: 'rgba(107, 216, 111, 1)'}}
        className={`h-[3px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light overflow-hidden`}
      >
        &nbsp;
      </span>
    </button>
  );
};