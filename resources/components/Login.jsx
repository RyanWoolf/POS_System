import React, { useRef, useState } from 'react'
import login_img from '../../public/images/background/login.png'
import icon_user from '../../public/images/icons/login_user.png'
import icon_pw from '../../public/images/icons/login_pw.png'

const Login = () => {
  const [ selectedNum, setSelectedNum ] = useState('')
  const [ form, setForm ] = useState({
    login_id: '',
    password: ''
  })
  const [ isIDset, setIsIDset ] = useState(false)
  const [ isPWset, setIsPWset ] = useState(false)
  

  const onInputNum = (evt) => {
    evt.preventDefault()
    setSelectedNum(selectedNum + evt.target.value)
  }

  const delNum = (evt) => {
    evt.preventDefault()
    setSelectedNum(selectedNum.slice(0, -1))
  }

  const onEnter = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target
    setForm({
      ...form,
      [name]: value
    })
    // setIsIDset(true)
  }

  const pin_numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const pin_pad = pin_numbers.map(item => {
    return <button 
            value={item}
            onClick={onInputNum}
            className=" bg-pin_button rounded-full w-16 h-16 font-bold shadow-xl">
              {item}
          </button>
  })





  return (
    <article className="flex justify-center m-auto w-screen h-screen">
      <div className='flex m-auto gap-20'>
        <div className="flex flex-col">
          <div className="w-[400px] h-[200px] rounded-3xl p-6 bg-pin_button shadow-xl">
            <p className=''>Message</p>
          </div>
          <div className="absolute left-0 bottom-0">
            <img src={login_img} alt="" />

          </div>
        </div>
        <div className="flex flex-col">
          <div className="">

            <form action="" className="m-auto flex gap-10">
              { !isIDset ? (
              // ID input
              <div className="transition duration-300 flex justify-around gap-4 mt-8 pb-1 border-b-2 border-gray-400">
                <img src={icon_user} alt="" />
                <input name="login_id" type="text" placeholder='STAFF ID' className='bg-transparent w-40' 
                  value={selectedNum} />
                <button onClick={delNum} className={!selectedNum ? 'transition duration-300 opacity-0' : 'transition duration-300 opacity-90'}>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd"><path d="M7 5h17v16h-17l-7-7.972 7-8.028zm7 6.586l-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414-2.586 2.586z"/></svg>
                </button>
              </div> 
              ) : (
              // PW input
              <div className="transition duration-300 flex justify-around gap-4 mt-8 pb-1 border-b-2 border-gray-400">
                <img src={icon_pw} alt="" />
                <input name="password" type="password" placeholder='PIN' className='bg-transparent w-40' 
                  value={selectedNum} />
                <button onClick={delNum} className={!selectedNum ? 'transition duration-300 opacity-0' : 'transition duration-300 opacity-90'}>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd"><path d="M7 5h17v16h-17l-7-7.972 7-8.028zm7 6.586l-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414-2.586 2.586z"/></svg>
                </button>
              </div>
              ) }
            </form>

            {/* Pinpad */}
            <div className=" grid grid-cols-3 gap-7 pt-10">
              {pin_pad}
              <button 
                onClick={onEnter}
                className=" bg-pin_button rounded-full w-40 h-16 font-bold shadow-xl col-span-2 ">ENTER</button>
            </div>

          </div>
        </div>
      </div>
    </article>
  )
}

export default Login