import AppForm from "./components/AppForm"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const libri = [
  {
    serialNumber: "AX-9821-B",
    title: "Il Signore degli Anelli",
    author: "J.R.R. Tolkien",
    genre: "Fantasy"
  },
  {
    serialNumber: "ZK-4430-C",
    title: "Neuromante",
    author: "William Gibson",
    genre: "Cyberpunk"
  },
  {
    serialNumber: "RM-1129-F",
    title: "Assassinio sull'Orient Express",
    author: "Agatha Christie",
    genre: "Giallo"
  }
];


function App() {
  

  return (
    <>
     <AppForm libri={libri}/>
    </>
  )
}

export default App
