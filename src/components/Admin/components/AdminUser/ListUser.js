import React from 'react';
import User from './User';


function ListUser(props) {
    const {users} = props
    console.log(users);
    return (
        <div className="admin-user-list" id="list-user">
            <table>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
                {
                    users.map((item, index) => (<User user={item} number={index}></User>))
                }
            </table>
        </div>
    );
}

export default ListUser;