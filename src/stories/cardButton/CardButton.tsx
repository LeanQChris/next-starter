import React from 'react'
import Card from '../card/Card'
import { Button } from '../button/Button'

export default function CardButton({ cardLabel, buttonLabel }: {
    cardLabel: string, buttonLabel: string
}) {
    return (
        <div>
            <Card label={cardLabel} />
            <Button label={buttonLabel} />
        </div>
    )
}
