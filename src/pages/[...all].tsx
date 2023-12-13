import { Layout } from '@/components/layout'
import { SearchBox } from '@/components/search-box'
import { navigationItems } from '@/constants'

function App() {
  return (
    <Layout navItems={navigationItems} overrideRightClick={false}>
      <SearchBox />
      <div className="flex h-full items-center justify-center flex-row">
        <div className="font-mono">404</div>
        <div className="font-mono px-4">|</div>
        <div className="font-mono">You have navigated to the unknown...</div>
      </div>
    </Layout>
  )
}

export default App
