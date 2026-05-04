import { useState } from 'react';

export default function AppForm({ libri }) { // Nota le graffe se passi libri come prop
  return ( // <--- Fondamentale: aggiungi il return
    <>
      <div className='container'>
        <form>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">Serial Number</label>
            <input 
              type="text" 
              className="form-control" 
              id="serialNumber" 
              placeholder='HB-3432-K5'
            /> 
          </div>
          <div className="mb-3">
            <label htmlFor="titlebook" className="form-label">Book Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="titlebook" 
              placeholder='I Pilastri della Terra'
            /> 
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Author</label>
            <input 
              type="text" 
              className="form-control" 
              id="author" 
              placeholder='Ken Follett'
            /> 
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Book Genre</label>
            <input 
              type="text" 
              className="form-control" 
              id="bookGenre" 
              placeholder='Romanzo Storico'
            /> 
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}
