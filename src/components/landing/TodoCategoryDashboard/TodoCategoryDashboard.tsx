import MuIcon from "@/components/icon/MuIcon"
import CategoryInput from "@/components/input/CategoryInput/CategoryInput.tsx"
import { useTodoCategory } from "@/hooks/todo/useTodoCategory"
import { useTodoList } from "@/hooks/todo/useTodoList"
import { TodoCategoryModel } from "@/model/todo/todo-category.model.ts"
import { getRootPage } from "@/utils/page.utils.ts"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./TodoCategoryDashboard.scoped.scss"

export default function TodoCategoryDashboard() {
  const { categoryList, clickAddTodoCategory, clickDeleteTodoCategory } =
    useTodoCategory()
  const { fetchTodoList } = useTodoList()
  const [_, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleCategoryValue = (text: string) => {
    clickAddTodoCategory(text)
  }

  const handleClickCategory = (id: TodoCategoryModel["id"]) => {
    setSearchParams({ category_id: String(id) })
  }

  const handleClickAllCategory = () => {
    navigate(getRootPage())
  }

  const handleClickDeleteButton = async (id: TodoCategoryModel["id"]) => {
    await clickDeleteTodoCategory(id)
    navigate(getRootPage())
    await fetchTodoList()
  }

  return (
    <div className="todo-category-dashboard">
      <ul className="catetory-list">
        <li className="category-item" onClick={handleClickAllCategory}>
          전체
        </li>
        {categoryList.map((item) => {
          return (
            <li
              className="category-item"
              key={item.id}
              onClick={() => handleClickCategory(item.id)}
            >
              {item.name}
              <MuIcon
                icon="delete"
                clickIcon={() => handleClickDeleteButton(item.id)}
                cursor="pointer"
              />
            </li>
          )
        })}
      </ul>
      <CategoryInput setCategoryValue={handleCategoryValue} />
    </div>
  )
}
