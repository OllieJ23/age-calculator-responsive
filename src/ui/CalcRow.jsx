// CalcRow.js
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useEffect, useMemo } from "react";

const Container = styled.div`
    display: flex;
    margin-bottom: -2.5rem; /* Adjust the margin-bottom to your preference */
    gap: 2rem;
`;

const Value = styled(motion.span)`
    color: var(--purple);
    font-size: 8rem;
    letter-spacing: -.5rem;
    font-weight: 800;
    @media (max-width: 400px) {
       font-size: 6rem;
    }
`;

const Title = styled.span`
    color: var(--off-black);
    font-size: 8rem;
    font-style: italic;
    letter-spacing: -.1rem;
    font-weight: 800;


    @media (max-width: 400px) {
       font-size: 6rem;
    }
`;

function CalcRow({ value, title }) {
    const controls = useAnimation();

    const animationKey = useMemo(() => Math.random().toString(36).substring(7), []);

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1, type: "spring", stiffness: 100 },
        });
    }, [controls, value, animationKey]);

    return (
        <Container>
            <Value key={animationKey} animate={controls} initial={{ opacity: 0, x: -20, scale: 0.8 }}>
                {value}
            </Value>
            <Title>{title}</Title>
        </Container>
    );
}

export default CalcRow;
