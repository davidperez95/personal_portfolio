import "./styles.stack.css";

function Stack () {
    return (
        <section className="stack-container">
            <h2>My Stack</h2>
            <div className="stack-container__tech">
                <p className="stack-1">NodeJs</p>
                <p className="stack-2">Django</p>
                <p className="stack-3">MySql</p>
                <p className="stack-4">ReactJs</p>
            </div>
        </section>
    )
}

export { Stack };