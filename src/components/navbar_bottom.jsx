import { useNavigate, useLocation } from "react-router-dom";
import { projects } from "./projects";

function NavbarBottom() {
  const navigate = useNavigate();
  const location = useLocation();

  // hitta nuvarande projekt
  const currentIndex = projects.findIndex(
    (p) => p.link === location.pathname
  );

  // hitta nästa (loopa om man är på sista)
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="flex justify-between w-full mt-64 mb-16 text-xl font-bold">
      <p className="cursor-pointer" onClick={() => navigate("/")}>
        {"<"} home
      </p>

      {nextProject && (
        <p
          className="mr-24 cursor-pointer"
          onClick={() => navigate(nextProject.link)}
        >
          next project {">"}
        </p>
      )}
    </div>
  );
}

export default NavbarBottom;
