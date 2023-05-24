import React, { useEffect, useState, createContext } from 'react'
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar';
import Page from './components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

export const MainContext = createContext()
const initNav = {
  book: 'Genesis',
  chapter: 1,
  books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "First_Samuel", "Second_Samuel", "First_Kings", "Second_Kings", "First_Chronicles", "Second_Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song_of_Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "First_Corinthians", "Second_Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "First_Thessalonians", "Second_Thessalonian", "First_Timothy", "Second_Timothy", "Titus", "Philemon", "Hebrews", "James", "First_Peter", "Second_Peter", "First_John", "Second_John", "Third_John", "Jude", "Revelation"],
  chapters: []
}
function App() {
  const [nav, setNav] = useState(initNav)
  const [error, setError] = useState('')
  const [page, setPage] = useState([])
  
  
  function getChapter(value) {
    setNav({...nav, chapter: value})
    axios.get(`http://localhost:5000/api/:${nav.book}/:${value}`)
    .then(res => {
      console.log(res.data)
      setPage(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  function getBook(value) {
    axios.get(`http://localhost:5000/api/:${value}`)
    .then(res => {
      console.log(res.data)
      setNav({...nav, book: value, chapter: 1, chapters: res.data})
    })
    .catch(err => {
      console.log(err)
    }) 

  }




  useEffect(() => {
    getChapter(nav.chapter)
    getBook(nav.book)
  }, [])

  return (
    <div className="App">
      <MainContext.Provider
        value={{
          nav,
          page,
          getBook,
          getChapter
        }}
      >

       <Navbar /> 
      <Page />
      <Footer />
      </MainContext.Provider>
    </div>
  );
}

export default App;
