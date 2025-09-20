'use client'

import { useRouter } from 'next/navigation'
import { downloadGame } from '@/utils/download'

export default function DownloadButton() {
  const router = useRouter()

  const handleDownload = async () => {
    const result = await downloadGame()
    if (result.success) {
      // Trigger file download
      const link = document.createElement('a')
      link.href = 'https://rohan-005.itch.io/the-timber-curse'
      link.download = 'TheTimberCurse.zip'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Redirect to thank you page
      router.push('/thank-you')
    }
  }

  return (
    <>
    <button
      onClick={handleDownload}
      className="bg-blood-red hover:bg-red-900 text-white font-horror text-2xl md:text-3xl px-8 py-4 rounded-lg border-2 border-red-700 animate-pulse-glow transition-all duration-300 transform hover:scale-105"
    >
      DOWNLOAD NOW
    </button>
    <button
      className="bg-blood-red ml-10 hover:bg-red-900 text-blue-500 font-horror text-2xl md:text-3xl px-8 py-4 rounded-lg border-2 border-red-700 animate-pulse-glow transition-all duration-300 transform hover:scale-105"
    >
      <a href="https://play.unity.com/en/games/476dc65e-efc9-4879-8a21-17551fc0ba72/the-timber-curse">
          Web Player(Demo)
      </a>
    </button>
    </>
  )
}