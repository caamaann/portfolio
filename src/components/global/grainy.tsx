import React from "react"

export default function GrainyBackground() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-0 h-screen w-full">
      <div className="bg-grainy bg-32 h-full w-full bg-repeat opacity-[0.075]" />
    </div>
  )
}
