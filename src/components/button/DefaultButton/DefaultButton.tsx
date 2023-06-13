import "./DefaultButton.scss"
import { parseDomSizeValue } from "@/utils/string.utils.ts"

type DefaultButtonProps = {
  text: string
  onClickButton: () => void
  padding?: string | number
  color?: string
  fontSize?: string | number
}

export default function DefaultButton({
  text,
  onClickButton,
  padding = "4px 8px",
  color,
  fontSize = 14,
}: DefaultButtonProps) {
  const buttonStyle = {
    padding: parseDomSizeValue(padding),
    color: color,
    fontSize: parseDomSizeValue(fontSize),
  }
  return (
    <div className="default-button" onClick={onClickButton} style={buttonStyle}>
      {text}
    </div>
  )
}
