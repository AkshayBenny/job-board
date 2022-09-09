import { PlusIcon, SearchIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between p-12'>
        <h1 className='font-medium text-3xl '>Tasks</h1>
        <div className='flex items-center gap-12'>
          <form className='bg-gray-50 border flex items-center p-2 gap-2 border-[#466BAF] rounded-lg'>
            <button type='submit' className='cursor-default'>
              <SearchIcon className='h-5' />
            </button>
            <input
              type='text'
              placeholder='Search'
              className='focus:outline-none focus:ring-none focus:border-none border-none bg-gray-50'
            />
          </form>
          <button className='bg-[#466BAF] text-white h-fit w-fit flex items-center justify-center gap-2 rounded-lg border border-[#466BAF] hover:bg-white hover:text-[#466BAF] transition px-3 py-2 font-medium'>
            <PlusIcon className='h-5' />
            <p>Create task</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
