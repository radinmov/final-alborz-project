import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

export const Header = () => {
  return (
    <>
      <div className="header flex align-center space-between ">
        <div className="right">
          <div className="logo">
            <h3 className="ml-4 text-xl ali text-black ">Code - Academy </h3>
          </div>
        </div>
        <div className="left flex mr-4">
          <button className="mr-4 text-xl">Home</button>
          <button className="mr-4 text-xl"> service</button>
          <button className="mr-4 text-xl">Transaction</button>
          <Link target="__blanck" to={"http://ins-alborz.com"}>
            <button className="mr-4 text-xl">Develop</button>
          </Link>
        </div>
      </div>
    </>
  );
};
