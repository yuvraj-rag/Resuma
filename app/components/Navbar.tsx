import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";

const Navbar = () => {
  const { auth, isLoading } = usePuterStore();

  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>

      <div className="nav-actions">
        {!isLoading && auth.isAuthenticated && (
          <button
            type="button"
            className="secondary-button"
            onClick={auth.signOut}
          >
            Log out
          </button>
        )}

        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
