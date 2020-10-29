function Menu() {
  return (
    <div>
      <nav class="minimized">
        <div>
          <div class="logo">
            <div>Smart Casual</div>
            <img id="menu-open" src="/assets/icons/menu-open.svg" alt="Open main menu" />
          </div>
        </div>
      </nav>
      <nav class="maximized">
        <div>
          <div class="logo">
            <div>Smart Casual</div>
            <img id="menu-close" src="/assets/icons/menu-close.svg" alt="Close main menu" />
          </div>
          <ul class="main-menu">
            <li class="selected">Interior Design
              <ul class="submenu">
                <li class="selected">All</li>
                <li><a href="/residential/">Residential</a></li>
                <li><a href="/retail/">Retail</a></li>
              </ul>
            </li>
            <li><a href="/photography/">Interior Photo</a></li>
            <li><a href="/contacts/">Contacts</a></li>
          </ul>
          <ul class="language-menu">
            <li class="selected">EN</li>
            <li><a href="/lv/">LV</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
