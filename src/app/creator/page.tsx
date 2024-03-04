"use client"
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';
import React from 'react'

export default function page() {
    return <AvatarCreator
        subdomain="user"
        style={{ width: '100%', height: '100vh', border: 'none' }}
    />;
}
``