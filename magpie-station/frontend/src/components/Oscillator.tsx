import React from 'react'

type Props = {}

export default function Oscillator({}: Props) {

  const context = new AudioContext()

  const oscillator = context.createOscillator()
  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(440, context.currentTime)
  oscillator.connect(context.destination)

  const startOscillator = () => {
    oscillator.start()
  }

  const stopOscillator = () => {
    oscillator.stop()
  }

  return (
    <div>
      <button className="bg-blue-200 m-2 p-1" onClick={startOscillator}>Start Tone</button>
      <button className="bg-red-200 m-2 p-1" onClick={stopOscillator}>Stop Tone</button>
    </div>
  )
    
}