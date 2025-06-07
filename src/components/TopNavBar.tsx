import "../styles/layout/_sideNav.scss";

const TopNavBar = () => {
  return (
    <header className="top-nav">
      <div className="logo">SmartLab</div>
      <div className="user-info">
        <span>Bonjour, Utilisateur</span>
        {/* Ajoute ici un bouton de déconnexion ou profil */}
      </div>
    </header>
  );
};

export default TopNavBar;
