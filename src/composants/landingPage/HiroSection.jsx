import Typewriter from "../TypeWrither";

function HiroSection() {
  return (
    <div className="bg-[url('./images/header.png')] bg-no-repeat pt-20 w-full h-screen">
      <div className="">
        <div className="flex flex-col justify-center items-center w-1/2 gap-20 m-8 ">
          <h1 className="text-3xl md:text-4xl font-bold   animate-fade-bounce font-[Italianno] text-[#588b00]">
            Café Du Fleuve
          </h1>
          <div className="flex flex-col justify-center items-center  md:w-full ">
            <span className="text-xl md:h-48 ">
              <Typewriter
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam, itaque atque assumenda earum reprehenderit molestias odio. Adipisci vitae sapiente explicabo maxime neque, dolore molestiae expedita velit, at pariatur veniam voluptates vel natus rem quidem nam et. Praesentium  "
                }
                speed={100}
                deleteDelay={1000}
              />
            </span>
            <button className="border-2 py-3 px-5 rounded-lg s bg-[#588b00] text-[#140100] font-semibold hover:bg-[#140100] hover:text-[#588b00]">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HiroSection;
