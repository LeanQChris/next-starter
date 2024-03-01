import Image from 'next/image'
import React from 'react'

interface CardProps {
    label: string,
    image?: string,
    content: string,
}

export default function Card({ label, image, content }: CardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {image && <Image width={1000} height={200} className="w-full" src={image} alt="Sunset in the mountains" />}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{label}</div>
                <p className="text-gray-700 text-base">{content} </p>
            </div>
        </div>
    )
}
