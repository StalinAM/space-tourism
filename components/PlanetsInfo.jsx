import Image from 'next/image'
export function PlanetsInfo({ data }) {
  return (
    <>
      <Image width="200" height="200" src={data.image} alt={data.name} />
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div></div>
        <div>
          <p>
            <span>AVG. DISTANCE</span>
            {data.distance}
          </p>
          <p>
            <span>Est. travel time</span>
            {data.travel}
          </p>
        </div>
      </div>
    </>
  )
}
