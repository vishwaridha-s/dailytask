const Students=(props)=>{
    return(
        <div>
        <h1>{props.name}</h1>
        <h1>{props.email}</h1>
        </div>
    );
};

const Details=()=>{
    return(
        <div>
            <students name="vishwa" phoneNo="89076458" email="vishwa@gmail.com"/>
        </div>
    );
};
export default {Students,Details};