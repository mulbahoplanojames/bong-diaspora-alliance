import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/culture", label: "Cultural Hub" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Study Resources" },
];
const communityLinks = [
  { href: "#", label: "Student Forum" },
  { href: "#", label: "Mentorship" },
  { href: "#", label: "Alumni Network" },
  { href: "#", label: "Success Stories" },
];
const connectLinks = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "WhatsApp Group" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Newsletter" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
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
                <h3 className="font-bold text-lg">Bong Diaspora Alliance</h3>
                <p className="text-sm text-gray-400">Rwanda Chapter</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting Bong County students in Rwanda through culture,
              education, and community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bong Diaspora Alliance of Rwanda. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
