import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    disabled?: boolean
}

export default function Button({ title, disabled, ...rest }: ButtonProps) {
    return (
        <button {...rest} className={`${disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded-full`}>
            {title}
        </button>
    )
}
