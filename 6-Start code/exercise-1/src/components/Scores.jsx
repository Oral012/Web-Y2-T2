import Statistic from "./Statistic"
export default function Scores({course_name, props}){
  function isWarning(score) {
    if(score > 50)  return <td>{score}</td>
    else return <td className="warning">{score}</td>
  }
    function avg(){
      let sum = 0;
      props.forEach( stu => sum += stu.score);
      return (sum / props.length).toFixed(2);
    }
    function min(){
      let min = props[0].score;
      props.forEach( stu => {
        if(stu.score < min) min = stu.score;
      });
      return min;
    }
    function max(){
      let max = props[0].score;
      props.forEach( stu => {
        if(stu.score > max) max = stu.score;
      });
      return max;
    }
    return(
        
        <div className="scores">
          <h1>{course_name}</h1>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {props.map( stu => 
              <tr>
                <td>{stu.firstName}</td>
                <td>{stu.lastName}</td>
                {isWarning(stu.score)}
              </tr>
           ) }   
            </tbody>
          </table>
          < div className="statistic">         
              <Statistic average={avg()} min={min()} max={max()} />
            </div>
        </div>

    )
}