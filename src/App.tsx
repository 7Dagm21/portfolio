import { Button } from "@/components";
import HomePage from "@/pages/HomePage";

const App = () => {
  return (
    <div>
      <p className="text-2xl text-blue-400">Hello world</p>
      <Button label="Button" />
      <HomePage />
    </div>
  );
};

export default App;
