import React, { useEffect } from "react";
import { SHOW_URL } from "../../services/UrlMapperService";
import { retrieveData } from "../../utils/pageRefresh";

const PageComponent = (props) => {
  console.log("Props==============HOME: ", props);

  useEffect(() => {
    const retrieveApplicationData = retrieveData("petsDetails");
    if (retrieveApplicationData) {
      props.setPetData(retrieveApplicationData);
    } else {
      if (retrieveApplicationData && retrieveApplicationData.id)
        props.loadGetPets(retrieveApplicationData.id);
    }
  }, []);

  return (
    <div className="ui main text container segment" style={{ top: "50px" }}>
      <div className="ui huge header">
        <h1>PET STORE</h1>
        <div className="ui top segment attached">
          <div className="ui divided items">
            {props.petsDetails.pets !== undefined &&
              props.petsDetails.pets.code === 200 && (
                <>
                  PET ID: {props.petsDetails.pets.message} Deleted Succesfully!!
                </>
              )}
            {props.petsDetails.pets !== undefined &&
              props.petsDetails.pets.pets !== undefined &&
              props.petsDetails.pets.pets.map((item) => {
                return (
                  <div className="item">
                    <div className="image">
                      <img
                        src={item.photoUrl}
                        alt=" "
                        width="100"
                        height="100"
                        style={{ float: "left" }}
                      ></img>
                    </div>
                    <div className="content">
                      <a className="header" href={SHOW_URL}>
                        Name of the PETs
                        <h3>{item.name}</h3>
                      </a>
                      <div className="description">
                        <p>{new Date().toDateString()}</p>
                      </div>
                      <div className="extra">
                        <a
                          className="ui floated basic violet button"
                          href={SHOW_URL}
                        >
                          <i className="right chevron icon"></i>
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
