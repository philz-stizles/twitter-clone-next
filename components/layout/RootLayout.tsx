import Sidebar from "./Sidebar";
import FollowBar from "./FollowBar";
import Main from "./Main";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <Main>{children}</Main>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
