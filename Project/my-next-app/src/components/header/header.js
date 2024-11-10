export default function Header(){
  return (
      <>
      <h1>INFT-3102 Assignment #2 Website</h1>
      <nav class="navbar">
          <ul class="menu">
            <li class="menu-item"><a href="#home">Home</a></li>
            <li class="menu-item"><a href="#about">About</a></li>
            <li class="menu-item"><a href="#services">Services</a></li>
            <li class="menu-item"><a href="#contact">Contact</a></li>
          </ul>
        <input type="text" class="search-box" placeholder="Search..."/>
        <button class="search-button">Go</button>
        </nav>
      </>
  )
}