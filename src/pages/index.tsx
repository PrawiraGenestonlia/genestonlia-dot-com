import '../App.css'

import { useState } from 'react'

import { Layout } from '@/components/layout'
import { SearchBox } from '@/components/search-box'
import { Button } from '@/components/ui/button'
import { navigationItems } from '@/constants'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Layout navItems={navigationItems} overrideRightClick={false}>
      <SearchBox />
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  )
}

export default App
