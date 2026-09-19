
import { useState } from "react"
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react"

const projects = [
  {
    name: "Website Redesign",
    description: "Redesign the company website",
    progress: 72,
    tasks: 18,
    color: "bg-violet-500",
  },
  {
    name: "Mobile Application",
    description: "Build the new mobile platform",
    progress: 48,
    tasks: 24,
    color: "bg-blue-500",
  },
  {
    name: "Network Dashboard",
    description: "Internal network monitoring system",
    progress: 91,
    tasks: 32,
    color: "bg-emerald-500",
  },
]

const upcomingTasks = [
  {
    title: "Finish dashboard wireframes",
    project: "Website Redesign",
    date: "Today",
    priority: "High",
  },
  {
    title: "Review API integration",
    project: "Mobile Application",
    date: "Tomorrow",
    priority: "Medium",
  },
  {
    title: "Prepare project presentation",
    project: "Network Dashboard",
    date: "Sep 22",
    priority: "Low",
  },
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-950 text-white transition-transform duration-300 lg:translate-x-0 " +
          (sidebarOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
              <FolderKanban size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold">TaskForge</h1>
              <p className="text-xs text-slate-400">Work smarter</p>
            </div>
          </div>

          <button
            className="text-slate-400 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Workspace
          </p>

          <div className="space-y-1">
            <SidebarItem
              icon={<LayoutDashboard size={19} />}
              label="Dashboard"
              active
            />

            <SidebarItem
              icon={<FolderKanban size={19} />}
              label="Projects"
            />

            <SidebarItem
              icon={<ClipboardList size={19} />}
              label="My Tasks"
            />

            <SidebarItem icon={<Users size={19} />} label="Team" />

            <SidebarItem
              icon={<CalendarDays size={19} />}
              label="Calendar"
            />

            <SidebarItem
              icon={<Bell size={19} />}
              label="Notifications"
              badge="3"
            />
          </div>

          <p className="mb-3 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Manage
          </p>

          <div className="space-y-1">
            <SidebarItem
              icon={<Settings size={19} />}
              label="Settings"
            />

            <SidebarItem
              icon={<CircleHelp size={19} />}
              label="Help Center"
            />
          </div>
        </nav>

        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold">
              S
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Shakya</p>
              <p className="truncate text-xs text-slate-400">
                Project Developer
              </p>
            </div>

            <button className="text-slate-400 hover:text-white">
              <LogOut size={17} />
            </button>
          </div>
        </div>
      </aside>

      <main className="lg:ml-64">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div className="relative hidden md:block">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search projects, tasks..."
                className="w-72 rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500" />
            </button>

            <div className="hidden h-7 w-px bg-slate-200 sm:block" />

            <button className="flex items-center gap-2 rounded-xl p-1.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                S
              </div>

              <ChevronDown size={16} className="text-slate-400" />
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-1 text-sm font-medium text-violet-600">
                Saturday, September 19
              </p>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Good afternoon, Shakya 👋
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Here's what's happening with your projects today.
              </p>
            </div>

            <button className="flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">
              <Plus size={18} />
              New Project
            </button>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={<FolderKanban size={20} />}
              label="Total Projects"
              value="12"
              change="+2 this month"
            />

            <StatCard
              icon={<ClipboardList size={20} />}
              label="Active Tasks"
              value="48"
              change="+8 this week"
            />

            <StatCard
              icon={<CheckCircle2 size={20} />}
              label="Completed"
              value="126"
              change="+14 this week"
            />

            <StatCard
              icon={<Users size={20} />}
              label="Team Members"
              value="18"
              change="+3 this month"
            />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Recent Projects</h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Track your team's progress
                  </p>
                </div>

                <button className="text-sm font-medium text-violet-600">
                  View all
                </button>
              </div>

              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.name}>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            "h-10 w-10 rounded-xl " + project.color
                          }
                        />

                        <div>
                          <h4 className="text-sm font-semibold">
                            {project.name}
                          </h4>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <span className="text-sm font-semibold">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="mb-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={
                          "h-full rounded-full " + project.color
                        }
                        style={{ width: project.progress + "%" }}
                      />
                    </div>

                    <p className="text-xs text-slate-400">
                      {project.tasks} tasks
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Upcoming Tasks</h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Stay on top of your work
                  </p>
                </div>

                <button className="text-sm font-medium text-violet-600">
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h4 className="text-sm font-semibold">
                        {task.title}
                      </h4>

                      <PriorityBadge priority={task.priority} />
                    </div>

                    <p className="mb-3 text-xs text-slate-500">
                      {task.project}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CalendarDays size={14} />
                      {task.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-6 rounded-2xl bg-slate-950 p-6 text-white sm:p-7">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="mb-1 text-sm font-medium text-violet-300">
                  Weekly productivity
                </p>

                <h3 className="text-xl font-bold">
                  You're making great progress! 🚀
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  You completed 14 tasks this week.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-3xl font-bold">82%</p>
                <p className="text-xs text-slate-400">weekly goal</p>
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[82%] rounded-full bg-violet-500" />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function SidebarItem({
  icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  badge?: string
}) {
  return (
    <button
      className={
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition " +
        (active
          ? "bg-violet-600 text-white"
          : "text-slate-400 hover:bg-slate-900 hover:text-white")
      }
    >
      {icon}

      <span className="flex-1 text-left">{label}</span>

      {badge && (
        <span className="rounded-full bg-violet-500 px-2 py-0.5 text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </button>
  )
}

function StatCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode
  label: string
  value: string
  change: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          {icon}
        </div>

        <span className="text-xs font-medium text-emerald-600">
          {change}
        </span>
      </div>

      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  if (priority === "High") {
    return (
      <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-600">
        High
      </span>
    )
  }

  if (priority === "Medium") {
    return (
      <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-600">
        Medium
      </span>
    )
  }

  return (
    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
      Low
    </span>
  )
}

export default App

