const users = [
    {
        fullName: "Cse Towhid",
        age: 32,
        phones: [
            {home: "01982525844"},
            {office: "01302612476"},
        ]
    },
    {
        fullName: "Towhid Hasan",
        age: 32,
        phones: [
            {home: "01982525844"},
            {office: "01302"},
        ]
    },
]

export default function Nested(){
    return (
        <div>
            <h3>Nested Lists</h3>
            {users.map((user, index) => (
                <article key={index}>
                    <h3>{user.fullName}</h3>
                    <p>{user.age}</p>
                    {
                        user.phones.map((phone, index) => <div key={index}>
                            <p>Home: {phone.home}</p>
                            <p>Office: {phone.office}</p>
                        </div>

                        )
                    }
                </article>
            ))}
        </div>
    )
}