import React from 'react'

import { GreetingsContainer } from './styled'

export const Greetings: React.FC = () => {
  return (
    <GreetingsContainer>
      <div className="wrapper">
        <img src="static://assets/images/react.svg" alt="" />
        <div className="message">
          <h1>Electron + React + TypeScript</h1>
          <h3>System information:</h3>
          <p>Platform: {electron.os.platform()}</p>
          <p>Arch: {electron.os.arch()}</p>
          <p>Release: {electron.os.release()}</p>
        </div>
      </div>
    </GreetingsContainer>
  )
}
