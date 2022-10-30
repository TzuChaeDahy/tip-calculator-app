import Form from "./Form";
import Output from "./Output";

const Container = () => {
  return (
    <div className="p-5 bg-project-neutral-100 rounded-xl flex flex-col gap-10">
      <Form />
      <Output />
    </div>
  );
};

export default Container;
