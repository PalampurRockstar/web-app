import React, { useState } from "react";
import TutorialDataService from "services/petService";

const AddPet = () => {
  const initialPetState = {
    id: null,
    firstName: "",
    lastName: "",
  };
  const [Pet, setPet] = useState(initialPetState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setPet({ ...Pet, [name]: value });
  };

  const savePet = () => {
    var data = {
      firstName: Pet.firstName,
      lastName: Pet.lastName,
    };

    TutorialDataService.create(data)
      .then((response: any) => {
        setPet({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const newPet = () => {
    setPet(initialPetState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPet}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={Pet.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={Pet.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>

          <button onClick={savePet} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPet;
