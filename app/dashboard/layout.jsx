import NavBar from "@/app/ui/dashboard/nav-bar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="p-4">{children}</div>
    </>
  )
}