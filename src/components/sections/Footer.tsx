import Container from "../shared/Container"
import Logo from "../../assets/icon.svg"
import { navItems } from "../elements/Navbar"
import NavItem from "../shared/NavItem"

const Footer = () => {
    return (
        <footer className="relative pt-16 rounded-t-3xl bg-box-bg">
            <Container className="pb-16">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <img src={Logo} alt="Logo" className="w-7 h-7" />
                        <span className="text-lg font-semibold text-heading-1">Saas Landing</span>
                    </div>


                    <ul className="flex gap-6 text-heading-1">
                        {navItems.map((item, index) => (
                            <NavItem key={index} href={item.href} text={item.text} />
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer