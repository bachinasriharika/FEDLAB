import React, {useState} from 'react'
function Array() {
const [arr,setArr] = useState([]);
const [user,setUser] = useState('');
const onClick = () => {
setArr( arr => [...arr, user]);
};
return (
<div>
    <p style={{textAlign: 'center'}}>
<input type="text" value={user} onChange={(e)=> setUser(e.target.value)}/><br/>
<button style={{textAlign: 'center'}} onClick={onClick}>Add User</button>
<table border="1">
<tr><th>UserName</th></tr>
{arr.map(ele => {
return <tr><td>{ele}</td></tr>
})}
</table>
</p>
</div>
)
}
export default Array
