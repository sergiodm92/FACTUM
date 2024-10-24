import About from "../components/about/About"
import Clients from "../components/clients"
import Hero from "../components/hero/Hero"
import WhyUs from '../components/services'
import Contact from '../components/contact'
import OursBeginning from '../components/ours-beginning'
import Metodology from "../components/metodology"

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <WhyUs />
            <Metodology/>
            <OursBeginning />
            <Clients />
            <Contact />
        </>
    )
}
export default HomePage