import React from "react"

export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-0 h-screen w-full overflow-hidden">
      <div className="gradient-home-cover-top-left" />
      <div className="gradient-home-cover-right" />
      <div className="gradient-home-cover-middle" />
      <div className="gradient-home-cover-center" />
    </div>
  )
}
