import React from 'react'
import { Button } from '../ui/button'
import { ArrowUp } from 'lucide-react'

export default function NavigateTop() {
  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='fixed bottom-5 right-5 '>
        <Button 
          className="rounded-full cursor-pointer"
          onClick={scrollToTop} 
          size="icon"
        >
          <ArrowUp/>
        </Button>
    </div>
  )
}
