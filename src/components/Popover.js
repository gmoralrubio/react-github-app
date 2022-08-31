import React, { useState } from 'react'
import Card from './Card'

export default function Popover({ msg }) {
  return (
    <Card className="absolute left-1/2 top-[-50px] z-10 -translate-x-1/2 p-2">
      <p className="text-red-500">{msg}</p>
    </Card>
  )
}
