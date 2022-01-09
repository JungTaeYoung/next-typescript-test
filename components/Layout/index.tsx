import Header from "../../components/Footer"
import Footer from "../../components/Header"

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  )
}