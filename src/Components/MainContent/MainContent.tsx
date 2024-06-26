import { FC, ReactNode, memo } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: FC<MainContentProps> = ({ children }) => {
  return (
    <main className="container p-4 mx-auto mt-16 max-w-7xl">{children}</main>
  );
};

const MemoizedMainContent = memo(MainContent);
export default MemoizedMainContent;
