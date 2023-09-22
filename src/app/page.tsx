"use client"
import About from './components/About'
import Divider from './components/Divider'
import Skills from './components/Skills'


export default function Home() {
  return (
    <main className='
     mx-auto
    flex
    flex-col
    items-center
    max-w-4xl
    p-5
    '>
      <About/>
      <Divider/>
      <Skills/>

    </main>
  )
}
