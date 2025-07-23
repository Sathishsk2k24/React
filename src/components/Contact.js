const Contact = () => {
    return (
        <div>
            <h1 className="font-bold m-4 text-2xl">This is Contact Page!</h1>
            <form>
                <input className="border border-gray-300 p-4 m-4 text-gray-700" placeholder="Enter Your Name" type="text"></input>
                <input className="border border-gray-300 p-4 m-4  text-gray-700" placeholder="Enter Your EmailId" type="email"></input>
                <input className="border border-gray-300 p-4 m-4  text-gray-700" placeholder="Enter Your Message" type="email"></input>
                <button className="border border-gray-500 p-4 m-4 rounded-lg bg-slate-300 ">Submit</button>
            </form>
        </div>
    )
}
export default Contact;