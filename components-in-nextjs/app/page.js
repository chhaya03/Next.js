import Image from "next/image";



export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
       <Image className="mx-auto object-cover" src="https://www.wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
              alt=" home image" fill={true} />

              
    </div>
  );
}
