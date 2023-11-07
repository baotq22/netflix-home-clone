import tv from './assets/tv.png'

function DisplayContent() {
    return (
        <>
            <div id='content__details'>
                <h1>Enjoy on your TV</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                <img src={tv} alt='content 1' />
            </div>
        </>
    )
}

export default DisplayContent