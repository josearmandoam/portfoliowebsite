'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/email';
import { toast } from 'react-hot-toast';
import SubmitBtn from './submit-btn';


export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.75);
    return (
        <section className='mt-24 p-4 scroll-mt-24' id="contact" ref={ref}>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-center text-md mb-6 -mt-4'>You can contact me directly at <a href="mailto:jose_armandoam@outlook.es" className='underline'>{" "}jose_armandoam@outlook.es{" "}</a> or thought this form.</p>
            <form action={async (formData:FormData) => {
                const { status, message } = await sendEmail(formData);

                if(status === 200){
                    // toast.success(message);
                    toast.custom((t) => (
                        <div
                          className={`${
                            t.visible ? 'animate-enter' : 'animate-leave'
                          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                        >
                          <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 pt-0.5">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  alt=""
                                />
                              </div>
                              <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  Alex Smith
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Thanks for your message! I will contact you soon as posible.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex border-l border-gray-200">
                            <button
                              onClick={() => toast.dismiss(t.id)}
                              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      ))
                }else{
                    toast.error(message);
                }
            }} className='flex flex-col gap-2 w-min(100%,35rem)'>
                <input 
                type="email" 
                name="email" 
                maxLength={100}
                required
                className='px-4 py-2 border border-black/10 rounded-xl dark:text-black/80'
                    placeholder='Your email' />
                <textarea 
                name="message" 
                maxLength={500}
                required
                className='h-48 px-4 py-2 border border-black/10 rounded-xl dark:text-black/80' 
                placeholder='Your message'/>
                <SubmitBtn/>
            </form>
        </section>
    )
}
