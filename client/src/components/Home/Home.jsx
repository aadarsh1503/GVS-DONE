import React from 'react'
import HeroSection from '../Hero/Hero'
import Hero1 from '../Hero/Hero1'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Testimonals from '../Testimonals/Testimonals'
import ContactForm from '../Contactus/Contactus'
import Slide from '../Slider/Slider'
import ServiceDifferentiators from '../ServiceDifferentiators/ServiceDifferentiators'

const Home = () => {
  return (
    <div>
        <HeroSection />
<Slide />
<Hero1 />
<WhyChooseUs />
<ServiceDifferentiators />
<Testimonals />
<ContactForm />

    </div>
  )
}

export default Home