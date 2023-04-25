import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
export default function StudentList() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Lê Gia Bảo",
      isComplete: false,
    },
    {
      id: 2,
      name: "Gió Mùa Thu",
      isComplete: false,
    },
  ]);
  const addlist = (text) => {
    setList([...list, { id: 3, name: text, isComplete: false }]);
  };
  const deleteList = (id) => {
    let newList = list.filter((stu) => stu.id != id);
    setList(newList);
  };
  return (
    <div className="StudentList">
      <FormAdd addlist={addlist} />
      {list.map((value, key) => {
        return <Student student={value} deleteList={deleteList} />;
      })}
    </div>
  );
}
