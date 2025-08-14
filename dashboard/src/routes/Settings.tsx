export default function Settings() {

    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'gray') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'gray';
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold m-2">Settings</h1>
            <button 
            type="button"
            onClick={handleClick}
            className='bg-blue-300 rounded-3xl p-4'>
                Toggle Light
            </button>
        </div>     
    );
}