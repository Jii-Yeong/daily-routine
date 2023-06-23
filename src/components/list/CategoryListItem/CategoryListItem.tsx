import MuIcon from "@/components/icon/MuIcon"
import { TodoCategoryModel } from "@/model/todo/todo-category.model"
import "./CategoryListItem.scoped.scss"

type CategoryListItemProps = {
  item: TodoCategoryModel
  clickCategory: () => void
  clickDeleteButton: () => void
}

export default function CategoryListItem({
  item,
  clickCategory,
  clickDeleteButton,
}: CategoryListItemProps) {
  return (
    <li className="category-list-item" key={item.id} onClick={clickCategory}>
      {item.name}
      <div className="control-button">
        <MuIcon icon="edit" clickIcon={clickDeleteButton} cursor="pointer" />
        <MuIcon icon="delete" clickIcon={clickDeleteButton} cursor="pointer" />
      </div>
    </li>
  )
}
