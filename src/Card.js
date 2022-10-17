function Card(props){
  const {textTitle,textDesc} = props; //destructuring

  // const name = ['dog', 'cat'];
  // const [dog, cat] = name; 
  // const dog = name[0];
  // const cat = name[1];

  return <div className='card'>
  {/* <h1 className='cardTitle'>{props.textTitle}</h1> */}
  <h1 className='cardTitle'>{textTitle}</h1>
  <p className='cardBody'>{textDesc}</p>
</div>
}

export default Card;