import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClock, FaShareAlt, FaHeart } from 'react-icons/fa';
import '../styles/Ownprop.css'; // Import the CSS file
import axios from 'axios';

const Ownprop = () => {
  const [cards, setCards] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newCard, setNewCard] = useState({
    title: '',
    date: '',
    image: '',
    description: ''
  });
  const [editingCard, setEditingCard] = useState(null);
  const [showForm, setShowForm] = useState(false); // State for form visibility

  useEffect(() => {
    // Fetch cards from the server
    axios.get('http://127.0.0.1:8000/api/cards/')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      setNewCard({ ...newCard, [name]: formatDate(value) });
    } else {
      setNewCard({ ...newCard, [name]: value });
    }
  };

  
  const handleAddCard = async () => {
    if (!newCard.title || !newCard.date || !newCard.image || !newCard.description) {
      alert('Please fill all fields');
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/cards/', newCard);
      setCards([...cards, response.data]);
      setNewCard({ title: '', date: '', image: '', description: '' });
      setShowForm(false); // Hide the form after adding
    } catch (error) {
      console.error('Error adding card:', error.response ? error.response.data : error.message);
      alert('Failed to add card. Please try again.');
    }
  };
  
  const handleUpdateCard = async () => {
    if (!newCard.title || !newCard.date || !newCard.image || !newCard.description) {
      alert('Please fill all fields');
      return;
    }
  
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/cards/${newCard.id}`, newCard, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setCards(cards.map(card => card.id === newCard.id ? response.data : card));
      setEditingCard(null);
      setNewCard({ title: '', date: '', image: '', description: '' });
      setShowForm(false); // Hide the form after updating
    } catch (error) {
      console.error('Error updating card:', error.response ? error.response.data : error.message);
      alert('Failed to update card. Please try again.');
    }
  };
  
    

  const handleDeleteCard = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/cards/${id}`)
      .then(() => {
        setCards(cards.filter(card => card.id !== id));
      })
      .catch(error => console.error('Error deleting card:', error));
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setNewCard(card);
    setShowForm(true); // Show the form for editing
  };

  

  return (
    <div className="container">
      <section className="my-5">
        <button className="btn btn-primary mb-4" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Card'}
        </button>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {cards.map(card => (
            <div className="col" key={card.id}>
              <div className="card shadow-sm border-light">
                <div className="card-body d-flex flex-row align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                    className="rounded-circle me-3"
                    height="50"
                    width="50"
                    alt="avatar"
                  />
                  <div>
                    <h5 className="card-title font-weight-bold mb-2">{card.title}</h5>
                    <p className="card-text">
                      <FaClock className="pe-2" />
                      {card.date}
                    </p>
                  </div>
                </div>
                <div className="bg-image hover-overlay ripple rounded-0">
                  <img
                    className="img-fluid"
                    src={card.image}
                    alt={card.title}
                  />
                </div>
                <div className="card-body">
                  <p className={`card-text ${isCollapsed ? 'collapse' : ''}`} id="collapseContent">
                    {card.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      className="btn btn-link link-danger p-md-1 my-1"
                      onClick={toggleCollapse}
                      role="button"
                      aria-expanded={!isCollapsed}
                      aria-controls="collapseContent"
                    >
                      {isCollapsed ? 'Read more' : 'Read less'}
                    </a>
                    <div>
                      <FaShareAlt className="text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip" data-mdb-placement="top" title="Share this post" />
                      <FaHeart className="text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip" data-mdb-placement="top" title="I like it" />
                      <button className="btn btn-warning mx-2" onClick={() => handleEditCard(card)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDeleteCard(card.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showForm && (
          <div className="mt-5">
            <h3>{editingCard ? 'Edit Card' : 'Add New Card'}</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={newCard.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  name="date"
                  value={newCard.date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  name="image"
                  value={newCard.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={newCard.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {editingCard ? (
                <button type="button" className="btn btn-primary" onClick={handleUpdateCard}>Update Card</button>
              ) : (
                <button type="button" className="btn btn-success" onClick={handleAddCard}>Add Card</button>
              )}
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Ownprop;
