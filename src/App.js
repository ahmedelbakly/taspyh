import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App container-fluid pt-5 pb-5">
      <h1 className="w-50 p-2 title1">يسم الله الرحمن الرحيم </h1>
      <h2 className="w-50 p-2 pb-5 title">اذكر الله</h2>
      <Card />

      <h2 className="w-50 p-4 mt-5 title1">الحمد لله رب العالمين </h2>
    </div>
  );
}

export default App;
