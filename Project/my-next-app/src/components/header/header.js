export default function Header(){
  return (
      <>
      <h1>INFT-3102 Assignment #3 Website</h1>
      <nav class="navbar">
          <ul class="menu">
            <li class="menu-item"><a href="/">Home</a></li>
            <li class="menu-item"><a href="/products">Products</a></li>
            <li class="menu-item"><a href="/services">Services</a></li>
            <li class="menu-item"><a href="/locations">Locations</a></li>
          </ul>
        <input type="text" class="search-box" placeholder="Search..."/>
        <button class="search-button">Go</button>
        </nav>
      </>
  )
}