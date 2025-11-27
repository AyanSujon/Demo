import { Button } from './ui/button'

function Stats() {
  return (
    <div className='my-20'>

      <div className='flex justify-center gap-3'>
        <div className='h-4 w-4 bg-[#070750] rounded-full mt-2'></div>
        <p className='text-[#767676] text-[24px]'>
          Join thousands of students achieving extraordinary results
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-39 text-center mt-10'>
        <div>
          <p className='font-[600] text-[48px] text-[#070750]'>94%</p>
          <p className='text-[#333333] text-[24px]'>Achieve Their Goals</p>
        </div>

        <div>
          <p className='font-[600] text-[48px] text-[#F6D46B]'>84%</p>
          <p className='text-[#333333] text-[24px]'>College Acceptance</p>
        </div>

        <div>
          <p className='font-[600] text-[48px] text-[#8A38F5]'>72%</p>
          <p className='text-[#333333] text-[24px]'>Scholership Winners</p>
        </div>

        <div>
          <p className='font-[600] text-[48px] text-[#4A90E2]'>4.9</p>
          <p className='text-[#333333] text-[24px]'>Average Rating</p>
        </div>
      </div>


      {/* Bug in the button */}
      <div className='flex flex-wrap justify-center'>
        {/* <Button 
          text="Start your success story"
        /> */}
      </div>

    </div>
  )
}

export default Stats