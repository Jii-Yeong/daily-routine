import supabaseAdmin from "@/supabase/init.ts"

export const signInWithGoogle = async () => {
  const { error } = await supabaseAdmin.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${import.meta.env.VITE_SUPABASE_REDIRECT_URL}/todo-page`,
    },
  })
  if (error) console.log(error)
}

export const singOutForSite = async () => {
  const { error } = await supabaseAdmin.auth.signOut()
  if (error) console.log(error)
}
