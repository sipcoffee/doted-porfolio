import React from 'react'
import { Badge } from '../ui/badge'
import HoverBadge from '../animations/hoverBadge'
import { Link as LinkScrolls } from 'react-scroll'

export default function NavbarLinks() {
  return (
    <nav className="space-x-2 text-sm font-medium">
      <HoverBadge>
        <Badge className="bg-yellow-500 hover:bg-yellow-800 font-pixel">
          <LinkScrolls 
            to="experience" 
            spy={true} 
            smooth={true} 
            offset={5} 
            duration={500}  
          >
            Experience
          </LinkScrolls>
        </Badge>
      </HoverBadge>

      <HoverBadge>
        <Badge className="bg-blue-500 hover:bg-blue-800">
          <LinkScrolls 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={5} 
            duration={500}  
          >
            Projects
          </LinkScrolls>
        </Badge>
      </HoverBadge>

      <HoverBadge>
        <Badge className="bg-red-500 hover:bg-red-800">
          <LinkScrolls 
            to="stack" 
            spy={true} 
            smooth={true} 
            offset={5} 
            duration={500}  
          >
            Tech Stack
          </LinkScrolls>
        </Badge>
      </HoverBadge>

      <HoverBadge>
        <Badge className="bg-green-500 hover:bg-green-800">
          <LinkScrolls 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={5} 
            duration={500}  
          >
            Contact
          </LinkScrolls>
        </Badge>
      </HoverBadge>
    </nav>
  )
}
