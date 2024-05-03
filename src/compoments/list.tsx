
export default function list() {
    return (
      <div>
        <h1>Bai 9</h1>
          <table>
              <tr className='table table-primary'>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Ngày sinh</th>
                  <th>Giới thiệu</th>
                  <th>Địa chỉ</th>
                  <th>Hành động</th>
              </tr>
              <tr className='table'>
                      <td>1</td>
                      <td>Linh ne/<td>
                      <td>2005-01-01</td>
                      <td>hehehe</td>
                      <td>HEhehehehe</td>
                      <td>
                          <button className=' btn  '>Edit</button>
                          <button className=' btn btn-danger  '>Delete</button>
                      </td>
                  </tr>
                  <tr className='table'>
  
                      <td>2</td>
                      <td>Linh ne2</td>
                      <td>2005-01-01</td>
                      <td>heeeeeeeeeeeeeeee.</td>
                      <td>hehehehe</td>
                      <td>
                          <button className=' btn  '>Edit</button>
                          <button className=' btn btn-danger  '>Delete</button>
                      </td>
                  </tr>
          </table>
      </div>
    )
}