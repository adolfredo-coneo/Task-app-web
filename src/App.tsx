import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListView from "./components/ListView";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <ListView />
        <Footer />
      </div>
    </div>
  );
}

export default App;
