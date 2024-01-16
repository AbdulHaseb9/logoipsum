import imgone from "../assets/Images/Benifits/Icon 001.png"
import imgtwo from "../assets/Images/Benifits/Icon 002.png"
import imgthree from "../assets/Images/Benifits/Icon 003.png"

export const Benifits = () => {
    return (
        <>
            <div className="w-full flex justify-center mt-10">
                <div className="w-4/5 flex flex-wrap">
                    <div className="w-full md:w-1/3 mt-5 text-center flex justify-center flex-col items-center">
                        <img src={imgone} alt="Benifit one" className="w-40" />
                        <h1 className="font-bold">Benchmarks</h1>
                        <p className="text-[#696871] mt-3">Lorem ipsum dolor sit amet elit. Quibusdam.</p>
                    </div>
                    <div className="w-full md:w-1/3 mt-5 text-center flex justify-center flex-col items-center">
                        <img src={imgtwo} alt="Benifit one" className="w-40" />
                        <h1 className="font-bold">Pricing Audit</h1>
                        <p className="text-[#696871] mt-3">Lorem ipsum dolor sit amet elit. Quibusdam.</p>
                    </div>
                    <div className="w-full md:w-1/3 mt-5 text-center flex justify-center flex-col items-center">
                        <img src={imgthree} alt="Benifit one" className="w-40" />
                        <h1 className="font-bold">Retention Audit</h1>
                        <p className="text-[#696871] mt-3">Lorem ipsum dolor sit amet elit. Quibusdam.</p>
                    </div>
                </div>
            </div>
        </>
    )
};