import styled from "styled-components";
import Inputs from "./Inputs";
import AgeDisplay from "./AgeDisplay";
import { useState } from "react";



const MainDashBoard = styled.div`
    background-color: var(--white);
    margin: auto;
    max-width: 45%;
    height: 55rem;
    padding: 1rem;
    margin-top: 10rem;
    border-radius: 20px 20px 180px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (max-width: 400px) {
        max-width: 90%;  // Adjust the max-width for screens up to 375px
        height: 45rem;
        border-radius: 20px 20px 100px 20px;
    }
    
`;

function Dashboard() {
    const [birthDay, setBirthDay] = useState(0);
    const [birthMonth, setBirthMonth] = useState(0);
    const [birthYear, setBirthYear] = useState(0);

    return <MainDashBoard><Inputs setBirthDay={setBirthDay} setBirthMonth={setBirthMonth} setBirthYear={setBirthYear}  />
    <AgeDisplay birthDay={birthDay} birthMonth={birthMonth} birthYear={birthYear}/></MainDashBoard>;
}

export default Dashboard;
