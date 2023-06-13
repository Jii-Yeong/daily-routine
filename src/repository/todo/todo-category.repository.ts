import {
  TodoCategoryDto,
  TodoCategoryReqDto,
} from "@/model/todo/todo-category.dto.ts"
import supabaseAdmin from "@/supabase/init.ts"
import { DB_TABLE_NAME } from "@/constants/db-table.constants.ts"

export const selectTodoCategory = async (
  userId: TodoCategoryDto["user_id"]
) => {
  const { data } = await supabaseAdmin
    .from(DB_TABLE_NAME.todoCategory)
    .select()
    .eq("user_id", userId)
    .returns<TodoCategoryDto[]>()
  return data
}

export const insertTodoCategory = async (category: TodoCategoryReqDto) => {
  await supabaseAdmin.from(DB_TABLE_NAME.todoCategory).insert(category)
}
