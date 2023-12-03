import { useContext } from "react";
import UserContext from "../config/QuoteProvider";

const Footer = () => {

    const { username } = useContext(UserContext);
    return (<footer>Footer comes here developed by {username} </footer>)
}

export default Footer;