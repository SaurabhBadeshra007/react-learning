import React from 'react'

const Cards = (props) => {

    // console.log(props);
    
  return (
    // <div className="parent">

      <div className="cards">
        <div className="head">

        
<img src={props.img} alt="" />       
 <button>
          <p>Save </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
          </svg>
        </button>
    </div>

    <div className="company-details">
      <span>

      <h4>{props.company}</h4> <h6>{props.dateposted}</h6>
      </span>
      <h2 className="post">{props.post}</h2>
      <span >
        <span className='job-type'>Part-time</span>
      <span className='job-type'>Senior Level</span>
        </span>
    </div>

<hr />
    <div className="apply-details">
      <span><h3>{props.pay}</h3>
      <p>{props.location}</p></span>
      <span><button>Apply Now</button></span>
    </div>
      </div>
    // </div>
  )
}

export default Cards
