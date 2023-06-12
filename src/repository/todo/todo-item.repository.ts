import supabaseAdmin from "@/supabase/init.ts";
import {TodoItemDto, TodoItemReqDto} from "@/model/todo/todo-item.dto.ts";

export const getTodoList = async (userId: TodoItemDto["user_id"]) => {
  const {data} = await supabaseAdmin.from("todo_item").select().eq("user_id", userId).order("created_at").returns<TodoItemDto[]>()
  return data
}

export const addTodoItem = async (text: string) => {
  const {data} = await supabaseAdmin.auth.getUser()
  const userId = data.user?.id
  if (!userId) return
  await supabaseAdmin.from("todo_item").insert({user_id: userId, todo_text: text})
}

export const updateTodoItem = async (id: number, todoItem: TodoItemReqDto) => {
  const {error} = await supabaseAdmin.from("todo_item").update(todoItem).eq("id", id)
  if (error)
    console.log(error)
}