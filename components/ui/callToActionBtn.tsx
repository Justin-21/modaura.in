import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  href?: string;
  variant?: "default" | "link";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const CallToActionBtn = ({
  text,
  href,
  className,
  onClick,
  variant,
  children,
}: Props) => {
  return (
    <>
      {variant === "link" ? (
        <Link
          href={href!}
          className={`cursor-pointer flex text-xs lg:text-base items-center justify-center ${className}`}
        >
          {children}
          {text ? text : "link-button"}
        </Link>
      ) : (
        <button
          className={`cursor-pointer flex text-xs lg:text-base items-center justify-center ${className}`}
          onClick={onClick}
        >
          {children}
          {text ? text : "default-button"}
        </button>
      )}
    </>
  );
};

export default CallToActionBtn;
