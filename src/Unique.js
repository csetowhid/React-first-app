import { v4 as uuidv4 } from 'uuid';

const todos =[
    {
        id : uuidv4(),
        title : "Unique Title 1",
        description : "Unique Description 1"
    },
    {
        id : uuidv4(),
        title : "Unique Title 2",
        description : "Unique Description 2"
    },
    {
        id : uuidv4(),
        title : "Unique Title 3",
        description : "Unique Description 3"
    },
    {
        id : uuidv4(),
        title : "Unique Title 4",
        description : "Unique Description 4"
    }
];

const Unique = () => {
    // console.log(uuidv4());
    return <div>
        {todos.map((todo) => {
        const {id, title, description} = todo;

            return <div key={uuidv4()}>
                <h3>{id}</h3>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        })}
    </div>;
};

export default Unique;