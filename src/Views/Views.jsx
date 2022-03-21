import MainView from "../Component/MainView";
import SideBar from "../Component/SideBar";
import { ContextProvider } from "../Contexts/Context";

const Views = () => {
  return (
    <div className="d-flex">
      <ContextProvider>
        <SideBar />
        <MainView />
      </ContextProvider>
    </div>
  );
};

export default Views;
