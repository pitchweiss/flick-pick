import { FC, memo } from "react";

import { VideoCameraIcon } from "@heroicons/react/24/solid";

const Header: FC = () => {
  return (
    <nav className="fixed top-0 z-10 w-full shadow-lg bg-darker-gray">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <VideoCameraIcon className="w-8 h-8 text-red-600" />
            </div>
            <div className="pl-2 text-xl font-extrabold text-off-white">
              Flick Pick
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
