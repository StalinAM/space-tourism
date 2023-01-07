import { PlanetsInfo } from '../../../components/PlanetsInfo'
import data from '../../../data/data.json'
export default function Planets({ params }) {
  const { id } = params
  const objId = data.destinations.find((item) => item.id == id)
  return (
    <>
      <PlanetsInfo data={objId} />
    </>
  )
}
