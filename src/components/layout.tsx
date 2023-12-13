import { Link } from 'react-router-dom'

import { ListItem } from './list-item'
import { ModeToggle } from './mode-toggle'
import { CommandBox } from './search-box'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { navigationItems } from '@/constants'

interface LayoutProps {
  children: React.ReactNode
  overrideRightClick?: boolean
  navItems: typeof navigationItems
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-col w-full items-end">
        <NavigationMenu>
          <NavigationMenuList>
            {props.navItems.map((navItem) => {
              if (navItem.children) {
                return (
                  <NavigationMenuItem key={navItem.title} className="w-20 ml-4">
                    <NavigationMenuTrigger>
                      {navItem.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {navItem.children.map((component) => (
                          <Link to={component.href} key={component.title}>
                            <ListItem
                              key={component.title}
                              title={component.title}
                            >
                              {component.description}
                            </ListItem>
                          </Link>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              } else {
                return (
                  <NavigationMenuItem key={navItem.title} className="w-20 ml-4">
                    <Link to={navItem.href}>{navItem.title}</Link>
                  </NavigationMenuItem>
                )
              }
            })}
          </NavigationMenuList>
          <div className="ml-4">
            <ModeToggle />
          </div>
        </NavigationMenu>
      </div>

      <ContextMenu>
        {props.overrideRightClick ? (
          <ContextMenuTrigger className="flex w-full flex-col">
            {props.children}
          </ContextMenuTrigger>
        ) : (
          <>{props.children}</>
        )}
        <ContextMenuContent className="w-64">
          <CommandBox />
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
