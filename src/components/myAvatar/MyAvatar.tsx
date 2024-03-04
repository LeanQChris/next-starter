"use client"
import React from 'react'
import { Avatar } from '@readyplayerme/visage';

interface AvatarProps {
    modelSrc: string;
}

export default function MyAvatar({ modelSrc }: AvatarProps) {
    return (
        <Avatar className='absolute' modelSrc={modelSrc} />
    )
}
