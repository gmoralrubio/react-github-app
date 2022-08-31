import Card from './Card'

export default function InfoCard({ cardData }) {
  return (
    <Card key={cardData.id} className="flex items-center gap-4">
      <div
        className={`${cardData.color} flex w-fit items-center justify-center rounded-full p-3`}
      >
        {cardData.icon}
      </div>
      <div>
        <span className="text-3xl font-bold leading-none">
          {cardData.value}
        </span>
        <h2 className="text-lg capitalize">{cardData.label}</h2>
      </div>
    </Card>
  )
}
