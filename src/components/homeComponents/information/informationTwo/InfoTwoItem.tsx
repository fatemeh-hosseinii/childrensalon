interface InfoItemProps  {
    id:string,
    name:string,
    city:string,
    comment:string
}
const InfoTwoItem: React.FC<InfoItemProps>=({item}) => {
    return ( <>
    <div className="flex flex-col text-center  w-[29%]">
        <p className=" text-[14px] text-[#1B1F30]">{item.comment}</p>
        <p className="mt-2 font-bold">
            {item.name}
        </p>
        <p>{item.city}</p>
    </div>
    
    </> );
}
 
export default InfoTwoItem;