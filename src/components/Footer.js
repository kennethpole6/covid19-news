import React from "react";
import { Link } from "@nextui-org/react";
import "./footer.css";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <BiCopyright size={18} />
        <p>All rights reserved | Made and maintained by </p>
      </div>
      <Link href="https://kennethpole6.vercel.app/">
        Kenneth Pole &#128151;
      </Link>
    </footer>
  );
};

export default Footer;
