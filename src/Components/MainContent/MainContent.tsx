import { FC, ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  return <main className="container mx-auto mt-16">{children}</main>;
};

export default MainContent;
