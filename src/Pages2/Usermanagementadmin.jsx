import React, { useState } from 'react';

export default function Usermanagementadmin() {
    const [users, setUsers] = useState([
        { id: 1, username: 'Admin', email: 'admin@example.com', password: 'password123' },
    ]);

    const addUser = () => {
        const newUser = { id: Date.now(), username: '', email: '', password: '' };
        setUsers([...users, newUser]);
    };

    const updateUser = (id, field, value) => {
        setUsers(users.map(user => (user.id === id ? { ...user, [field]: value } : user)));
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">USER MANAGEMENT</h1>
            <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-full mb-4" onClick={addUser}>
                ADD USER
            </button>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-green-500 text-black">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">USERNAME</th>
                        <th className="border p-2">EMAIL</th>
                        <th className="border p-2">PASSWORD</th>
                        <th className="border p-2">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="border p-2">{user.id}</td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={user.username}
                                    onChange={(e) => updateUser(user.id, 'username', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={user.email}
                                    onChange={(e) => updateUser(user.id, 'email', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={user.password}
                                    onChange={(e) => updateUser(user.id, 'password', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
