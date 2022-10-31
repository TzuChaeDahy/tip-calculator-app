import Logo from "../images/logo.svg";

const Title = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" className="my-0 mx-auto" />
    </header>
  );
};

export default Title;
