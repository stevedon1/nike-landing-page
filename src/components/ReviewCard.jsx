import { star } from "../assets/icons";


export default function ReviewCard({imgURL, customerName, rating, feedback}) {
  return (
    <div className="flex mt-24 justify-center items-center flex-col">
        <img
            src={imgURL}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="info-text mt-6 max-w-sm text-center ">{feedback}</p>
        <div className="flex justify-center items-center gap-2.5 mt-3">
            <img src={star} alt="" width={24} height={24} className="object-contain m-0" />
            <p className="font-montserrat text-slate-gray text-xl ">({rating})</p>
        </div>
        <h3 className="mt-1 text-center font-bold font-palanquin text-3xl">{customerName}</h3>
    </div>
  )
}
