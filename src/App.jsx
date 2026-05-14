import './App.css'
import Navbar from '../components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <h1>Create your note</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </main>
      <section>
        <h2>Your Notes</h2>
      </section>
    </>
  )
}

export default App
