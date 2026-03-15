
import { Suspense } from 'react'
import './App.css'
import Countries from './countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then((res)=>res.json())
function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
        <Suspense fallback={<p>nadir vai loading.......</p>}>
          <Countries countriesPromise={countriesPromise}>
          </Countries>
        </Suspense>
        </div>
      </section>
    </>
  )
}

export default App
