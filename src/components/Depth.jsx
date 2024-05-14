import depthimg from "../assets/Images/depth.png"

export const Depth = () => {
    return (
        <>
            <div id="blog" className="w-full flex justify-center mt-14 px-5">
                <div className="w-full sm:w-4/5 sm:flex sm:items-center">
                    <div className="sm:w-1/2 text-center sm:text-left">
                        <h1 className="text-3xl font-bold">In-depth metrics</h1>
                        <p className="text-[#696871] text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic obcaecati quibusdam.</p>
                        <a href="#" className="text-[#5454D4] font-bold">Learn more</a>
                    </div>
                    <div className="sm:w-1/2 flex justify-center mt-5">
                        <img src={depthimg} alt="section image" className="w-56" />
                    </div>
                </div>
            </div>
        </>
    )
};