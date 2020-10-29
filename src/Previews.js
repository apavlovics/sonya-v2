import Preview from './Preview'

const Previews = () => {
  return (
    <main>
      <Preview
          size="large"
          url="jauna-teika"
          title="Jauna Teika Apartment"
          year="2020" />
      <Preview
          size="medium"
          url="andrey-silchenko"
          title="Andrey Silchenko Hair Salon"
          year="2016" />
      <Preview
          size="medium"
          url="open-space"
          title="Open Space in Central Riga"
          year="2016" />
      <Preview
          size="large"
          url="round-house"
          title="Round House Apartment"
          year="2012" />
    </main>
  )
}

export default Previews
