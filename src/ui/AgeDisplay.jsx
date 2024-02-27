// AgeDisplay.js
import styled from "styled-components";
import CalcRow from "./CalcRow";
import { useState } from "react";
import { differenceInYears, differenceInMonths, differenceInDays } from "date-fns";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    margin-top: -3.5rem;

    @media (max-width: 400px) {
        margin-left: 2rem;
        margin-top: 2rem;
    }
`;

function AgeDisplay({ birthDay, birthMonth, birthYear }) {
    const currentDate = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const [submitCount] = useState(0);

    const calculateAge = () => {
        const calculatedYears = differenceInYears(currentDate, birthDate);
        const calculatedMonths = differenceInMonths(currentDate, birthDate) % 12;
    
        // Adjust for birth day in the future of the current month
        const birthDayInFuture = birthDate.getDate() > currentDate.getDate();
        const lastMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        const remainingDays = birthDayInFuture
            ? lastMonthDays - birthDate.getDate() + currentDate.getDate()
            : differenceInDays(currentDate, new Date(currentDate.getFullYear(), currentDate.getMonth(), birthDate.getDate()));
    
        return { years: calculatedYears, months: calculatedMonths, days: remainingDays };
    };

    const age = calculateAge();

    return (
        <Container>
            <CalcRow key={`years-${submitCount}`} value={age.years} title="years" />
            <CalcRow key={`months-${submitCount}`} value={age.months} title="months" />
            <CalcRow key={`days-${submitCount}`} value={age.days} title="days" />
        </Container>
    );
}

export default AgeDisplay;
