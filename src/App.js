import './App.css';
import { useCookies } from 'react-cookie';

function App() {
    const [cookies, setCookie, removeCookie] = useCookies();

    if (cookies.count === "NaN") {
        setCookie("count", 0, { maxAge: 31536000 })
    }

    const incCount = () => {
        setCookie("count", parseInt(cookies.count) + 1, { maxAge: 31536000 })
        console.log(cookies.count)
    }

    const decCount = () => {
        setCookie("count", parseInt(cookies.count) - 1, { maxAge: 31536000 })
        console.log(cookies.count)
    }

    return (
        <div className="wrapper">
            <div className="text">
                <div className="static">The current count is:</div>
                <br />
                <div className="counter">{!cookies.count | cookies.count === "NaN" ? "0" : cookies.count}</div>
            </div>
            <div className="btnWrapper">
                <button className="btnAdd btn" onClick={incCount}>Increase</button>
                <button className="btnAdd btn" onClick={decCount}>Decrease</button>
                <button className="btnRmv btn" onClick={() => removeCookie("count")}>Clear</button>
            </div>
        </div>
    );
}

export default App;
