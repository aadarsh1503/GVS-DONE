import React from 'react'
import HeroSection from '../Hero/Hero'
import Hero1 from '../Hero/Hero1'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Testimonals from '../Testimonals/Testimonals'
import ContactForm from '../Contactus/Contactus'
import Slide from '../Slider/Slider'
import ServiceDifferentiators from '../ServiceDifferentiators/ServiceDifferentiators'
import ProjectsComponent from '../ProjectComponent/ProjectComponent'
import ExpertiseComponent from '../ExpertiseComponent/ExpertiseComponent'
import ProjectCTA from '../ProjectCta/ProjectCta'
import Testimonials4 from '../Testimonials4/Testimonials4'

const Home = () => {
  return (
    <div>
        <HeroSection />
<Slide />
<ProjectsComponent />
<ExpertiseComponent />
<WhyChooseUs />
<ServiceDifferentiators />
<Testimonials4 />
<ProjectCTA />


    </div>
  )
}

export default Home