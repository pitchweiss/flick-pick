import { FC, ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  return (
    <main className="container p-4 mx-auto mt-16 overflow-y-scroll max-w-7xl">
      {children}
    </main>
  );
};

export default MainContent;
