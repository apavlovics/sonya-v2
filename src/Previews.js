function Previews() {
  return (
    <main>
      <div class="preview large" style={{backgroundImage: "url(/projects/jauna-teika/cover.jpg)"}}>
        <a href="/design/jauna-teika/">
          <div class="details">
            <h2>Jauna Teika Apartment</h2>
            <span>2020</span>
          </div>
        </a>
      </div>
      <div class="preview medium" style={{backgroundImage: "url(/projects/andrey-silchenko/cover.jpg)"}}>
        <a href="/design/andrey-silchenko/">
          <div class="details">
            <h2>Andrey Silchenko Hair Salon</h2>
            <span>2016</span>
          </div>
        </a>
      </div>
      <div class="preview medium" style={{backgroundImage: "url(/projects/open-space/cover.jpg)"}}>
        <a href="/design/open-space/">
          <div class="details">
            <h2>Open Space in Central Riga</h2>
            <span>2016</span>
          </div>
        </a>
      </div>
      <div class="preview large" style={{backgroundImage: "url(/projects/round-house/cover.jpg)"}}>
        <a href="/design/jauna-teika/">
          <div class="details">
            <h2>Round House Apartment</h2>
            <span>2012</span>
          </div>
        </a>
      </div>
    </main>
  );
}

export default Previews;
