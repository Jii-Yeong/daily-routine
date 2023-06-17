import DefaultButton from "@/components/button/DefaultButton/DefaultButton"
import EditorInput from "@/components/input/EditorInput/EditorInput"

type EditorInputWrapperProps = {
  editorValue: string
  setEditorValue: (value: string) => void
  clickSubmitButton: () => void
  clickCancelButton: () => void
}

export default function EditorInputWrapper({
  editorValue,
  setEditorValue,
  clickCancelButton,
  clickSubmitButton,
}: EditorInputWrapperProps) {
  return (
    <div className="todo-input-container">
      <EditorInput value={editorValue} setValue={setEditorValue} />
      <div className="control-button">
        <DefaultButton text="입력" onClickButton={clickCancelButton} />
        <DefaultButton text="취소" onClickButton={clickSubmitButton} />
      </div>
    </div>
  )
}
