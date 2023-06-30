
export default function AdminInputImage(props) { 
    return (
        <div className="relative mb-3" data-te-input-wrapper-init>
            <input
                type="file"
                name="file"
                className=""
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} 
            />
        </div>
    )
 }