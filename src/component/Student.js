import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
export default function Student(props) {
  return (
    <div className="Student">
      <span>{props.student.name}</span>
      <AiOutlineEdit />
      <RiDeleteBinLine onClick={() => props.deleteList(props.student.id)} />
    </div>
  );
}
