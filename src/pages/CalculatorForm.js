import React,{useRef} from "react"


//age,exerciseTime,distantTravledByCar,distantTravledByPublicCommute,distantTravledByBike
const CalculatorForm = () => {

    const age = useRef(null);
    const exerciseTime = useRef(null);
    const distantTravledByCar = useRef(null);
    const distantTravledByPublicCommute = useRef(null);
    const distantTravledByBike = useRef(null);
    const carbonRet = 0


    


    const handleSubmit = (event) => {
        event.preventDefault();
        const carbonRet = calc(age?.current?.value,
            exerciseTime?.current?.value,
            distantTravledByCar?.current?.value,
            distantTravledByPublicCommute?.current?.value,
            distantTravledByBike?.current?.value
            )
        // alert(carbonRet)
        document.getElementById("carbonRes").innerHTML  = carbonRet.toFixed(2);
        console.log(carbonRet)
    }
    

    const calc = (age,exerciseTime,distantTravledByCar,distantTravledByPublicCommute,distantTravledByBike) => {
        var carbonRet = 0
        if(age >= 16){
            carbonRet += 0.9
        }
        else{
            carbonRet += 0.7
        }
        carbonRet += 50 * exerciseTime * 0.0005 * 0.078
        carbonRet += distantTravledByCar * 0.223
        carbonRet += distantTravledByPublicCommute * 0.0062
        carbonRet += distantTravledByBike * 0.005

        return carbonRet
    }


    return(
        <div className = "row">
            <div className = " col-lg-6 px-5 py-5">
                <form onSubmit={handleSubmit}>
                    <div className = "form-group">
                        <label>age</label>
                        <input className = "form-control" ref={age}></input>
                    </div>
                    <div className = "form-group">
                        <label>exerciseTime</label>
                        <input className = "form-control" ref={exerciseTime}></input>
                    </div>
                    <div className = "form-group">
                        <label>distantTravledByCar</label>
                        <input className = "form-control" ref={distantTravledByCar}></input>
                    </div>
                    <div className = "form-group">
                        <label>distantTravledByPublicCommute</label>
                        <input className = "form-control" ref={distantTravledByPublicCommute}></input>
                    </div>
                    <div className = "form-group">
                        <label>distantTravledByBike</label>
                        <input className = "form-control" ref={distantTravledByBike}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className = "col-lg-6 px-5 py-5">
                <h3>Your Carbon Footprint( kg)</h3>
                <h1 id = "carbonRes"></h1>
            </div>

        
        </div>
    )
}

export default CalculatorForm