import DefaultInput from "@/components/input/DefaultInput/DefaultInput.tsx"
import { ChangeEvent, KeyboardEvent, useState } from "react"

type CategoryInput = {
  setCategoryValue: (name: string) => void
}

export default function CategoryInput({ setCategoryValue }: CategoryInput) {
  const [inputText, setInputText] = useState("")
  const [isClick, setIsClick] = useState(false)

  const handleChangeInput = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setInputText(element.value)
  }
  const handleEnterInput = (e: KeyboardEvent) => {
    const element = e.target as HTMLInputElement
    if (e.code === "Enter") {
      setCategoryValue(element.value)
    }
  }

  const handleClickAddButton = () => {
    setIsClick(true)
  }
  return (
    <div className="category-input">
      {isClick ? (
        <DefaultInput
          changeInput={handleChangeInput}
          enterInput={handleEnterInput}
          inputValue={inputText}
        />
      ) : (
        <div className="add-category-text" onClick={handleClickAddButton}>
          <p className="text">카테고리 추가</p>
        </div>
      )}
    </div>
  )
}
