import supabaseAdmin from "@/supabase/init.ts";
import {TodoItemDto} from "@/model/todo/todo-item.dto.ts";

export const getTodoList = async (userId: TodoItemDto["user_id"]) => {
  const {data} = await supabaseAdmin.from("todo_item").select().eq("user_id", userId).returns<TodoItemDto[]>()
  return data
}

export const addTodoItem = async (text: string) => {
  const {data} = await supabaseAdmin.auth.getUser()
  const userId = data.user?.id
  if (!userId) return
  await supabaseAdmin.from("todo_item").insert({user_id: userId, todo_text: text})
}