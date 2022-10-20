export default function DynamicStyling(){
    const error = true
    return (
        <div>
            <h1 style={{ color: error ? 'red' : 'green' }}>Dynamic Styling</h1>
        </div>
    )
}