
import { useState } from 'react'
import './App.css'

function App() {

const [cards]  =useState([
  {
    title: 'Card-1',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  },
  {
    title: 'Card-2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  },
  {
    title: 'Card-3',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  },
  {
    title: 'Card-4',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  },
  {
    title: 'Card-5',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  },
  {
    title: 'Card-6',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  },
  {
    title: 'Card-7',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iusto unde ab eius deserunt quo, sunt magni consectetur vitae a dolorem est ipsam voluptatem ullam ipsa culpa omnis commodi earum.'
  }
]);
  return (
    <>
      <div>
        <section>
          
          <div className="container">
            <h1>Responsive cards</h1>
            <div className="cards">
              {
                cards.map((card, i) =>(

                ))
              }
              <div className="card">
                <h3>Card- 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aperiam aut, nulla, doloribus quas eum dicta incidunt cum libero consequatur cupiditate velit unde quae debitis omnis repudiandae, saepe officia laborum.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default App
