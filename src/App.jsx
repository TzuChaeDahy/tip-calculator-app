import Title from "./components/Title";
import Container from "./components/Container";

const App = () => {
  const appContainerStyles = "flex flex-col gap-10 px-3 py-10";
  return (
    <div className={appContainerStyles}>
      <Title />
      <Container />
    </div>
  );
};

export default App;
