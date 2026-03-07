'use client'

import Image from 'next/image'

const LETTER_COUNT = 24

export function AlphabetExample() {
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-[10px]">
      {Array.from({ length: LETTER_COUNT }, (_, i) => {
        const num = i + 1
        return (
          <div
            key={num}
            className="group relative flex aspect-square cursor-pointer items-center justify-center"
          >
            <Image
              src={`/images/alphabet/${num}.webp`}
              alt={`Letter ${num}`}
              width={80}
              height={80}
              className="w-[60%] transition-opacity duration-300 group-hover:opacity-0"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Image
                src={`/images/alphabet/${num}a.webp`}
                alt={`Letter ${num} dyslexic view`}
                width={80}
                height={80}
                className="w-[60%]"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
