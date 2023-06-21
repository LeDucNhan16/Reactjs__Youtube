import Header from "../Component/Header";

function DefaultLayoutYous({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayoutYous;
