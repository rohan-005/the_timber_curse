import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Github, Gamepad } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/_rohan.005/"
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={24} />,
      href: "https://x.com/itsrohan005"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/rohan005/"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/rohan-005"
    },
    {
      name: "Unity Profile",
      icon: <Gamepad size={24} />, // Gamepad as a Unity/profile icon
      href: "https://play.unity.com/en/user/37417cba-6186-4c44-a28d-699258161de6"
    }
  ]

  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-black bg-opacity-70">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-horror text-2xl md:text-3xl text-blood-red mb-6">
          THANK YOU FOR PLAYING
        </h3>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-parchment hover:text-blood-red transition-colors duration-300"
              aria-label={link.name}
              target="_blank"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}  &nbsp;&nbsp;  Frosthowl  &nbsp;&nbsp; (All rights reserved)
        </p>
      </div>
    </footer>
  )
}
