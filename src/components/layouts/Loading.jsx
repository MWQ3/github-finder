import LoadingGif from './assets/spinner.gif'
function Loading() {
  return (
    <div className='w-100 mt-20'>
    <img 
    src={LoadingGif} 
    alt='Loading...'
    width={180} 
    className='text-center mx-auto' 
    />
    </div>
  )
}

export default Loading