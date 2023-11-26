"use client";
import Link from "next/link";
import { FC } from "react";
import styles from "./MenuLink.module.css";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  item: {
    title: string;
    path: string;
    icon: React.ReactNode;
  };
}

const MenuLink: FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
