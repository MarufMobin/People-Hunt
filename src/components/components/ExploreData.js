import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "@reach/router";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;
const ExploreData = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/users`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUsersData(data.data));
  }, []);
  console.log(usersData);

  // Update user are here
  const navigate = useNavigate();
  const findPeople = (e) => {
    try {
      fetch(`http://localhost:5000/api/v1/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: e,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            return navigate("/success");
          }
        });
    } catch (err) {
      console.error(err.massage);
    }
  };
  return (
    <>
      <div className="row">
        {usersData?.map((userdatas, index) => (
          <div className="col-md-3" key={index}>
            <div className="nft__item m-0 mb-5" key={index}>
              <div className="author_list_pp">
                <img className="lazy" src={userdatas.image} alt="" />
                <i className="fa fa-check"></i>
              </div>

              <Outer>
                <span>
                  <img
                    src={userdatas.image}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </span>
              </Outer>
              <div className="spacer-10"></div>
              <div className="spacer-10"></div>

              <div className="nft__item_info">
                <h4>{userdatas?.name ? `Name: ${userdatas.name}` : ""}</h4>

                <div className="nft__item_price">
                  {userdatas?.age ? `Age: ${userdatas.age}` : ""}
                </div>

                <div className="nft__item_price">
                  {userdatas?.number ? `Number: ${userdatas.number}` : ""}
                </div>
                <div className="nft__item_action">
                  {userdatas?.address ? `Address: ${userdatas.address}` : ""}
                </div>
                <div>
                  {!userdatas?.success && (
                    <div className="nft__item_action">
                      <span onClick={(e) => findPeople(userdatas?._id)}>
                        Find People
                      </span>
                    </div>
                  )}
                </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExploreData;
