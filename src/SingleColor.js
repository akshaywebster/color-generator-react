import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bgcolor = rgb.join(',')
  const hexValue = `#${hexColor}`

  const handleClick = () => {
    setAlert(true)

    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgcolor})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>

      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
