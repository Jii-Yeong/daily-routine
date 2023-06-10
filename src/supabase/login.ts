import supabaseAdmin from "@/supabase/init.ts";

export const signInWithGoogle = async () => {
  const {error} = await supabaseAdmin.auth.signInWithOAuth({
    provider: "google",
  })
  if (error) console.log(error)
}


export const singOutForSite = async () => {
  const {error} = await supabaseAdmin.auth.signOut()
  if (error) console.log(error)
}