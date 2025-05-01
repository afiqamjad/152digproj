'use client'
import { useRef, useState } from 'react'

export default function AudioPlayer() {
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
      {isPlaying ? '⏸ Click to pause' :'Listen to the sounds of nature while you scroll!'}
      </button>
      <audio ref={audioRef} src="/audio/nature-ambience-323729.mp3" preload="auto" />
    </div>
  )
}
