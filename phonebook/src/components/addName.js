import axios from 'axios';

export function addName(newName, newNumber, persons, setNewName, setNewNumber, setPersons, setNotification, setIsError) {
  return (event) => {
    let isUnique = true;
    event.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    persons.map(person => {
      if (nameObject.name === person.name) {
        const confirmReplace = window.confirm(`${person.name} is already added to phonebook, replace the old number with the new one?`)
        if (confirmReplace) {
          const findId = person.id;
          const changedNumber = { ...person, number: newNumber}
          axios.put(`http://localhost:3001/persons/${findId}`, changedNumber).then(response => {
            console.log(response)
            setPersons(persons.map(person => person.name !== newName ? person : response.data))
          })
          .catch(() => {
            setIsError(true)
            setNotification(`Information of ${newName} has already been removed from the server...`)

          })
        }
        setNewName("");
        setNewNumber("");
        isUnique = false;
      }
    });
    if (isUnique === true) {
      axios.post('http://localhost:3001/persons', nameObject).then(response => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      })
      .catch(error =>{
        console.log(error.response.data)
      })
    }
    showNotification(setNotification, newName);
  };


}
function showNotification(setNotification, newName) {
  setNotification(`You added ${newName}`);
  setTimeout(() => {
    setNotification("");
  }, 5000);
}

