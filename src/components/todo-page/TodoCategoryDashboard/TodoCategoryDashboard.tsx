import CategoryInput from "@/components/input/CategoryInput/CategoryInput.tsx"
import CategoryListItem from "@/components/list/CategoryListItem/CategoryListItem"
import { useTodoCategory } from "@/hooks/todo/useTodoCategory"
import { useTodoList } from "@/hooks/todo/useTodoList"
import { TodoCategoryModel } from "@/model/todo/todo-category.model.ts"
import { modalState } from "@/recoil/modal/modal"
import { getRootPage, getTodoListPage } from "@/utils/page.utils.ts"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import "./TodoCategoryDashboard.scoped.scss"

export default function TodoCategoryDashboard() {
  const { categoryList, clickAddTodoCategory, clickDeleteTodoCategory } =
    useTodoCategory()
  const { fetchTodoList } = useTodoList()

  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const [modal, setModal] = useRecoilState(modalState)

  const handleCategoryValue = (text: string) => {
    clickAddTodoCategory(text)
  }

  const handleClickCategory = (id: TodoCategoryModel["id"]) => {
    setSearchParams({ category_id: String(id) })
  }

  const handleClickAllCategory = () => {
    navigate(getTodoListPage())
  }

  const setCloseModal = () => {
    setModal((item) => {
      return {
        ...item,
        isOpenModal: false,
      }
    })
  }

  const handleDeleteCategory = async (id: TodoCategoryModel["id"]) => {
    await clickDeleteTodoCategory(id)
    navigate(getRootPage())
    await fetchTodoList()
    setCloseModal()
  }

  const handleClickCancelButton = () => {
    setCloseModal()
  }

  const handleClickDeleteButton = async (id: TodoCategoryModel["id"]) => {
    setModal((item) => {
      return {
        ...item,
        text: "정말로 삭제하시겠습니까?",
        isOpenModal: true,
        clickOkButton: () => handleDeleteCategory(id),
        clickCalcenButton: handleClickCancelButton,
      }
    })
  }

  return (
    <div className="todo-category-dashboard">
      <ul className="catetory-list">
        <li className="category-item" onClick={handleClickAllCategory}>
          전체
        </li>
        {categoryList.map((item) => {
          return (
            <CategoryListItem
              key={item.id}
              item={item}
              clickCategory={() => handleClickCategory(item.id)}
              clickDeleteButton={() => handleClickDeleteButton(item.id)}
            />
          )
        })}
      </ul>
      <CategoryInput setCategoryValue={handleCategoryValue} />
    </div>
  )
}
