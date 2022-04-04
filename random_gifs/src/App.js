import Random1 from "./components/random_gif";
import Search1 from "./components/search_gif";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12">
          <Random1 />
        </div>
        <div className="col-md-6 col-12">
          <Search1/>
        </div>
      </div>
    </div>
  );
}

export default App;
