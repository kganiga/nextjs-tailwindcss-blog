'use client'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'

interface QRCodeProps {}

const QRCodeGenerator: React.FC<QRCodeProps> = () => {
  const [currentURL, setCurrentURL] = useState<string>('')

  useEffect(() => {
    setCurrentURL(window.location.href)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-lg  p-4 leading-6 shadow-md dark:text-gray-400">
        <p className="mb-2 text-center">Scan QR Code to visit this page on mobile:</p>
        <QRCode value={currentURL} size={200} />
      </div>
    </div>
  )
}

export default QRCodeGenerator
