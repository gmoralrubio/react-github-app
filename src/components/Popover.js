import React, { useState } from 'react'
import Card from './Card'

export default function Popover({ msg }) {
  return (
    <Card className="absolute left-1/2 top-[-50px] z-10 -translate-x-1/2 p-2">
      <p className="text-red-500">{msg}</p>
    </Card>
  )
}
// export default function Popover({ msg, isShowing }) {
//   const [intervalId, setIntervalId] = useState(0)
//   const [showPopover, setShowPopover] = useState(false)
//   if (intervalId) {
//     clearInterval(intervalId)
//     setIntervalId(0)
//     return
//   }
//   setShowPopover(true)
//   const newIntervalId = setInterval(() => {
//     setShowPopover(false)
//   }, 2000)
//   setIntervalId(newIntervalId)
//   if (!isShowing) {
//     return
//   }

// return (
//   <Card className="absolute left-1/2 top-[-50px] z-10 -translate-x-1/2 p-2">
//     <p className="text-red-500">{msg}</p>
//   </Card>
// )
// }
