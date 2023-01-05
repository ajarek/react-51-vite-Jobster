import React from "react"

import classes from "./styles.module.css"

export const Loading = (props) => {
  const { className, ...otherProps } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    ></div>
  )
}
export default Loading