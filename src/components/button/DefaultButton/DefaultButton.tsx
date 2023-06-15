import { parseDomSizeValue } from "@/utils/string.utils.ts"
import "./DefaultButton.scoped.scss"

type DefaultButtonProps = {
  text: string
  onClickButton: () => void
  padding?: string | number
  color?: string
  backgroundColor?: string
  fontSize?: string | number
}

export default function DefaultButton({
  text,
  onClickButton,
  padding = "4px 8px",
  color,
  backgroundColor,
  fontSize = 14,
}: DefaultButtonProps) {
  const buttonStyle = {
    padding: parseDomSizeValue(padding),
    color: color,
    backgroundColor: backgroundColor,
    fontSize: parseDomSizeValue(fontSize),
  }
  return (
    <div className="default-button" onClick={onClickButton} style={buttonStyle}>
      {text}
    </div>
  )
}
