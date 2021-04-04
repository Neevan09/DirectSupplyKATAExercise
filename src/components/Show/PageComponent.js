import React, { useEffect } from "react";
import { EDIT_URL, SHOW_URL } from "../../services/UrlMapperService";
import { retrieveData } from "../../utils/pageRefresh";

const PageComponent = (props) => {
  console.log("Props==============SHOW: ", props);

  useEffect(() => {
    const retrieveApplicationData = retrieveData("petsDetails");
    if (retrieveApplicationData) {
      props.setPetData(retrieveApplicationData);
    }
  }, []);
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
                    <div class="item">
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
                        <a class="ui blue basic button" href={EDIT_URL}>
                          Edit Blog
                        </a>
                      </div>

                      <form id="delete" method="POST">
                        <button class="ui red basic button">Delete Blog</button>
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
