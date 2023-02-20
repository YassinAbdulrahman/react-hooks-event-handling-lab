// Code EyesOnMe Component Here
function EyesOnMe(){
    function handle(){
        console.log('Good!')
    }
  return(
    <div>
        <button onFocus={handle} onBlur={(e)=> console.log('Hey! Eyes on me!')}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;