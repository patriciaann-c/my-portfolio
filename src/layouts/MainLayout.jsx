import { Link } from "react-router";

function MainLayout() {
    return (
        <div className="container">
            <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-top">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                    </svg>
                    <span className="fs-4">Patricia Ann Comendador</span>
                </Link>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="#" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Hi, I am <span style={{ color: "blue" }}>Patricia Ann Comendador</span>. I build thoughtful digital experiences.</h1>
                    <p className="lead">I am a developer focused on building useful, accessible, and polished web projects.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">View Projects</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Get in Touch</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                </div>
            </div>
        </div>

    )
}

export default MainLayout




