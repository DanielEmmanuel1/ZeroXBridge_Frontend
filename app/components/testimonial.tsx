"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import GlowingProtractorSVG from "./rippleSVG";

import { motion } from 'framer-motion';

interface Testimonial {
  id: number
  content: string
  author: {
    name: string
    image: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Traditional bridges require moving assets between chains, exposing them to security risks like hacks and exploits. ZeroXBridge eliminates this by keeping your collateral securely locked on Ethereum while unlocking liquidity on Starknet.",
    author: {
      name: "Elon White",
      image: "/images/testimonial-card-profile.png",
    },
  },
  {
    id: 2,
    content:
      "Traditional bridges require moving assets between chains, exposing them to security risks like hacks and exploits. ZeroXBridge eliminates this by keeping your collateral securely locked on Ethereum while unlocking liquidity on Starknet.",
    author: {
      name: "Elon White",
      image: "/images/testimonial-card-profile.png",
    },
  },
  {
    id: 3,
    content:
    "Traditional bridges require moving assets between chains, exposing them to security risks like hacks and exploits. ZeroXBridge eliminates this by keeping your collateral securely locked on Ethereum while unlocking liquidity on Starknet.",
    author: {
      name: "Elon White",
      image: "/images/testimonial-card-profile.png",
    },
  },
 
]

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleManualNavigation = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full bg-[#09050E] relative py-[8rem] px-6">
      <div className="absolute -top-[280px] bg-blend-normal left-0 z-0">
        <Image
          src="/images/ellipse.png"
          alt="Glow Effect"
          width={500}
          height={500}
          className="w-[800px] h-[800px] z-30"
        />
      </div>
    <div className="w-[90%] min-h-[647px] py-8 mx-auto bg-[#09050E] overflow-hidden rounded-3xl z-80 relative">
      
      {/* Header */}
      <div className="text-center pt-7 space-y-2 w-[550px] mx-auto">
        <h2 className="text-5xl font-bold bg-howitworks text-transparent leading-[65px] font-manrope bg-clip-text">
          Hear what people are saying about us
        </h2>
        <p className="text-[#D4D4D4] text-xl font-normal font-roboto-serif">Don&apos;t be left out of this Revolution</p>
      </div>

      {/* Floating Profile Images */}
      {mounted && (
          <div className="relative w-[60%] 2xl:w-[56%] mx-auto h-48 z-10">
            <div className="absolute inset-0">
                <div className="absolute top-2 left-[134px] w-12 h-12 -translate-x-1/2 -translate-y-1/2">
                    <Image
                    src="/images/testimonial-float-1.png"
                    alt=""
                    width={42}
                    height={45}
                    className=""
                    />
                </div>
                <div className="absolute top-10 right-48 w-12 h-12 translate-x-1/2 -translate-y-1/2">
                    <Image
                    src="/testimonial-float-2.png"
                    alt=""
                    width={31}
                    height={34}
                    className=""
                    />
                </div>
                <div className="absolute top-24 left-[140px] w-12 h-12 -translate-x-1/2 translate-y-1/2">
                    <Image
                    src="/testimonial-float-3.png"
                    alt=""
                    width={34}
                    height={37}
                    className=""
                    />
                </div>
                <div className="absolute top-24 right-[70px] w-12 h-12 translate-x-1/2 translate-y-1/2">
                    <Image
                    src="/testimonial-float-2.png"
                    alt=""
                    width={25}
                    height={27}
                    className=""
                    />
                </div>
            </div>
          </div>
    
      )}

      {/* Glowing SVG Lines */}
      <div className="absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <GlowingProtractorSVG />
      </div>

      {/* Testimonial Cards */}
      <div className="absolute bottom-[4rem] w-full mx-auto px-16 2xl:px-20 z-50">
        <div className="relative h-64 flex justify-center items-center">
          {testimonials.map((testimonial, index) => {
            const offset = (index - currentSlide + testimonials.length) % testimonials.length
            let translateX = "0%"
            let zIndex = 0
            let opacity = 1

            if (offset === 0) {
              zIndex = 3
            } else if (offset === 1 || offset === testimonials.length - 1) {
              translateX = offset === 1 ? "105%" : "-105%"
              zIndex = 2
              opacity = 0.7
            } else {
              translateX = offset === 2 ? "210%" : "-210%"
              zIndex = 1
              opacity = 0.4 
            }

            return (
              <motion.div
                key={testimonial.id}
                className={`absolute w-[35%] h-[243px] border-[0.4px] border-[#8B8B8B] py-4 px-8 bg-grid-pattern rounded-2xl font-roboto-serif ${
                  offset === 0 ? "bg-[#2F1F4C]" : "bg-[#09050E] bg-opacity-60"
                } backdrop-blur-sm`}
                initial={false}
                animate={{
                  x: translateX,
                  zIndex,
                  opacity,
                }}
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 20, duration: 0.3 },
                  opacity: { duration: 0.5 },
                }}
              >
                <Image
                  alt="quotes icon"
                  src={"/images/quotes.svg"}
                  width={32}
                  height={32}
                  className="mt-1 top-4 left-1 absolute "
                />
                <div className="text-[#D4D4D4] font-normal text-sm mt-[30px] leading-relaxed ">
                  {testimonial.content}
                </div>
                <div className="flex items-center bottom-2 absolute gap-2">
                  <Image
                    src={testimonial.author.image || "/images/testimonial-card-profile.png"}
                    alt={testimonial.author.name}
                    width={35}
                    height={37}
                    className="rounded-full"
                  />
                  <span className="text-gray-300 text-xs font-normal">{testimonial.author.name}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Navigation Lines */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((index) => (
            <motion.button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-12 h-[2px] bg-gray-700`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                <motion.div
                    className="h-full bg-[#A26DFF]"
                    initial={{ width: index === currentSlide ? "100%" : "0%" }}
                    animate={{ width: index === currentSlide ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        ))}
      </div>
    </div>
    </div>
  )
}
