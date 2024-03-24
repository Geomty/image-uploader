import NavBar from "@/app/ui/dashboard/nav-bar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}