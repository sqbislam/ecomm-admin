import { UserButton } from "@clerk/nextjs";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <h1>Store switcher placeholder</h1>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
