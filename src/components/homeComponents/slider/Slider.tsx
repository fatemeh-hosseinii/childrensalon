import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <div className="bg-slate-700 w-full mt-3">
        <Image
        className='lg:block hidden'
        src="/assets/media/slider.png"  
        alt="Slider Image"
        width={1200}
        height={500}
        layout="responsive"
        />

       <Image
        src="/assets/media/slider2.png"
        className='sm:hidden block'  
        alt="Slider Image"
        width={1200}
        height={500}
        layout="responsive"
        />  

      </div>
     
    </>
  );
};

export default Slider;
