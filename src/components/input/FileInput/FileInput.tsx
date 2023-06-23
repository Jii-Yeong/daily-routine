import { ChangeEvent } from "react"

type FileInputProps = {
  inputValue: string
  setInputValue: (e: ChangeEvent) => void
  accept?: string
}

export default function FileInput({
  inputValue,
  setInputValue,
  accept = "image/png, image/jpeg",
}: FileInputProps) {
  return (
    <input
      type="file"
      value={inputValue}
      onChange={setInputValue}
      accept={accept}
    />
  )
}
