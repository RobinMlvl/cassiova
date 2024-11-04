'use client'

import { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import confetti from 'canvas-confetti'

export default function WheelOfFortune({ enableSound = false }) {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [winner, setWinner] = useState(null)

  const data = [
    { option: 'FREE COFFEE', style: { backgroundColor: '#ff6b6b', textColor: 'white' } },
    { option: 'FREE BURGER', style: { backgroundColor: '#4ecdc4', textColor: 'white' } },
    { option: 'FREE DESSERT', style: { backgroundColor: '#45b7d1', textColor: 'white' } },
    { option: 'FREE DRINK', style: { backgroundColor: '#f9ca24', textColor: 'white' } },
    { option: '5% OFF', style: { backgroundColor: '#6ab04c', textColor: 'white' } },
    { option: 'TRY AGAIN', style: { backgroundColor: '#eb4d4b', textColor: 'white' } },
    { option: 'FREE FRIES', style: { backgroundColor: '#686de0', textColor: 'white' } },
    { option: 'FREE TABLE', style: { backgroundColor: '#be2edd', textColor: 'white' } },
  ]

  /* const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play().catch(error => console.log('Error playing sound:', error));
  };

  const playSpinSound = () => playSound('/spin-sound.mp3');
  const playWinSound = () => playSound('/win-sound.mp3'); */

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
      setWinner(null)
      /*       if (enableSound) playSpinSound() */
    }
  }


  useEffect(() => {
    if (winner !== null) {
      /*       if (enableSound) playWinSound() */
      confetti({
        particleCount: 1000,
        spread: 100,
        origin: { y: 0.7 }
      })
    }
  }, [winner])

  return (
    <>
      <div className="relative">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false)
            setWinner(data[prizeNumber].option)
          }}
          backgroundColors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6ab04c', '#eb4d4b', '#686de0', '#be2edd']}
          textColors={['white']}
          outerBorderColor="#ccc"
          outerBorderWidth={5}
          innerBorderColor="#f2f2f2"
          innerBorderWidth={20}
          innerRadius={0}
          radiusLineColor="#d8d8d8"
          radiusLineWidth={1}
          fontSize={16}
          textDistance={60}
        />
      
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleSpinClick}
          disabled={mustSpin}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mustSpin ? 'Spinning...' : 'SPIN'}
        </button>
      </div>
      {winner && (
        <div className="mt-6 text-center">
          <p className="text-2xl font-bold text-gray-800">You won: {winner}!</p>
        </div>
      )}
    </>
  )
}