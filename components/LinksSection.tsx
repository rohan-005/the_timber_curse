import Link from 'next/link'
import { Download, Globe, ExternalLink } from 'lucide-react'

export default function LinksSection() {
  const links = [
    {
      title: "Download",
      description: "Get the full game",
      icon: <Download size={24} />,
      href: "#download",
      color: "bg-blood-red hover:bg-red-900"
    },
    {
      title: "Play Online",
      description: "Web version",
      icon: <Globe size={24} />,
      href: "https://play.unity.com/en/games/476dc65e-efc9-4879-8a21-17551fc0ba72/the-timber-curse",
      color: "bg-spooky-green hover:bg-green-900"
    },
    {
      title: "Itch.io",
      description: "Visit our store page",
      icon: <ExternalLink size={24} />,
      href: "https://rohan-005.itch.io/the-timber-curse",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ]

  return (
    <section id="links" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 bg-opacity-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-horror text-3xl md:text-4xl text-blood-red text-center mb-12">
          GET THE GAME
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${link.color} text-white p-6 rounded-lg border-2 border-gray-700 transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center`}
            >
              <div className="mb-4">
                {link.icon}
              </div>
              <h3 className="font-horror text-xl mb-2">{link.title}</h3>
              <p className="text-sm">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}