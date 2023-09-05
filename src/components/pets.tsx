import { useEffect, useState } from "react";
import TutorialDataService from "../services/petService";

const Pets = (props: any) => {
  const initialTutorialState = {
    id: null,
    firstName: "",
    lastName: "",
  };
  const [currentPet, setCurrentPet] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getPet = (id: any) => {
    TutorialDataService.getPet(id)
      .then((response: any) => {
        setCurrentPet(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPet(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setCurrentPet({ ...currentPet, [name]: value });
  };

  const updatePet = () => {
    TutorialDataService.update(currentPet.id, currentPet)
      .then((response: any) => {
        setMessage("Pet was updated successfully!");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const deletePet = () => {
    TutorialDataService.remove(currentPet.id)
      .then((response: any) => {
        props.history.push("/pets");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPet ? (
        <div className="edit-form">
          <h4>Pets</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={currentPet.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={currentPet.lastName}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deletePet}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updatePet}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Pet...</p>
        </div>
      )}
    </div>
  );
};

export default Pets;
