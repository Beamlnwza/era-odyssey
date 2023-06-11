import Link from 'next/link'
import './page.css'

export default function Home() {
  return (
    <>
      <div className="flex w-screen justify-center items-center bg-black text-black flex-col gap-2 animate-rainbow">
        <div className=" flex h-screen flex-col justify-center items-center">
          <h1 className="text-5xl font-bold animate-rainbow">
            ERA ODYSSEY PROJECT
          </h1>
          <div className="animate-spin text-lg">IDLE SUPER COOL GAME</div>
          <div className="flex flex-col justify-center items-center text-2xl gap-2">
            <h2>สุดยอดเกม idle โครตโหดโครตอันตราย</h2>
            <h2>
              ระบบยอดเยี่ยมดี สุดยอดระบบ กาชา microtransactions แดกเงินมึง
            </h2>
            <h2>กระโดดๆ ยิงๆๆๆ</h2>
          </div>
          <p className="font-bold text-xl text-red-600 animate-pulse">
            จัดจำหน่าย วันไหนไม่รู้
          </p>
          <Link href="/links">
            <button className="border bg-white flex justify-center items-center h-12 px-2 font-extrabold text-2xl pt-2">
              DISCORD
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
