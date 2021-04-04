import React, { useEffect, useState } from "react";
import { retrieveData, storeData } from "../../utils/pageRefresh";

const PageComponent = (props) => {
  console.log("Props===============EDIT", props);

  const [name, setName] = useState('');
  const [image, setImage] = useState("");
  const { pets } = props.petsDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("name==================",name);
    // console.log("image==================",image);
    let requestPayload = {
      id: 0,
      category: {
        id: 0,
        name: "string",
      },
      name: name,
      photoUrls: [image],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    };

    props.loadPutPets(requestPayload);
  };

  useEffect(() => {
    if (pets.httpStatus === 200 && pets.putPetsSuccess) {
      console.log("0000000000000000=======before===reset", props.petsDetails);

      props.resetPets();
      console.log("0000000000000000=======after===reset", props.petsDetails);
      props.history.push("/"); 
      console.log("storeData('petsDetails', pets)==================", pets);
      storeData("petsDetails", pets);
    }
  }, [props.petsDetails.pets]);

  const handleNameChange = (event) => {
    // console.log("handleNameChange=======",event.target.value);
    const value = event.target.value;
    setName(value);
  };

  const handleImageChange = (event) => {
    const value = event.target.value;
    setImage(value);
  };

  useEffect(() => {
    const retrieveApplicationData = retrieveData('petsDetails');
    console.log("retrieveApplicationData=======",retrieveApplicationData);
    if(retrieveApplicationData){     
      props.setPetData(retrieveApplicationData); 
    }
  },[]);

  useEffect(() => {
    if(props.petsDetails.pets && props.petsDetails.pets !== undefined &&  props.petsDetails.pets.pets !== undefined){
      if(props.petsDetails.pets.pets[0] && props.petsDetails.pets.pets[0].name !== undefined){
        console.log("props.petsDetails.pets.pets=======",props.petsDetails.pets.pets);
        setName(props.petsDetails.pets.pets[0].name);
      }
      if(props.petsDetails.pets.pets[0]  && props.petsDetails.pets.pets[0].photoUrl !== undefined){ 
        setImage(props.petsDetails.pets.pets[0].photoUrl);
      }
    }

  },[props.petsDetails.pets.pets])

  return (
    <div className="ui main text container segment" style={{ top: "50px" }}>
      {props.petsDetails.pets !== undefined &&
        props.petsDetails.pets.pets !== undefined &&
        props.petsDetails.pets.pets.map((item) => {
          return (
            <>
              <div className="ui huge header">EDIT NEW PET</div>
              <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                  <label>
                    Name
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="title"
                    />
                  </label>
                </div>
                <div className="field">
                  <label>
                    Image
                    <input
                      type="text"
                      value={image}
                      onChange={handleImageChange}
                      placeholder="image"
                    />
                  </label>
                </div>
                <input className="ui violet basic button" type="submit" />
              </form>
            </>
          );
        })}
    </div>
  );
};

export default PageComponent;
