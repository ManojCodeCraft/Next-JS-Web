import React from 'react'
import ChatHeader from './chatComponents/ChatHeader'
function Chatlayout({children}) {
  return (
    <div>
    <div>
      Chatlayout
      <ChatHeader/>

    </div>
    <div>{children}</div>
    </div>
  )
}

export default Chatlayout
