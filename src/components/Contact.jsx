import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//template_2oim5gu
//service_ylyhcnk
//public key: kGhUF_zRQMhfxDmhi

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const[loading, setLoading] = useState(false);
  
  function handleChange(e)
  {
    const { target } = e;
    const {name, value} = target;
    setForm({...form, [name]: value});
  }

  function handleSubmit(e)
  {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_ylyhcnk", "template_2oim5gu", {from_name: form.name, to_name: "Miras", form_email: form.email, to_email: 'contact@jsmastery.pro', message: form.message}, "kGhUF_zRQMhfxDmhi")
    .then(() => 
    {
      setLoading(false);
      alert("Thank you! I will reply to you as soon as possible");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, 
    (error) => 
    {
        setLoading(false);
        console.log(error);
        alert("Uh-oh something went wrong :(");
      })
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='What is your name?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='What is your email?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder='What do you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {
              loading ? "Sending..." : "Send"
            }
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "between", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");