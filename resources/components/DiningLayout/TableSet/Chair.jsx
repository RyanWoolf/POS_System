import React from 'react'

const Chair = ({ children, head }) => {
  function chairDirection(dir) {
    switch (dir) {
      case 'up':
        return 'rounded-t-3xl w-[60px] h-[15px]'
      case 'down':
        return 'rounded-b-3xl w-[60px] h-[15px]'
      case 'left':
        return 'rounded-l-3xl w-[15px] h-[60px]'
      case 'right':
        return 'rounded-r-3xl w-[15px] h-[60px]'

    }

  }
  return (
    <div className={`bg-button m-1.5 text-center ` + chairDirection(head)}>{children}</div>
  )
}

export default Chair