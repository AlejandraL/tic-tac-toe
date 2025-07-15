import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleChangeIsEditing() {
    setIsEditing(editing => !editing)

    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChangePlayerName(event) {
    setPlayerName(event.target.value)
  }

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {!isEditing ?
            <span className="player-name">{playerName}</span>
          :
            <input type="text" value={playerName} onChange={handleChangePlayerName} required/>
          }
          
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleChangeIsEditing}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </li>
    </>
  )
}