let broj = 5

const App = () => {
    const isparan =( broj % 2 === 0) ;
    return (
        <div>
            {isparan && <p>broj je paran</p>}
            {!isparan && <p>broj je neparan</p>}
        </div>
    );
};

export default App;
