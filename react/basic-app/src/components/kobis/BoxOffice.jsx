import './BoxOffice.css';

export default function BoxOffice(props){
  let cnt = props.cnt;
  let total = props.total;
  let amt = props.amt;
  
  if(props.type === 'content'){
    cnt = parseInt(cnt).toLocaleString().concat('명');
    total = parseInt(total).toLocaleString().concat('명');
    amt = parseInt(amt).toLocaleString().concat('원');
  }

  return (
    <div>
      <p style={{width:60}}>{props.rank}</p>
      <p style={{width:220}}>{props.title}</p>
      <p style={{width:100}}>{props.open}</p>
      <p style={{width:100}}>{cnt}</p>
      <p style={{width:100}}>{total}</p>
      <p style={{width:150}}>{amt}</p>
    </div>  
  );
}

// 구조분해할당
// export default function BoxOffice({rank, title, open, cnt, total}){
//   return (
//     <tr>
//       <td>{rank}</td>
//       <td>{title}</td>
//       <td>{open}</td>
//       <td>{cnt}</td>
//       <td>{total}</td>
//     </tr>  
//   );
// }