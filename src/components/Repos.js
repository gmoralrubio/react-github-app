import ForkedCard from './charts/ForkedCard'
import LanguagesCard from './charts/LanguagesCard'
import StarsCard from './charts/StarsCard'
import StarsPerLanguageCard from './charts/StarsPerLanguageCard'

export default function Repos() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <LanguagesCard />
      <StarsCard className="col-span-2" />
      <StarsPerLanguageCard />
      <ForkedCard className="col-span-2" />
    </div>
  )
}
