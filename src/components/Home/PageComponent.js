import React, { useEffect } from "react";
import { retrieveData } from "../../utils/pageRefresh";

const PageComponent = (props) => {
  console.log("props==============home: ", props);

  useEffect(() => {
    // console.log("Pets Array=========================", props.petsDetails.pets.pets.length);
    const retrieveApplicationData = retrieveData("petsDetails");
    if (retrieveApplicationData) {
      props.setPetData(retrieveApplicationData);
    }
  }, []);
  return (
    <div className="ui main text container segment" style={{ top: "50px" }}>
      <div className="ui huge header">
        <h1>PET STORE</h1>
        <div className="ui top segment attached">
          <div className="ui divided items">
            {props.petsDetails.pets !== undefined &&
              props.petsDetails.pets.pets !== undefined &&
              props.petsDetails.pets.pets.map((item) => {
                return (
                  // {console.log("Pets Array=========================22", item.name)}
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
                      <a className="header" href="/pets/show">
                        Test Name:
                        {item.name}
                      </a>
                      <div className="description">
                        <p>{new Date().toDateString()}</p>
                      </div>
                      <div className="extra">
                        <a
                          className="ui floated basic violet button"
                          href="/pets/show"
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
