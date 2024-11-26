import { ReactNode } from "react";
import { Link as ReactScroll } from "react-scroll";

interface ScrollLinkProps {
  to: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const ScrollLink = ({ to, children, className, onClick }: ScrollLinkProps) => {
  return (
    <ReactScroll
      to={to}
      smooth={true}
      duration={500}
      offset={-40}
      className={className}
      onClick={onClick}
    >
      {children}
    </ReactScroll>
  );
};

export default ScrollLink;
