"use client"
import React from 'react'

export default function Chatbot() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <div className='fixed bottom-8 left-6 z-50'>
        <button
          aria-label='Open chatbot'
          onClick={() => setOpen((s) => !s)}
          className='flex items-center justify-center h-12 w-12 rounded-full shadow-lg'
          style={{ backgroundColor: '#C5A972' }}>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12 3C7 3 3 6.58 3 11c0 1.79.67 3.43 1.8 4.78L4 21l5.37-1.53A9.95 9.95 0 0 0 12 19c5 0 9-3.58 9-8s-4-8-9-8z' fill='white'/>
          </svg>
        </button>

        {open && (
          <div className='mt-3 w-80 bg-white rounded-lg shadow-xl overflow-hidden'>
            <div className='px-4 py-3 border-b flex items-center justify-between'>
              <strong>Chatbot</strong>
              <button
                aria-label='Close chatbot'
                onClick={() => setOpen(false)}
                className='text-gray-500 hover:text-gray-700 p-1 rounded'>
                <svg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M18 6L6 18M6 6l12 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>
            <div className='p-4 text-sm text-gray-700'>
              Salut ! Comment puis-je vous aider aujourd'hui ?
            </div>
            <div className='p-3 border-t'>
              <div className='flex gap-2 items-center'>
                <input
                  className='flex-1 min-w-0 px-3 py-2 border rounded text-sm'
                  placeholder='Écrire un message...'
                />
                <button className='flex-shrink-0 px-3 py-2 bg-[#C5A972] text-white rounded text-sm'>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
