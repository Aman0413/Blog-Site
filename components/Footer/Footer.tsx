
'use client'


export default function Footer() {


    return (
        <footer>
            <section className="footer-section bg-red-300 w-full h-[400px] flex justify-center items-center">
                <div className="bg-white w-[90%] p-4 h-[80%] flex justify-center items-center rounded-md">
                    <div className="  md:w-[50%] h-full p-4 flex flex-col justify-between">
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-3">
                                <h2 className="text-3xl font-bold">Schedule Your Consultation Today</h2>
                                <p className="md:text-sm text-text-primary text-xs">

                                    Weframe tech is the modern, award-winning platform that empowers some of the largest names in healthcare and advisory sectors.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2  justify-center items-center text-xs md:text-sm">
                            <div className="flex space-x-4 w-full justify-center items-center">
                                <input className="w-[50%] border rounded-md px-2 py-1" type="text" placeholder="Enter your email" />
                                <button className="bg-primary px-4 py-2 rounded-lg text-white font-bold ">
                                    Book a meeting
                                </button>
                            </div>
                            <p className=" text-sm text-text-primary ">By submitting you agree to our privacy policy.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" p-4 flex justify-center items-center flex-col ">
                <div className="bg-white w-[90%] p-4 h-[80%] flex justify-around  rounded-md  min-h-[250px]">
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold">About</h3>
                        <ul className="text-text-primary text-xs flex flex-col space-y-2">
                            <li>Company Overview</li>
                            <li>Careers</li>
                            <li>Press & Media</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold">Resouces</h3>
                        <ul className="text-text-primary text-xs flex flex-col space-y-2">
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Webinars & Events</li>
                            <li>Case Studies</li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="font-bold">Support & Contact</h3>
                        <ul className="text-text-primary text-xs flex flex-col space-y-2">
                            <li>Contact Us</li>
                            <li>Technical Support</li>
                            <li>Feedback</li>
                            <li>Comminity Forum</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-text-primary my-5">

                </div>
                <div className="flex justify-center items-center text-xs text-text-primary space-x-4">
                    <span>©2024 @weframetech · All rights reserved</span>
                    <span>Term of use</span>
                    <span>Privacy policy</span>
                    <span>Security</span>
                </div>
            </section>
        </footer>
    )
}
