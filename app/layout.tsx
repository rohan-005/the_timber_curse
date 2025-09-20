import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Timber Curse - Horror Game',
  description:
    'A horror game set in the 1700s where Erika is trapped in a haunted forest with a cursed guide.',
  icons: {
    icon: '/ttc_icon.png',   // points to your file in the public folder
    shortcut: '/ttc_icon.png',
    apple: '/ttc_icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-parchment">
        {children}
      </body>
    </html>
  )
}
