import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navbarLinks } from "@/data/nav-data";
import NavMenu from "./nav-menu";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10  relative overflow-hidden rounded-full ">
              <Image
                src="/logo.jpeg"
                alt="logo"
                fill
                className="w-full h-full"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">
                Bong Diaspora Alliance
              </h1>
              <p className="text-sm text-gray-600">Rwanda Chapter</p>
            </div>
          </div>
          <NavMenu />

          {/* Mobile Navigation Menu  */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden block">
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10  relative overflow-hidden rounded-full ">
                    <Image
                      src="/logo.jpeg"
                      alt="logo"
                      fill
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-gray-900">
                      Bong Diaspora Alliance
                    </h1>
                    <p className="text-sm text-gray-600">Rwanda Chapter</p>
                  </div>
                </div>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4 px-8">
                {navbarLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-700 hover:text-orange-600 transition-colors text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
