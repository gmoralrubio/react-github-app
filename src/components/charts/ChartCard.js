import Card from '../Card'

export default function ChartCard({ children, className, title }) {
  return (
    <Card className={className}>
      <div className="flex items-center border-b border-gray-300">
        <h2 className="pb-4 text-xl font-bold">{title}</h2>
      </div>
      <div className="mt-4 h-72">{children}</div>
    </Card>
  )
}
