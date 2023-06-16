import MuIcon from "@/components/icon/MuIcon"
import "./AddButton.scoped.scss"

type AddButtonProps = {
  clickAddButton: () => void
  text: string
}

export default function AddButton({ text, clickAddButton }: AddButtonProps) {
  return (
    <div className="add-button" onClick={clickAddButton}>
      <MuIcon icon="add" size={20} />
      <p className="text">{text}</p>
    </div>
  )
}
