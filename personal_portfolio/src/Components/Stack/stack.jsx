import "./styles.stack.css";

function Stack () {
    return (
        <section className="stack-container">
            <h2>My Stack</h2>
            <div className="stack-container__tech">
                <p>NodeJs</p>
                <p>Django</p>
                <p>MySql</p>
                <p>ReactJs</p>
            </div>
        </section>
    )
}

export { Stack };