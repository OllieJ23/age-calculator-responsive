import { useForm } from "react-hook-form";
import styled from "styled-components";
import InputRow from "./InputRow";
import SubmitBtn from "./SubmitBtn";

const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 5rem;
  margin-top: 4rem;

  @media (max-width: 400px) {
    margin-left: 2rem;
    }
`;

const InputField = styled.input`
  max-width: 14rem;
  margin: 0;
  border: 1px solid ${({ $error }) => ($error ? "var(--light-red)" : "var(--light-grey)")};
  border-radius: 8px;
  padding: .16rem 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--purple);
  }

  &:hover::placeholder {
    color: var(--purple);
  }

  @media (max-width: 400px) {
      font-size: 2rem;
       max-width: 8rem;
       max-height: 4rem;
       padding: .8rem 0.9rem;
    }
`;

// ... (import statements)

function Input({ setBirthDay, setBirthMonth, setBirthYear }) {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();


  const daysInMonth = {
    1: 31, // January
    2: 28, // February
    3: 31, // March
    4: 30, // April
    5: 31, // May
    6: 30, // June
    7: 31, // July
    8: 31, // August
    9: 30, // September
    10: 31, // October
    11: 30, // November
    12: 31, // December
  };

  function isValidDate(day, month, year) {
    const maxDaysInMonth = daysInMonth[month] || 31; // Default to 31 if month is not in the list
    return day >= 1 && day <= maxDaysInMonth;
  }

  function onSubmit({ date, month, year }) {
    if (isValidDate(Number(date), Number(month), Number(year))) {
      setBirthDay(Number(date));
      setBirthMonth(Number(month));
      setBirthYear(Number(year));
    } else {
      setError("date", {
        type: "manual",
        message: "Must be valid date",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
      <InputRow title="Day" $error={errors?.date?.message}>
          <InputField
            placeholder="DD"
            type="text"
            id="date"
            {...register("date", {
              required: "This field is required!",
              min: { value: 1, message: "Must be a valid Day." },
              max: { value: 31, message: "Must be a valid Day." },
              minLength: { value: 2, message: "Please use DD Format." },
        
              pattern: { value: /^[0-9]*$/, message: "Must be a valid number." },
            })}
            $error={errors?.date?.message}
          />
        </InputRow>

        <InputRow title="Month" $error={errors?.month?.message}>
          <InputField
            placeholder="MM"
            type="text"
            id="month"
            {...register("month", {
              required: "This field is required!",
              min: { value: 1, message: "Must be a valid month." },
              max: { value: 12, message: "Must be a valid month." },
              minLength: { value: 2, message: "Please use MM Format." },
              maxLength: { value: 2, message: "Please use MM Format." },
              pattern: { value: /^[0-9]*$/, message: "Month must be a valid number." },
            })}
            $error={errors?.month?.message}
          />
        </InputRow>

        <InputRow title="Year" $error={errors?.year?.message}>
          <InputField
            placeholder="YYYY"
            type="text"
            id="year"
            {...register("year", {
              required: "This field is required!",
              min: { value: 1, message: "Invalid Year" },
              max: { value: 2024, message: "Must be in the past." },
              minLength: { value: 4, message: "Please use YYYY Format." },
              maxLength: { value: 4, message: "Please use YYYY Format." },
              pattern: { value: /^[0-9]*$/, message: "Year must be a valid number." },
            })}
            $error={errors?.year?.message}
          />
        </InputRow>
      </InputContainer>

      <SubmitBtn type="submit" />
    </form>
  );
}

export default Input;

