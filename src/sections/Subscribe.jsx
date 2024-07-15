import Button from "../components/Button";


export default function Subscribe() {
  return (
    <section id="contact-us" className="max-container justify-between items-center gap-10 max-lg:flex-col ">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold" >
          Sign Up for
          <span className="text-coral-red"> Updates </span>
          & Newsletters
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray rounded-full gap-5 p-2.5 ">
          <input type="text"
              placeholder="subscribe@nike.com"
              className="input"
          />
           <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label="Sign Up" fullwidth/>
        </div>
        </div>
       
    </section>
  )
}
