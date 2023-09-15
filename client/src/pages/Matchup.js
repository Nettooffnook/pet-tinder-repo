import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PETS } from "../utils/queries";
import { CREATE_MATCHUP } from "../utils/mutations";

const Matchup = () => {
  const { loading, data } = useQuery(QUERY_PETS);

  const userList = data?.pets || [];

  const [formData, setFormData] = useState({
    user1: "JavaScript",
    user2: "JavaScript",
  });
  let navigate = useNavigate();

  const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // NOT WORKING!!!!!!!!
      // const { data } = await createMatchup({
      //   variables: { ...formData },
      // });
      // navigate(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      user1: "JavaScript",
      user2: "JavaScript",
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>User 1: </label>
            <select name="user1" onChange={handleInputChange}>
              {userList.map((user) => {
                return (
                  <option key={user._id} value={user.name}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            <label>User 2: </label>
            <select name="user2" onChange={handleInputChange}>
              {userList.map((user) => {
                return (
                  <option key={user._id} value={user.name}>
                    {user.name}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger" type="submit">
              Create Matchup!
            </button>
          </form>
        )}
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Matchup;
