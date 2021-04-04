import React, { useEffect } from "react";
import { EDIT_URL, HOME_URL, SHOW_URL } from "../../services/UrlMapperService";
import { clearData, retrieveData } from "../../utils/pageRefresh";

const PageComponent = (props) => {
  console.log("Props==============SHOW: ", props);
  const { pets } = props.petsDetails;

  useEffect(() => {
    const retrieveApplicationData = retrieveData("petsDetails");
    if (retrieveApplicationData) {
      props.setPetData(retrieveApplicationData);
    }
  }, []);

  const handleDelete = (e) => {
    console.log("Delete the Pets");
    e.preventDefault();
    props.loadDeletePets(pets.id);
  };

  useEffect(() => {
    if (pets && pets.code === 200) {
      clearData('petsDetails');
      props.history.push(HOME_URL);
    }
  }, [pets]);

  return (
    <>
      <div className="ui main text container segment" style={{ top: "50px" }}>
        <div className="ui huge header">
          <h1>PET STORE</h1>
          {props.petsDetails.pets !== undefined &&
            props.petsDetails.pets.pets !== undefined &&
            props.petsDetails.pets.pets.map((item) => {
              return (
                <>
                  <div className="ui top attached">
                    <div className="item">
                      <div className="image">
                        <img
                          className="ui centered rounded image"
                          src={item.photoUrl}
                        ></img>
                      </div>

                      <div className="content">
                        <a className="header" href={SHOW_URL}>
                          Test Name:
                          {item.name}
                        </a>
                      </div>

                      <div>
                        <a className="ui blue basic button" href={EDIT_URL}>
                          Edit Blog
                        </a>
                      </div>

                      <form id="delete" method="POST">
                        <button
                          className="ui red basic button"
                          onClick={handleDelete}
                        >
                          Delete Blog
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PageComponent;
