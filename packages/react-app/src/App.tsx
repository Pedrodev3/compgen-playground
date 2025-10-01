import "./App.css";
import ButtonManualDemo from "./components/manual/ButtonManualDemo";
import ButtonCliButton from "./components/compgen/button-cli/Buttoncli";
import ButtonCpButton from "./components/compgen/button-cp/Buttoncp";
import ButtonFeButton from "./components/compgen/button-fe/Buttonfe";

function App() {
  return (
    <main className="app">
      <ButtonManualDemo />
      <ButtonCliButton />
      <ButtonFeButton />
      <ButtonCpButton />
    </main>
  );
}

export default App;
