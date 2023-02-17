import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { useMedia } from "../utils/use-media";

type Props = {
  href?: any;
  text?: string;
  active?: boolean;
  hideLink?: boolean;
  onClick?: any;
  fontSize?: string;
  space?: boolean;
};

const NavItem = ({
  href,
  text,
  active,
  fontSize = "24px",
  hideLink = false,
  onClick,
  space= false,
}: Props) => {
  if (hideLink)
    return (
      <div style={{ fontSize: fontSize, position: "relative" }}>{text}</div>
    );
  return (
    <Link href={href}>
      <a
        className={`
              nav_link ${active ? "active" : ""}
              `}
        style={{ fontSize: fontSize, margin: space? "16px": "" }}
        onClick={onClick}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;
