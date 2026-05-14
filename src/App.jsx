import './App.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Card from '../components/Card'

function App() {

  const [notes, setNotes] = useState([])
  const [currentNote, setcurrentNote] = useState({ title: "", desc: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setNotes([...notes, currentNote])
    setcurrentNote({ title: "", dec: "" })
  }

  const handleChange = (e) => {
    setcurrentNote({ ...currentNote, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar />
      <main>
        <h1>Create your note</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input value={currentNote.title} onChange={handleChange} type="text" name="title" id="title" />
          </div>
          <div>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" onChange={handleChange} value={(currentNote.desc)}></textarea>
          </div>
          <button>Submit</button>
        </form>
      </main>
      <section>
        <h2>Your Notes</h2>
        <div>
          {notes && notes.map(note => {
            return <Card title={note.title} desc={note.desc} />
          })}
        </div>

      </section>
    </>
  )
}

export default App
