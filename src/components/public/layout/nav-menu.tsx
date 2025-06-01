"use client";

import { Button } from "@/components/ui/button";
import { navbarLinks } from "@/data/nav-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavMenu() {
  const pathName = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {navbarLinks.map((link) => {
        const isActive = pathName === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={` text-gray-700 hover:text-orange-600 transition-colors ${
              isActive
                ? "text-orange-600 font-semibold border-b-2 border-orange-600"
                : ""
            } `}
            title={link.label}
            aria-current={isActive ? "page" : undefined}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        );
      })}

      <Button className="bg-orange-600 hover:bg-orange-700">Join Us</Button>
    </nav>
  );
}
