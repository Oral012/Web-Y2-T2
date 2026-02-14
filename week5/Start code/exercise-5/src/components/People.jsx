
export default function People({p}) {
    return(
        <li className="people-item">
            <button>
             <img src={p.image.src}/>
             <div className="Des">
                <h3>{p.name}</h3>
                <h4>{p.price}</h4> 
             </div>
              
            </button>
            
        </li>
    );
}