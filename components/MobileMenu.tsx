import Image from "next/image";
import Link from "next/link";
import close from "../public/close.svg";
import logo from "../public/logo.png";
import email from "../public/email.svg";
import call from "../public/call.svg";
import { useRouter } from "next/router";
import WhereToBuyModal from "./WhereToBuyModal";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = (props) => {
  const { onClose } = props;
  const { pathname } = useRouter();
  const [modal, setModal] = useState(false);
  const toggleWhere = () => setModal(!modal);

  return (
    <div className="zoom-down">
      <div className="nav__wrapper">
        <div className="nav__mobile-close">
          <Image src={close} height={18} width={18} alt="" onClick={onClose} />
        </div>
        <nav>
          <ul className="nav__moblie-list">
            <li>
              <Image src={logo} width={120} height={60} alt=""></Image>
            </li>
            <li style={{ marginTop: "8px" }}>
              <Link href="/">
                <a
                  className={`nav__mobile_link ${
                    pathname === "/" ? "active" : ""
                  }`}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li style={{ marginTop: "10px" }}>
              <Link href="/our-story">
                <a
                  className={`nav__mobile_link ${
                    pathname === "/our-story" ? "active" : ""
                  }`}
                >
                  OUR STORY
                </a>
              </Link>
            </li>
            <li style={{ marginTop: "10px" }}>
              <Link href="/product">
                <a
                  className={`nav__mobile_link ${
                    pathname === "/product" || pathname === "/item-detail"
                      ? "active"
                      : ""
                  }`}
                >
                  PRODUCTS
                </a>
              </Link>
            </li>
            <li style={{ marginTop: "10px" }}>
              <Link href="/recipes">
                <a
                  className={`nav__mobile_link ${
                    pathname === "/recipes" || pathname === "/recipe-detail"
                      ? "active"
                      : ""
                  }`}
                >
                  RECIPES
                </a>
              </Link>
            </li>
            <li style={{ marginTop: "10px" }}>
              <Link href="/gallery">
                <a
                  className={`nav__mobile_link ${
                    pathname === "/gallery" ? "active" : ""
                  }`}
                >
                  GALLERY
                </a>
              </Link>
            </li>
            <li style={{ marginTop: "10px" }}>
              <Link href="/news">
                <a
                  className={`nav__mobile_link ${
                    pathname === "/news" ? "active" : ""
                  }`}
                >
                  NEWS
                </a>
              </Link>
            </li>
            <li style={{ marginTop: "10px" }}>
              <a
                href="# "
                onClick={() => {
                  toggleWhere();
                }}
                className="nav__mobile_link"
              >
                WHERE TO TRY
              </a>
            </li>
          </ul>
          <div className="nav__bottom">
            <div className="_row" style={{ marginLeft: 8 }}>
              <div style={{ width: "30px", paddingTop: "12px" }}>
                <Image src={call} width={24} height={24} alt="" />
              </div>
              <div>
                <span style={{ fontSize: "14px" }}>Hotline</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  <Link href="tel:(206) 356-7092">
                    <a>(206) 356-7092</a>
                  </Link>{" "}
                  or{" "}
                  <Link href="tel:(425) 589-8788">
                    <a>(425) 589-8788</a>
                  </Link>{" "}
                  or{" "}
                  <Link href="tel:(833) 324-4678">
                    <a>(833) 324-4678</a>
                  </Link>
                </span>
              </div>
            </div>
            <div className="_row" style={{ marginLeft: 8 }}>
              <div style={{ width: "30px", paddingTop: "12px" }}>
                <Image src={email} width={24} height={24} alt="" />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ fontSize: "14px" }}>Email</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  <Link href="mailto:chinsu-usa@msc.masangroup.com">
                    <a>chinsu-usa@msc.masangroup.com</a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <WhereToBuyModal isOpen={modal} toggle={toggleWhere} />
    </div>
  );
};

export default MobileMenu;
