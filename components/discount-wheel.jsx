"use client"

import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { useForm } from 'react-hook-form'
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Star } from "lucide-react"
import Image from 'next/image';

const data = [
  { option: 'No discount', style: { backgroundColor: '#ff6961', textColor: 'white' } },
  { option: '5% OFF', style: { backgroundColor: '#77dd77', textColor: 'white' } },
  { option: '10% OFF', style: { backgroundColor: '#fdfd96', textColor: 'black' } },
  { option: '15% OFF', style: { backgroundColor: '#84b6f4', textColor: 'white' } },
  { option: '20% OFF', style: { backgroundColor: '#fdcae1', textColor: 'black' } },
  { option: '25% OFF', style: { backgroundColor: '#b39eb5', textColor: 'white' } },
]

export default function DiscountWheel() {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [result, setResult] = useState('')
  const [showWheel, setShowWheel] = useState(false)
  const [rating, setRating] = useState(0)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
      setResult('')
    }
  }

  const onSubmit = (data) => {
    console.log(data) // Here you would typically send this data to your backend
    setShowWheel(true)
  }

  return (
    <Card className="w-full max-w-md mx-auto rounded-t-lg">
      <div className='relative w-full h-60 bg-dark-gray rounded-t-lg'>
      <Image
        src="https://media-cdn.tripadvisor.com/media/photo-s/1f/2c/fa/a7/burger-and-fish-and-chips.jpg"
        alt="Description of the image"
        layout="fill" // Use fill layout for responsive sizing
        objectFit="cover"
        className="rounded-t-lg"
      />
      </div>
      <CardHeader>
        <CardTitle>Spin & Win Discounts!</CardTitle>
        <CardDescription>Rate us and enter your email for a chance to win amazing discounts.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        {!showWheel ? (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="test@test.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label>Rate your experience</Label>
              <div className="flex justify-center space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer w-10 h-10 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full bg-yellow-300 border-black text-black border">Submit & Play</Button>
          </form>
        ) : (
          <>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                setMustSpin(false)
                setResult(`You won: ${data[prizeNumber].option}`)
              }}
              backgroundColors={['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50']}
              textColors={['#ffffff']}
            />
            <Button onClick={handleSpinClick} disabled={mustSpin}>
              {mustSpin ? 'Spinning...' : 'SPIN'}
            </Button>
            {result && (
              <div className="text-center font-bold text-lg mt-4" aria-live="polite">
                {result}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}