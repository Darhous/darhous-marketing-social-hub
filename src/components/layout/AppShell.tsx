import Sidebar from './Sidebar'

interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex pt-16">
      <Sidebar />
      <main className="min-h-[calc(100vh-64px)] w-full lg:mr-60">
        <div className="px-4 py-8 md:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
