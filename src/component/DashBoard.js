import React, { PureComponent, useState } from "react";
import "./DashBoard.css";
import searcgimg from "../image/Search icon.png";
import notification from "../image/Vector (1).png";
import TotalTarnsaction from "../image/transaction_icon.png";
import TotalRevenue from "../image/Vector (2).png";
import TotalLikes from "../image/Vector (3).png";
import TotalUser from "../image/Vector (4).png";
import plus from "../image/plus (Stroke).png";
import whatsapp from "../image/whatsapp.png";
import envolope from "../image/envelope.png";
import instagram from "../image/logo-instagram 1.png";
import youtube from "../image/logo-twitter 1.png";
import cros from "../image/Icon.png";
import ham from "../image/hamburger menu.png";



import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { useUserAuth } from "../context/UserAuthentication";
const DashBoard = ({ handleopen, userInfo,handletoggel,tog }) => {
  const data2 = [
    {
      img: TotalRevenue,
      titel: "Total Revenues",
      price: "$2,129,430",
      rating: "+2.5%",
      color: "#7FCD93",
    },
    {
      img: TotalTarnsaction,
      titel: "Total Tarnsaction",
      price: "1,520",
      rating: "+1.7%",
      color: "#DEBF85",
    },
    {
      img: TotalLikes,
      titel: "Total Likes",
      price: "9,721",
      rating: "+1.4%",
      color: "#ECA4A4",
    },
    {
      img: TotalUser,
      titel: "Total User",
      price: "9,721",
      rating: "+4.2%",
      color: "#A9B0E5",
    },
  ];
// console.log(userInfo)
  const data = [
    {
      name: "Week 1",
      User: 500,
      Guest: 400,
    },
    {
      name: "Week 2",
      User: 350,
      Guest: 450,
    },
    {
      name: "Week 3",
      User: 200,
      Guest: 300,
    },
    {
      name: "Week 4",
      User: 400,
      Guest: 350,
    },
  ];

  const data3 = [
    { name: "Basic Tees", value: 55 },
    { name: "Custom Short Pants", value: 31 },
    { name: "Super Hoodies C", value: 14 },
  ];
  const COLORS = ["#98D89E", "#F6DC7D", "#EE8484"];
  const {user, login, googleSignIn } = useUserAuth();

  return (
    <div className="DashBoardContainer">
      <div className="DashBoardManuBar">
        <div className="headTitel">
        <h1>Dashboard</h1>
        <div onClick={handletoggel}>
        {
      tog ?   
      <div className="hambarger" ><img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" width={20}></img></div>
      :   <div className="hambarger" ><img src='https://cdn-icons-png.flaticon.com/128/5358/5358649.png' width={25}></img></div> 
      
        }
        </div>
        </div>
        <div className="DashBarSearchBar">
          <div className="searchBox">
            <input placeholder="Search..."></input>
            <img src={searcgimg}></img>
          </div>

          <img className="notification" src={notification}></img>
          {/* <img  className='profile' src="" alt="Profile"></img> */}
          <div className='profile'><p>{"D"}</p></div>
        </div>
      </div>

      <div className="HighLightSection">
        {data2.map((item) => (
          <>
            <div className="highlightInfo">
              <div
                className="highLightImg"
                style={{ backgroundColor: item.color }}
              >
                {" "}
                <img src={item.img}></img>
              </div>

              <p className="highlightTitel">{item.titel}</p>
              <div className="peiceRating">
                <h4>{item.price}</h4>
                <p>{item.rating}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="chartSection">
        <div className="ChartHeaderSection">
          <div className="chartActivities">
            <h3>Activities</h3>
            <p>May - June 2021</p>
          </div>
          <div className="usergestoptions">
            <p>
              {" "}
              <span className="ge"></span> Guest
            </p>{" "}
            <p>
              <span className="use"></span>User
            </p>
          </div>
        </div>
        <BarChart
          width={900}
          height={250}
          data={data}
          margin={{
            top: 5,
            // right: 30,
            // left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray=" 1"  />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          {/* <Legend /> */}
          <Bar dataKey="User" fill="#98D89E"  barSize={38} radius={5} />
          <Bar dataKey="Guest" fill="#EE8484" barSize={38}  radius={5} />
        </BarChart>
      </div>

      <div className="FooterSection">
        <div className="paichartContainer">
          <div className="Paichartbox">
            <h3>Top Products</h3> <p>May - June 2021</p>
          </div>
          <div className="paiChart">
            <PieChart className="PieChart" width={250} height={180}>
              <Pie
                data={data3}
                cx={90}
                cy={80}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                //   paddingAngle={0}

                dataKey="value"
              >
                {data3.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <div className="piaIteam">
              <div className="basicTees">
                <p>
                  <span className="bs"></span>Basic Tees
                </p>{" "}
                <p className="percentage">55%</p>
              </div>
              <div className="custom">
                <p>
                  <span className="cus"></span>Custom Short Pants
                </p>{" "}
                <p className="percentage">31%</p>
              </div>
              <div className="superHo">
                <p>
                  <span className="super"></span>Super Hoodies
                </p>{" "}
                <p className="percentage">14%</p>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleopen} className="AddProfilesec">
          { userInfo.length !== 0   ? 
  <>
          <div className="userInfoContainer">
            <h1>{userInfo.name}</h1>
            <div className="userbox">
            <div className="userinfobox1">
              <div className="userDetails">
                <img src={whatsapp}></img>
                <p>+91 {userInfo.phone}</p>
              </div>
              
              <div className="userDetails">
                <img src={envolope}></img>
                <p>{userInfo.email}</p>
              </div>
            </div>
            <div className="userinfobox1">
            <div className="userDetails">
                <img src={instagram}></img>
                <p>{userInfo.instagram}</p>
              </div>
              <div className="userDetails">
                <img src={youtube}></img>

                <p>{userInfo.youtube}</p>
              </div>
            </div>
            </div>
          </div>

          </>
  :
          <>
    <img src={plus}></img>
    <p>Add Profile</p>
    </>}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
