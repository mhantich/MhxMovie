import { Indexerror } from '@/animation'
import Lottie from 'lottie-react'


function Error() {
  return (
    <div className="fixed bg-black  min-h-screen z-50 top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
    <Lottie
    //   style={{ width: "14rem", height: "16rem" }}
      animationData={Indexerror}
      loop={true}
    />
  </div>  )
}

export default Error