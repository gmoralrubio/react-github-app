export default function Card({ children, className }) {
  return (
    <div className={`rounded-md bg-white p-4 shadow ${className}`}>
      {children}
    </div>
  )
}
