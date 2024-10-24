import { useEffect, useRef } from 'react'
import { SoundOff } from './SoundOff.jsx'
import { SoundOn } from './SoundOn.jsx'
import { useAudio } from '../hooks/useAudio.js'

export function SpookyAudio () {
  const audioRef = useRef(null)
  const { isActive, handleToggle } = useAudio()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4
    }

    if (!isActive) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }, [isActive])

  return (
    <>
      <button onClick={() => handleToggle()} className='bg-orange-700 p-2 rounded-lg'>
        {isActive ? <SoundOn /> : <SoundOff />}
      </button>
      <audio loop ref={audioRef} src='/spooky-halloween.mp3' />
    </>
  )
}
