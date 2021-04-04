import React, { useEffect, useState } from "react";
import { storeData } from "../../utils/pageRefresh";

const PageComponent = (props) => {
  console.log("Props===============", props);

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
 
    props.loadPostPets(requestPayload);
  };

  useEffect(() => {
     if(pets.httpStatus === 200){
       props.history.push('/');
       props.resetPets();
       console.log("storeData('petsDetails', pets)==================",pets);
       storeData('petsDetails', pets);
     }
  }, [props.petsDetails.pets])

  const handleNameChange = (event) => {
    // console.log("handleNameChange=======",event.target.value);
    const value = event.target.value;
    setName(value);
  };

  const handleImageChange = (event) => {
    const value = event.target.value;
    setImage(value);
  };

  return (
    <div className="ui main text container segment" style={{ top: "50px" }}>
      <div className="ui huge header">ADD NEW PET</div>
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
    </div>
  );
};

export default PageComponent;