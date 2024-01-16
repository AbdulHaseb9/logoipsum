import secimg from "../assets/Images/subscription.png"

export const Subscription = () => {
    return (
        <>
            <div className="w-full flex justify-center mt-36 px-5">
                <div className="sm:w-4/5 sm:flex sm:items-center">
                    <div className="sm:w-1/2 flex justify-center">
                        <img src={secimg} alt="section image" className="w-56" />
                    </div>
                    <div className="sm:w-1/2 mt-5 text-center sm:text-left">
                        <h1 className="text-3xl font-bold">Subscription index</h1>
                        <p className="text-[#696871] text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic obcaecati accusamus repellendus voluptatum! Omnis quibusdam.</p>
                        <a href="#" className="text-[#5454D4] font-bold">Learn more</a>
                    </div>
                </div>
            </div>
        </>
    )
}