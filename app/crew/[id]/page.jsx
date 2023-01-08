import data from '../../../data/data.json'
export default function Planets({ params }) {
  const { id } = params
  const objId = data.crew.find((item) => item.id == id)
  return (
    <>
      <h1>CREW</h1>
    </>
  )
}
