const {cars}=require('./db');
const add=(newCar)=>{
    let newPlateNumber = "RAA112E";
    newCar.plateNumber = newPlateNumber;
    cars.push(newCar);
    console.log('\nnew car added');
    console.log(cars);
}
const display=()=>{
    console.log("all my cars\n");
    console.log(cars);
}
const update=(plateNumber,key,value)=>{
    var exists=cars.find(Element=>Element.plateNumber===plateNumber);
    if (!exists) {
        console.log("we don't have that car in our database");
    } else {
        exists[key]=value;
        console.log("updated\n");
        console.log(exists);
    }
    }
    //update many
    const manyUpdate=(plateNumber,object)=>{
            var exists=cars.find(Element=>Element.plateNumber===plateNumber);
            console.log(exists);
            if (!exists) {
                console.log("wrong information");
            } else {
                for (const key in object) {
                    exists[key]=object[key];  
                    }
                    console.log("\n updated");
                    console.log(exists);
                }
            }
                const remove = (plateNumber) => {
                    var exists = cars.find(Element=>Element.plateNumber === plateNumber);
                    console.log(exists);
                    if(!exists){
                    console.log('\n There are no cars in the database');
                }else{
                    var remaining=[];
                    remaining=cars.filter(element=>element.plateNumber!==plateNumber);
                    console.log("deleted");
                    console.log(remaining);
                }
                }

            
    

module.exports={
add,display,update,manyUpdate,remove
}