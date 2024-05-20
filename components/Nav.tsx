"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  path: string;
}

const links: Link[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="flex gap-8">
      {links.map((link: Link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
