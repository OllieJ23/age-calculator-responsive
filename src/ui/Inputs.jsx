import styled from "styled-components"
import Input from "./Input"

const Container = styled.div`
   
`





function Inputs({setBirthDay, setBirthMonth, setBirthYear}) {
    return (
       <Container>
        <Input setBirthDay={setBirthDay} setBirthMonth={setBirthMonth} setBirthYear={setBirthYear}/>
       </Container>
    )
}

export default Inputs
