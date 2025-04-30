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
          className={`flex text-xs lg:text-base items-center justify-center ${className}`}
        >
          {text ? text : "link-button"}
          {children}
        </Link>
      ) : (
        <button
          className={`flex text-xs lg:text-base items-center justify-center ${className}`}
          onClick={onClick}
        >
          {text ? text : "default-button"}
          {children}
        </button>
      )}
    </>
  );
};

export default CallToActionBtn;
