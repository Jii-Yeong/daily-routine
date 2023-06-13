import CategoryInput from "@/components/input/CategoryInput/CategoryInput.tsx"
import { useTodoCategory } from "@/hooks/useTodoCategory.ts"
import { useNavigate, useSearchParams } from "react-router-dom"
import { TodoCategoryModel } from "@/model/todo/todo-category.model.ts"
import { getRootPage } from "@/utils/page.utils.ts"

export default function TodoCategoryDashboard() {
  const { category, addTodoCategory } = useTodoCategory()
  const [_, setSearchParams] = useSearchParams()
  const navitage = useNavigate()
  const handleCategoryValue = (text: string) => {
    addTodoCategory(text)
  }

  const handleClickCategory = (id: TodoCategoryModel["id"]) => {
    setSearchParams({ category_id: String(id) })
  }

  const handleClickAllCategory = () => {
    navitage(getRootPage())
  }

  return (
    <div className="todo-category-dashboard">
      <ul className="catetory-list">
        <li className="category-item" onClick={handleClickAllCategory}>
          전체
        </li>
        {category.map((item) => {
          return (
            <li
              className="category-item"
              key={item.id}
              onClick={() => handleClickCategory(item.id)}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
      <CategoryInput setCategoryValue={handleCategoryValue} />
    </div>
  )
}
