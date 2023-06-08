import DefaultLayout from "@/components/layout/DefaultLayout.tsx";

export default function Home() {
  return (
    <DefaultLayout sidebar={<p>sidebar</p>}>
      <p>default</p>
    </DefaultLayout>
  )
}