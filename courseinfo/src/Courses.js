import { Header, Content, Total } from "./App";

export const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map(course => <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
      )}
    </div>
  );
};

