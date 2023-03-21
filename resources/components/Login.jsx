import React from 'react'
import login_img from '../../public/images/background/login.png'
import icon_user from '../../public/images/icons/login_user.png'
import icon_pw from '../../public/images/icons/login_pw.png'

const Login = () => {
  return (
    <article className="flex justify-center m-auto w-screen h-screen">
      <div className='flex m-auto gap-20'>
        <div className="flex flex-col">
          <div className="w-[400px] h-[200px] bg-white rounded-3xl p-6">
            Message
          </div>
          <div className="absolute left-0 bottom-0">
            <img src={login_img} alt="" />

          </div>
        </div>
        <div className="flex flex-col">
          <div className="grow">
            <form action="">
              <div className="flex">
                <img src={icon_user} alt="" />
                <input type="text" placeholder='STAFF ID' className='bg-transparent' />
              </div> 
              <div className="flex">
                <img src={icon_pw} alt="" />
                <input type="password" placeholder='PIN' className='bg-transparent' />
              </div>
            </form>
            <div className="grow grid grid-cols-3">

              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>0</button>
              <button>DEL</button>

            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Login