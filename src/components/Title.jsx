import Logo from "../images/logo.svg";

const Title = () => {
  const imageStyles = "my-0 mx-auto";
  return (
    <header>
      <img src={Logo} alt="Logo" className={imageStyles} />
    </header>
  );
};

export default Title;
