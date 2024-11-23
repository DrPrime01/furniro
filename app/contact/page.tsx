import Banner from "@/components/Banner";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <HeroBanner name="Contact" />
      <div className="flex flex-col container pt-24 pb-16">
        <div className="self-center flex flex-col gap-2 items-center text-center max-w-[644px] mb-20">
          <h2 className="font-semibold text-4xl">Get In Touch With Us</h2>
          <p className="text-gray-3 capitalize">
            For more information about our products & services, please feel free
            to drop us an email. Our staff are always available to help you out.
            Do not hesitate!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <div className="flex flex-col gap-y-11 py-11 px-14">
            <div className="flex items-start gap-x-[30px]">
              <Image
                src="/icons/location-marker.svg"
                alt="location-marker"
                width={22}
                height={27.59}
              />
              <div>
                <h5 className="text-xl font-medium">Address</h5>
                <p className="max-w-[212px]">
                  236 5th SE Avenue New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-[30px]">
              <Image
                src="/icons/phone.svg"
                alt="phone"
                width={30}
                height={30}
              />
              <div>
                <h5 className="text-xl font-medium">Phone</h5>
                <p className="max-w-[212px]">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-[30px]">
              <Image
                src="/icons/clock.svg"
                alt="clock"
                width={23}
                height={23}
              />
              <div>
                <h5 className="text-xl font-medium">Working Time</h5>
                <p className="max-w-[212px]">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-14 w-full">
            <form className="flex flex-col gap-y-9">
              <Input label="Your name" id="name" placeholder="John Doe" />
              <Input
                label="Email address"
                id="email"
                placeholder="john@doe.com"
              />
              <Input label="Subject" id="subject" placeholder="Hello" />
              <Textarea
                label="Message"
                id="message"
                placeholder="What do you have to say?"
              />
              <button className="bg-primary text-white py-3.5 px-20 rounded-[5px] md:w-fit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default page;
