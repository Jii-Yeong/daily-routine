import "./DefaultButton.scss"

type DefaultButtonProps = {
  text: string
}

export default function DefaultButton({text}: DefaultButtonProps) {
  return (
    <div className="default-button">
      {text}
    </div>
  )
}