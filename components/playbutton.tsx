'use client'
import { useRef, useState } from 'react'

interface AudioPlayerProps {
    src: string
    playDesc: string
}

export default function AudioPlayer({src, playDesc} : AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
  
    const handleToggle = () => {
      const audio = audioRef.current
      if (!audio) return
  
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
  
      setIsPlaying(!isPlaying)
    }

  return (
    <div>
      <button onClick={handleToggle} className="py-1 px-4 mt-2 mb-7 bg-transparent border-2 rounded-2xl hover:bg-gray-200/50 fixed top-4 right-4 z-50 max-w-[15rem]">
      {isPlaying ? '⏸ Click to pause' :`${playDesc}`}
      </button>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  )
}
