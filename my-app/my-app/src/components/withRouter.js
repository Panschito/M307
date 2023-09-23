import { useLocation, useNavigate, useParams } from "react-router-dom";
//routin redirect nicht funktional weil nicht fertig
export default function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
