import { FC } from "react";

import { VideoCameraIcon } from "@heroicons/react/24/solid";

const Header: FC = () => {
  return (
    <nav className="bg-darker-gray shadow-lg fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <VideoCameraIcon className="h-8 w-8 text-red-600" />
            </div>
            <div className="text-off-white font-extrabold text-xl pl-2">
              Flick Pick
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
