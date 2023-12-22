import { lazy } from "react";
const Content = lazy(() => import("./components/Content"));
const Sidebar = lazy(() => import("./components/Sidebar"));

const App = () => {
  return (
    <div
      className="
        bg-neutral-magnolia h-screen 
        
        md:grid md:items-center md:justify-center"
    >
      <div
        className="
          md:bg-neutral-white md:p-3 md:grid md:grid-cols-12 md:rounded-lg md:drop-shadow-1xl md:w-[46.875rem] md:h-[31.25rem] md:relative"
      >
        <div
          className="
            md:col-span-4"
        >
          <Sidebar />
        </div>
        <div
          className="
            md:col-span-8"
        >
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
