interface Props { questions: string[]; }

const Questions = ({ questions }: Props) => {
  return (
    <div id="questions" className="p-lg-5">
      {questions.map((ques, i) => (
        <div key={i}>
          <h5>Question 0{i + 1}</h5>
          <p>{ques}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
