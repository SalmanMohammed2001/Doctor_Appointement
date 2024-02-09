import Header from "../components/Header/Header.tsx";
import Router from "../routes/Router.tsx";
import Footer from "../components/foooter/Footer.tsx";

const Layout = () => {

    return (
        <div>
            <Header/>
            <main>
                <Router/>
            </main>
            <Footer/>
        </div>
    )
}
export default Layout