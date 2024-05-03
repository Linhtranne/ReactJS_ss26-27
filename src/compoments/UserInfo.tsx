class userInfo{
    name: string;
    sex: string;
    birth:string;
    email:string;
    address:string;
    constructor(name:string,sex:string,birth:string,email:string, address:string){
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.birth = birth;
        this.email = email;
    }
}
const user = new userInfo('Linh','he', 'hehe', 'heheehe', 'hehehehehe')
export default function UserInfo() {

  return (
    <div>
        <h1>Thông tin cá nhân</h1>
        <ul>
            <li>Họ và Tên:{user.name}</li>
            <li>Giới tính:{user.sex}</li>
            <li>Ngày sinh:{user.birth}</li>
            <li>Email:{user.email}</li>
            <li>Địa chỉ:{user.address}</li>
        </ul>
    </div>
  )
}
