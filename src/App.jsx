import Title from "./components/Title";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="flex flex-col gap-10 px-3 py-10">
      <Title />
      <Container />
    </div>
  );
};

export default App;
