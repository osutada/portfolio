import { ReactNode } from "react";
import { Element } from "react-scroll";

type Props = {
  name: string;
  className?: string;
  children: ReactNode;
};

export default function Section(props: Props) {
  const { name, children, className } = props;

  const defaultClassName = "min-h-screen flex items-center justify-center p-10";
  const combinedClassName = `${defaultClassName} ${className}`.trim();
  return (
    <>
      <Element name={name} className={combinedClassName}>
        {children}
      </Element>
    </>
  );
}
