import React, { useEffect, useState } from "react";
import { ImUsers } from "react-icons/im";
import { AiFillStar, AiOutlineStar, AiFillSetting } from "react-icons/ai";
import { MdStarHalf } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { FcCancel } from "react-icons/fc";
import pass from "./pictures/pass1.png";
import Chart from "./Chart";
import { chartArray, driverTopSection, driverTopSection2 } from "./Array";
import { TopSec, TopSection, TopSection2 } from "./Map";
import LayoutThree from "./LayoutThree";
import SideIcon from "./SideIcon";
import Navside from "./Navside";
import Card from "./Card"

const Check = () => {
  let showIcon = "";
  const [totalTripCompleted, setTotalTripCompleted] = useState(
    driverTopSection2[0].amount
  );
  const [totalTripCancel, setTotalTripCancel] = useState(
    driverTopSection2[1].amount
  );
  const [toggleSideIcon, setToggleSideIcon] = useState(false);
  // const [showIcon, setShowIcon] = useState(true)
  const [disable, setDisable] = useState(false)
  const disableFunc = ()=>{
    setDisable(!disable)
  }
  const RejectFunc = () => {
    disableFunc()
    setTotalTripCancel((prev) => prev + 1);
  };
  const AcceptFunc = () => {
    disableFunc()
    setTotalTripCompleted((prev) => prev + 1);
  };

  const toggle = () => {
    setToggleSideIcon(!toggleSideIcon);

    console.log("hello");
  };

  useEffect(() => {
    const cancelledTrip = JSON.parse(localStorage.getItem("cancelled")) || 0;
    const completedTrip = JSON.parse(localStorage.getItem("trips")) || 0;
  }, []);

  useEffect(() => {
    localStorage.setItem("cancelled", JSON.stringify(totalTripCancel));
    localStorage.setItem("trips", JSON.stringify(totalTripCompleted));
  }, [totalTripCancel, totalTripCompleted]);

  return (
    <LayoutThree toggle={toggle}>
      <div className={`${!toggleSideIcon ? 'checkContainer' : 'changeContainerWidth'}`}>
        {toggleSideIcon ? (
          <SideIcon showSide={!toggleSideIcon} />
        ) : (
          <Navside toggleSideIcon={toggleSideIcon} />
        )}

        {/* <SideIcon showSide={!toggleSideIcon} />
      
        <Navside toggleSideIcon={toggleSideIcon} /> */}

        {/* 2nd Child */}

        <div className="check">
          <div className='topHead' >
            <div className='topHeadInner' >
              <TopSection items={driverTopSection}>
                <div className="checkHead">
                  <div className="starContainer">
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <MdStarHalf className="star" />
                    <AiOutlineStar className="star" />
                  </div>
                  <div className="ratingText">
                    Rating <div>3.5</div>
                  </div>
                </div>
              </TopSection>
            </div>
            <div className='secondTopSection' >
              <TopSection2
                icon={<GrCompliance className="completeTrip" />}
                text="Completed Trips"
                amount={totalTripCompleted}
              />
              <TopSection2
                icon={<FcCancel className="completeTrip" />}
                text="Cancelled Trips"
                amount={totalTripCancel}
              />
            </div>
          </div>

          <div className='checkBodyContainer'>
          <div style={{ display: "flex" }} className="">
            <Card accept={AcceptFunc} reject={RejectFunc} toggleDisable ={disableFunc} disable={disable}/>
            </div>
            {/* <div className="checkBody" style={{ overflow: "scroll" }}>
              <div style={{ display: "flex" }} className="checkBodyContent">
                <div>
                  <img src={pass} alt="" className="picture" />
                  <h5 style={{ marginTop: "0px" }}>Mr Pauliski</h5>
                </div>

                <div style={{ marginLeft: "30px", marginTop: "10px" }}>
                  Location: Mushin <br />
                  Destination: Isolo
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                    marginLeft: "40px",
                  }}
                >
                  <button style={{ marginBottom: "5px" }} onClick={AcceptFunc}>
                    Accept
                  </button>
                  <button onClick={RejectFunc}>Reject</button>
                </div>
              </div>
            </div> */}

            <div className="chart">
              {" "}
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </LayoutThree>
  );
};

export default Check;
