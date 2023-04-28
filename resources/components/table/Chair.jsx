import React from 'react'

const Chair = ({ children, direction }) => {
  function chairDirection(dir) {
    switch (dir) {
      case 'up':
        return 'rounded-t-3xl'
      case 'down':
        return 'rounded-b-3xl'
      case 'left':
        return 'rounded-l-3xl'
      case 'right':
        return 'rounded-r-3xl'

    }

  }
  return (
    <div className={`bg-button w-[70px] h-[20px] text-center `+chairDirection(direction)}>Chair {children}</div>
  )
}

export default Chair