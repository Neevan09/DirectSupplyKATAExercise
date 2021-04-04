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
    //
    <>
      <div className="ui main text container segment" style={{ top: "50px" }}>
        <div className="ui huge header">
          <h1>PET STORE</h1>
          {/* <div className="ui top segment attached">
            <div className="ui divided items"> */}
              {props.petsDetails.pets !== undefined &&
                props.petsDetails.pets.pets !== undefined &&
                props.petsDetails.pets.pets.map((item) => {
                  return (
                    <>
                      <div className="ui top attached">
                        <div class="item">
                          <div className="image">
                            <img
                              className="ui centered rounded image"
                              src={item.photoUrl}
                            ></img>
                          </div>

                          <div className="content">
                            <a className="header" href="/pets/show">
                              Test Name:
                              {item.name}
                            </a>
                          </div>

                          <div>
                            <a class="ui blue basic button" href="/pets/edit">
                              Edit Blog
                            </a>
                          </div>

                          <form id="delete" method="POST">
                            <button class="ui red basic button">
                              Delete Blog
                            </button>
                          </form>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          {/* </div>
        </div> */}
      </div>
    </>
  );
};

export default PageComponent;
