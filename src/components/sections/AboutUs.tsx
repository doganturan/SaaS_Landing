import Container from "../shared/Container"

import AboutUsImage from "../../assets/about-us.png"
import Title from "../shared/Title"
import Paragraph from "../shared/Paragraph"
import { Info } from "../cards/Info"
import { BiInfoCircle } from "react-icons/bi"


const AboutUs = () => {
    return (
        <section id="about-us">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img src={AboutUsImage} alt="About Us" className="object-cover w-full h-full rounded-3xl relative z-10 shadow-lg" />
                    </div>
                </div>

                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                    <Title>About Our Solutions</Title>
                    <Paragraph className="mt-4">
                        We provide innovative solutions to help businesses thrive in a digital world.
                        Our team is dedicated to delivering high-quality services that meet the unique needs of our clients.
                        With a focus on excellence and customer satisfaction, we strive to be a leader in the industry.
                    </Paragraph>

                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info title="Mission" description="To empower businesses with cutting-edge technology and exceptional service.">
                            <BiInfoCircle fontSize={22} className="dark:text-white"/>
                        </Info>

                        <Info title="Vision" description="To be the most trusted partner for businesses seeking digital transformation.">
                            <BiInfoCircle fontSize={22} className="dark:text-white"/>
                        </Info>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutUs