import React, { useState } from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import logo from "../public/logo.png";
import { BsCart2, BsTextParagraph } from "react-icons/bs";
import { useMedia } from "../utils/use-media";
import Link from "next/link";
import close from "../public/close.svg";
import email from "../public/email.svg";
import call from "../public/call.svg";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import NoneSSRWrapper from "./NoneSSRWrapper";
import MobileMenu from "./MobileMenu";
import OverlayMenu from "./OverLayMenu";
import { useRouter } from "next/router";
import WhereToBuyModal from "./WhereToBuyModal";

type Props = {};

const Header: React.FC<Props> = () => {
  const { pathname } = useRouter();
  const mobile = useMedia("(max-width: 600px)");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  const [modal, setModal] = useState(false);
  const toggleWhere = () => setModal(!modal);
  if (mobile)
    return (
      <>
        <div className="header_mobile">
          <BsTextParagraph className="menu_icon_mobile" onClick={toggleMenu} />
          <OverlayMenu open={showMenu} onClose={toggleMenu} right={true}>
            <MobileMenu onClose={toggleMenu} />
          </OverlayMenu>
          <nav className="nav__pc">
            <div className="menu_list">
              <div>
                <Image src={logo} width={120} height={60} alt=""></Image>
              </div>
            </div>
          </nav>
          <BsCart2 className="cart_icon_mobile" />
        </div>
      </>
    );
  else
    return (
      <div className="header">
        <Dropdown
          isOpen={dropdownOpen}
          onMouseOver={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          toggle={toggle}
        >
          <BsTextParagraph className="menu_icon" onClick={toggle} />
          <DropdownMenu className="dropdown_info">
            <div className="_row" style={{ marginLeft: 8 }}>
              <div style={{ width: "30px", paddingTop: "12px" }}>
                <Image src={call} width={24} height={24} alt="" />
              </div>
              <div>
                <span style={{ fontSize: "14px" }}>Hotline</span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  <a href="tel:(206) 356-7092">(206) 356-7092</a> or{" "}
                  <a href="tel:(425) 589-8788">(425) 589-8788</a> or{" "}
                </span>
                <br />
                <span style={{ fontSize: "14px" }}>
                  <a href="tel:(833) 324-4678">(833) 324-4678</a>
                </span>
              </div>
            </div>
            <div className="_row" style={{ marginLeft: 8, marginTop: 8 }}>
              <div style={{ width: "30px", paddingTop: "12px" }}>
                <Image src={email} width={24} height={24} alt="" />
              </div>
              <div>
                <span style={{ fontSize: "14px" }}>Email</span>
                <br />
                <span style={{ fontSize: "14px", marginRight: 8 }}>
                  <a href="mailto:chinsu-usa@msc.masangroup.com">
                    chinsu-usa@msc.masangroup.com
                  </a>
                </span>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>

        <nav className="nav__pc">
          <div className="menu_list">
            <NavItem text="Home" href="/" active={pathname === "/"}></NavItem>
            <NavItem
              text="Our story"
              href="/our-story"
              active={pathname === "/our-story"}
            ></NavItem>
            <NavItem
              text="Products"
              href="/product"
              active={pathname === "/product" || pathname === "/item-detail"}
            ></NavItem>
            <NavItem
              text="Recipes"
              href="/recipes"
              active={pathname === "/recipes" || pathname === "/recipe-detail"}
            ></NavItem>
            <div>
              <Image src={logo} width={200} height={100} alt=""></Image>
            </div>
            <NavItem
              text="Gallery"
              href="/gallery"
              active={pathname === "/gallery"}
            ></NavItem>
            <NavItem
              text="News"
              href="/news"
              active={pathname === "/news"}
            ></NavItem>
            <NavItem text="Where to try" href="# " onClick={()=>{
              toggleWhere();
            }}></NavItem>
          </div>
        </nav>

        <BsCart2 className="cart_icon" />
        <WhereToBuyModal isOpen={modal} toggle={toggleWhere} />
      </div>
    );
};

export default Header;
