import ListCourse from './compoments/ListCourse'
import Calculation from './compoments/Calculation'
import UserInfo from './compoments/UserInfo'
import ColorBox from './compoments/ColorBox'
import FormatName from './compoments/FormatName'
import AdminIndex from './compoments/AdminIndex'
import list from './compoments/List'
import todolist from './compoments/todolist'
export default function App() {
  return (
    <div>
      <ListCourse></ListCourse>       
      <Calculation></Calculation>
      <UserInfo></UserInfo>
      <ColorBox></ColorBox>
      <FormatName></FormatName>
      <AdminIndex></AdminIndex>
      <list></list>
      <todolist></todolist>
    </div>
  )
}
