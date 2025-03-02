interface DesignerItemProps {
    item: {
      id: number;
      image: string;
    };
  }
  
  const DesignerItem: React.FC<DesignerItemProps> = ({ item }) => {
    return (
      <div className="flex justify-center items-center p-1">
        <img src={item.image} alt={`Brand ${item.id}`} className="max-w-full" />
      </div>
    );
  };
  
  export default DesignerItem;
  