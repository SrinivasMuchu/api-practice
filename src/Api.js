import React,{useState,useEffect} from 'react'

function Api() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
         setLoading(true)
       setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(result=> result.json())
        .then(jsondata=>{
            // console.log(json);
            setData(jsondata)
            setLoading(false)
        })
       }, 3000); 

    },[])
  return (
    <div>
        {loading?'loading...':<div>
        {data.map((listData,i)=>
        <div key={i} style={{border:'1px solid black'}}>
            <p>url:<a href='abc'>{listData.url}</a></p>
            <p>id:{listData.id}</p>
            <p>completed:{listData.title}</p>
        </div>)}</div>}
      
    </div>
  )
}

export default Api
