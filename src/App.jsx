
import './App.css'

function App() {
 

  return (
    <>
      <div className='w-screen h-screen bg-[#f1eeee] grid justify-center items-center'>
        <div className='grid grid-cols-4 gap-4 w-[1000px]'>

          <div className='bg-[#f9eee1] row-span-2 p-[27px] flex flex-col justify-center items-center rounded-xl'>
            <h4 className='text-[33px] leading-[35px] font-medium'>Create and schedule content <span className='text-purple-500 italic'>quicker.</span></h4>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-create-post.webp" alt="create-post" className='mt-5' />
          </div>

          <div className='bg-[#7650dc] col-span-2 p-11 rounded-xl'>
            <h2 className='text-[45px] leading-[45px] font-sans text-center font-medium text-white'>Social Media <span className='text-yellow-400'>10x</span> <span className='italic'>Faster</span> with AI</h2>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-five-stars.webp" alt="stars"  className='m-[18px_61px_7.5px] w-72'/>
            <p className='text-white text-center text-lg font-light '>Over 4,000 5-star reviews</p>
          </div>

          <div className='bg-[#dacffc] row-span-3 rounded-xl p-[18px] overflow-hidden'>
            <h4 className='text-[22px] mt-3 font-semibold'>Schedule to social media.</h4>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-schedule-posts.webp" alt="graph" className='w-[300px] h-[200px] object-fill ml-[30px] my-[18px]'/>
            <p className='text-base m-[0px_16px_8px_8px]'>Optimize post timings to publish content at the perfect time for your audience.</p>
          </div>

          <div className='bg-white row-span-2 rounded-xl overflow-hidden p-[18px]'>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-multiple-platforms.webp" alt="" className='w-[290px] ml-[30px]'/>
             <h4 className='text-[24px] font-medium leading-tight text-balance mt-[12px] mr-[19px]'> Manage multiple accounts and platforms.</h4>
          </div>

          <div className='bg-[#ffcb6b] row-span-2 rounded-xl p-[18px] overflow-hidden relative '>
            <h4 className='text-2xl mr-[24px] font-medium leading-tight text-balance'>Maintain a consistent posting schedule.</h4>
              <img src="https://cendyz.github.io/bento-grid-main/img/illustration-consistent-schedule.webp" alt="" className='absolute bottom-[-60px] w-44'/>

          </div>

          <div className='bg-[#ffcb6b] row-span-2 p-[28px_18px] flex flex-col justify-center items-center gap-5 rounded-xl '>
            <h4 className='text-[28px] font-medium mr-[28px] leading-[25px]'>Write your content using AI.</h4>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-ai-content.webp" alt="content" className='mt-[27px]' />
          </div>

          <div className='bg-[#ffffff] rounded-xl p-[18px]'>
            <h2 className='font-medium text-[53px] pt-[8px]'>&gt;56%</h2>
            <p className='font-medium text-[16px] m-[8px_0px_36px_0px]'>faster audience growth</p>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-audience-growth.webp" alt="" className='w-[160px]'/>
          </div>

          <div className='bg-[#7650dc] col-span-2 grid grid-cols-2 justify-center items-center rounded-xl p-[18px]'>
            <img src="https://cendyz.github.io/bento-grid-main/img/illustration-grow-followers.webp" alt="" className='w-[228px]'/>
            <h4 className='font-medium text-[30px] ml-[10px] leading-[35px] text-white'>Grow followers with non-stop content.</h4>
          </div>

        </div>
      </div>   
    </>
  )
}

export default App
