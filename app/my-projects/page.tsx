import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    // <div style={{ backgroundImage: "url(/mountains.jpg" }}
    //   className="w-screen h-screen flex items-center justify-center bg-cover">
    //   <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">

    <div style={{ backgroundImage: "url(/mountains.jpg" }}
      className="w-screen flex items-center justify-center bg-cover
     h-screen">
      <div className="gap-5 max-w-[90%] hidden
      md:grid md:grid-cols-2 max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>

      {/* Mobile Devices */}
      <div className='md:hidden flex max-w-[90%] max-h[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>

    </div>
  )
}

export default Page