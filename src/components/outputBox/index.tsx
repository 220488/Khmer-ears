import React from "react"
import "../../styles/text_box.scss"
import { useSelector } from "react-redux"
import { stateProps } from "../../redux/types/type"

const OutputBox = () => {
  const resultContent = useSelector((state: stateProps) => state.outputContent)

  return (
    <div className="text-box-container">
      <div className="output-content-box">
        {
          resultContent
        }
      </div>
    </div>
  )
}

export default OutputBox