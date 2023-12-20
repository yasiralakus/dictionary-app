export default function App() {


    return (
        <div className="app-container">

            <Header />

            <Main />

        </div>
    )
}

function Header() {

    return (
        <header className="header">

                <img src="./img/logo.svg" alt="" />

                <p>Sans Serif</p>

                <img src="./img/darkmode.png" alt="" />   

        </header>
    )
}
function Main() {

    return (
        <main className="main">


            <div className="search-box">

                <input type="text" />

                <img src="./img/search-icon.svg" alt="" />

            </div>

            <div className="word">

                <div className="word-left">
                    <h1>keyboard</h1>
                    <p>/ˈkiːbɔːd/</p>
                </div>

                <button><img src="./img/pink-btn.svg" alt="" /></button>

            </div>

            <div className="noun">

                <h3>noun</h3>
                <h6>Meaning</h6>

                <ul>
                    <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                    <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                    <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                </ul>

                <div className="noun-hash">

                    <p>Synonyms</p>

                    <h6>electronic keyboard</h6>

                </div>

            </div>

            <div className="verb">

                <h3>verb</h3>
                <h6>Meaning</h6>

                <ul>
                    <li>To type on a computer keyboard.</li>
                </ul>

                <div className="verb-hash">

                    <p>Source</p>

                    <a href="https://en.wiktionary.org/wiki/keyboard">https://en.wiktionary.org/wiki/keyboard</a>

                </div>

            </div>
        </main>
    )
}