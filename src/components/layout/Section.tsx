import { ReactNode } from "react";
import { Element } from "react-scroll";

type Props = {
  name: string;
  className?: string;
  children: ReactNode;
};

export default function Section(props: Props) {
  const { name, children, className } = props;
  return (
    <>
      <Element
        name={name}
        className={`min-h-svh flex items-center justify-center p-10 ${className}`.trim()}
      >
        {children}
      </Element>
    </>
  );
}
