import Navbar from "./components/Navbar";
import SmoothScrollLenis from "./pages/SmoothScrollLenis";

function App() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 bg-zinc-950">
        <Navbar />
      </div>
      <div className="mt-14">
        <SmoothScrollLenis />
      </div>
    </>
  );
}

export default App;
