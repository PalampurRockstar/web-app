import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/petService";
import { Link } from "react-router-dom";

const PetList = () => {
  const [Pets, setPets] = useState([]);
  const [currentPet, setCurrentPet] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchFirstName, setSearchFirstName] = useState("");

  useEffect(() => {
    retrievePets();
  }, []);

  const onChangeSearchFirstName = (e: any) => {
    const searchTitle = e.target.value;
    setSearchFirstName(searchTitle);
  };

  const retrievePets = () => {
    TutorialDataService.getAll()
      .then((response: any) => {
        setPets(response.data);
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePets();
    setCurrentPet(null);
    setCurrentIndex(-1);
  };

  const setActivePet = (Pet: any, index: any) => {
    setCurrentPet(Pet);
    setCurrentIndex(index);
  };

  const removeAllPets = () => {
    TutorialDataService.removeAll()
      .then((response: any) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const findByFirstName = () => {
    TutorialDataService.findByFirstName(searchFirstName)
      .then((response: any) => {
        setPets(response.data);
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by First Name"
            value={searchFirstName}
            onChange={onChangeSearchFirstName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByFirstName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Pet List</h4>

        <ul className="list-group">
          {Pets &&
            Pets.map((Pet: any, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePet(Pet, index)}
                key={index}
              >
                {Pet.firstName}
              </li>
            ))}
        </ul>

        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllPets}>
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentPet ? (
          <div>
            <h4>Pet</h4>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentPet.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentPet.lastName}
            </div>

            <Link to={"/pets/" + currentPet.id} className="badge badge-warning">
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Pet...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetList;
