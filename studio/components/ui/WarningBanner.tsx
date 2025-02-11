import { IconAlertCircle } from '@supabase/ui'

const WarningBanner = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="rounded bg-yellow-900 px-6 py-3">
      <div className="flex flex-row gap-4">
        <div className="mt-1 text-yellow-1100 dark:text-yellow-800">
          <IconAlertCircle size={14} strokeWidth={2} />
        </div>
        <div className="flex flex-col xl:flex-row gap-x-3 items-start xl:items-center">
          <h1 className="text-sm text-scale-1200 dark:text-scale-100">{title}</h1>
          <p className="text-xs text-yellow-1200 dark:text-yellow-800">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WarningBanner
