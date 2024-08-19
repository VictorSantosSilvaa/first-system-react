import Banner from "./Components/Banner"
import Card from "./Components/Card"
import Header from "./Components/Header"
import BannerCard from "./Components/BannerCard"
import Form from "./Components/Form"
import "./app.css"

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Card />
      <BannerCard
        titulo='Banner Principal New'
        subtitulo='Banner Secundario New'
      />
      <Form />
    </>
  )
}

export default App
