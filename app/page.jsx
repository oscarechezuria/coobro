import styles from './page.module.css'

export default function Home() {
  return (
    <main>
          <h2>Coobro</h2>
            <div className="flex gap-2">
              <div className="w-16 h-14 bg-one-500 text-white px-3  rounded-md ">1</div>
              <div className="w-16 h-14 bg-two-500 text-white px-3  rounded-md ">2</div>
              <div className="w-16 h-14 bg-yellow-400 text-white px-3  rounded-md ">3</div>
              <div className="w-16 h-14 bg-three-500 text-white px-3  rounded-md ">4</div>
            </div>
    </main>
  )
}
