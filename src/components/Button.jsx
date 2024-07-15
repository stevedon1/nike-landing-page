

export default function Button({label, iconUrl, fullwidth}) {
  return (
    <button className={`${fullwidth && "w-full"} flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red border-coral-red rounded-full text-white`}>
        {label}
        {iconUrl && <img
            src={iconUrl}
            alt="Arrow Right icon"
            className="ml-2  rounded-full w-20 h-20"
        />}
    </button>
  )
}
