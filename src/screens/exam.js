import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../features/exams';

const Exam = () => {
  console.log("Rendering Exams");

  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam);

  const [question, setQuestion] = useState('1. question');

  const onQuestionSubmit = () => (
    dispatch(addQuestion(question))
  )

  return (
    <div>
      <hr></hr>
      <p>Showing exams</p>
      <hr></hr>
      id: {exam.exam_id}
      name: {exam.exam_name}
      questions:
      <ul>
        {
          exam.questions.map((question) => (<li>{question}</li>))
        }
      </ul>
      <input type='text' onChange={(e) => setQuestion(e.target.value)} />
      <input type='button' onClick={onQuestionSubmit} value='Add Question' />
    </div>
  )
}

export default Exam;
