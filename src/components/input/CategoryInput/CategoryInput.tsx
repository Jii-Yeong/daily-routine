import { useState } from "react"
import "./CategoryInput.scoped.scss"
import TodoInput from "../TodoInput/TodoInput"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton"
import MuIcon from "@/components/icon/MuIcon"

type CategoryInput = {
  setCategoryValue: (name: string) => void
}

export default function CategoryInput({ setCategoryValue }: CategoryInput) {
  const [isClick, setIsClick] = useState(false)

  const handleClickCancelButton = () => {
    setIsClick(false)
  }

  const handleClickAddButton = () => {
    setIsClick(true)
  }
  return (
    <div className="category-input">
      {isClick ? (
        <div className="default-input">
          <div className="todo-input-wrapper">
            <TodoInput buttonText="추가" setTodoItemValue={setCategoryValue} />
          </div>
          <DefaultButton text="취소" onClickButton={handleClickCancelButton} />
        </div>
      ) : (
        <div className="add-category-text" onClick={handleClickAddButton}>
          <MuIcon icon="add" size={20} />
          <p className="text">카테고리 추가</p>
        </div>
      )}
    </div>
  )
}
