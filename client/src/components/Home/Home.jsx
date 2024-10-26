import React from 'react'
import HeroSection from '../Hero/Hero'
import Hero1 from '../Hero/Hero1'
import Slide from '../Slider/SLIDER.JSX'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Testimonals from '../Testimonals/Testimonals'
import ContactForm from '../Contactus/Contactus'

const Home = () => {
  return (
    <div>
        <HeroSection />
<Slide />
<Hero1 />
<WhyChooseUs />
<Testimonals />
<ContactForm />

    </div>
  )
}

export default Home