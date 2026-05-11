import { useState } from 'react';

export default function AppForm({ libri }) {

    const [libriState, setLibri] = useState(libri);

    
    const [formData, setFormData] = useState({
        serialNumber: '',
        title: '',
        author: '',
        genre: '',
    });

   
    const [editingSerial, setEditingSerial] = useState(null);



    // imposto un handle generico per poi aggiornare solo la chiave corrispondente nello stato
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fromData => ({
            ...fromData,
            [name]: value,
        }));
    };


    // aggiungi o modifica
    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.serialNumber || !formData.title || !formData.author || !formData.genre) {
            alert('Compila tutti i campi');
            return
        }

        if (editingSerial) {
            setLibri(prev =>
                prev.map(libro =>
                    libro.serialNumber === editingSerial
                        ? { ...formData }   
                        : libro             
                )
            );
            setEditingSerial(null);
        } else {           
            setLibri(prev => [...prev, { ...formData }]);
        }

        // Reset del form dopo il submit
        setFormData({
            serialNumber: '',
            title: '',
            author: '',
            genre: ''
        });
    };


    // elimina libro
    const handleDelete = (serialNumber) => {
        setLibri(prev => prev.filter(libro => libro.serialNumber !== serialNumber));
    };


    // modifica libro form
    const handleEdit = (libro) => {
        // segna quale libro stiamo modificando
        setEditingSerial(libro.serialNumber);
        // carica i dati del libro nel form
        setFormData({ ...libro });
    };


    // annulla modifica
    const handleCancelEdit = () => {
        setEditingSerial(null);
        setFormData({ serialNumber: '', title: '', author: '', genre: '' });
    };


    return (
        <div className='container'>

            <h1 className='text-center text-secondary p-5'>Libreria</h1>

            <table className='table table-hover mb-3'>
                <thead>
                    <tr>
                        <th scope="col">Seriale</th>
                        <th scope="col">Titolo</th>
                        <th scope="col">Autore</th>
                        <th scope="col">Genere</th>
                        <th scope="col">Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {libriState.map(item => (
                        <tr key={item.serialNumber}>
                            <th scope="row">{item.serialNumber}</th>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.genre}</td>
                            <td>                               
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEdit(item)}
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(item.serialNumber)}
                                >
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <hr />

            <h4 className='mb-3'>
                {editingSerial
                    ? <><i className="bi bi-pencil-fill"></i> Modifica libro</>
                    : <><i className="bi bi-plus-square-fill"></i> Aggiungi libro</>
                }
            </h4>

            <div>
                <div className="mb-3">
                    <label className="form-label">Serial Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='HB-3432-K5'
                        name="serialNumber"
                        value={formData.serialNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Titolo</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='I Pilastri della Terra'
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Autore</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Ken Follett'
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Genere</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Romanzo Storico'
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-primary me-2" onClick={handleSubmit}>
                    {editingSerial ? 'Salva modifiche' : 'Aggiungi'}
                </button>

                {/* mostra annulla solo in modalità edit */}
                {editingSerial && (
                    <button className="btn btn-secondary" onClick={handleCancelEdit}>
                        Annulla
                    </button>
                )}
            </div>

        </div>
    );
}