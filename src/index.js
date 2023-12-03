const {add, display,update,manyUpdate,remove}=require('./carsController');
const item={
    model:"Toyota",
    manufacturingYear:2004,
    CarOwner:"eric",
    color:"black",
    const:"$20 million"
}
add(item);
display();
update('ARE111U','CarOwner','teta');
let objectUpdate={
    plateNumber:"ARE111U",
    model:"Toyota",
    CarOwner:"allan",
    color:"white",
    const:"$20 million"
}
manyUpdate(objectUpdate);
remove('ARF305U');