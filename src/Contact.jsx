
import {motion} from 'framer-motion';
import {fadeIn} from './variants';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const Contact = () => {

   
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cs5q8i8', 'template_uoj772q', form.current, {
        publicKey: '4Ho3siSbXby1E8H39',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="section" id="contact">
        <div className="contact flex justify-around items-center flex-col-reverse mx-auto w-full md:flex-row gap-x-10 gap-y-20 ">
          <motion.form
          variants={fadeIn('up',0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.2}}
          ref={form} onSubmit={sendEmail}
            class=" bg-black/20 p-5 sm:p-10 rounded-lg  border-2 border-solid [border-image:linear-gradient(to_right,_darkblue,blue,#86198f)_1] mx-auto w-full flex-1 "
          >
           
            <div class="mb-8">
              <label
 
                class="block mb-2 text-purple-500 text-3xl font-semibold font-secondary "
              >
                Your Name
              </label>
              <input
               type="text" name="user_name"
                class="w-full outline-none bg-transparent border-b-2 border-white/40 text-white/70 text-lg mt-8"
                placeholder="Enter your Name.."
              />
            </div>
            <div class="mb-8">
              <label
              
                class="block mb-10 text-3xl font-semibold font-secondary text-purple-500"
              >
                Your Email
              </label>
              <input
                type="email" name="user_email"
           
                class="w-full outline-none bg-transparent border-b-2 border-white/40 text-white/90 text-lg "
                placeholder="Enter your Email.."
              />
            </div>
            <div class="mb-8">
              <label
               
                class="block mb-2 text-3xl font-semibold font-secondary text-purple-500"
              >
                Send Msg
              </label>
              <textarea
                 name="message"
                class="p-5 bg-transparent border-2 border-white/40 text-white/70 text-lg resize-none w-full rounded-lg mt-8"
              />
            </div>
            <button type="submit" value="Send" className="btn w-40 h-10">Send</button>
          
          </motion.form>
          <motion.div
          variants={fadeIn('down',0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.2}}
          className="w-[300px] sm:w-[550px] ">
            <img src="https://i.postimg.cc/NfyTxsdL/services.png"  alt="imagr" className='object-contain w-full h-full ' />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;

