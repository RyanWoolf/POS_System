import React from 'react'
import login_img from '../../public/images/background/login.png'
import icon_user from '../../public/images/icons/login_user.png'
import icon_pw from '../../public/images/icons/login_pw.png'

const Login = () => {
  const pin_numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const pin_pad = pin_numbers.map(item => {
    return <button 
            value={item}
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
            <form action="" className="m-auto">
              <div className="flex gap-4 mb-4 pb-1 border-b-2 border-gray-400">
                <img src={icon_user} alt="" />
                <input type="text" placeholder='STAFF ID' className='bg-transparent' />
              </div> 
              <div className="flex gap-4 pb-1 border-b-2 border-gray-400">
                <img src={icon_pw} alt="" />
                <input type="password" placeholder='PIN' className='bg-transparent' />
              </div>
            </form>
            <div className=" grid grid-cols-3 gap-7 pt-10">
              {pin_pad}
              {/* <button className=" bg-pin_button rounded-full w-16 h-16 font-bold shadow-xl ">C</button> */}
              <button className=" bg-pin_button rounded-full w-40 h-16 font-bold shadow-xl col-span-2 ">DEL</button>

              {/* <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>0</button>
              <button>DEL</button> */}

            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Login