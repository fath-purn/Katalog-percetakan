
export default function AdminInputImage(props) { 
    return (
        <div className="mb-5" data-te-input-wrapper-init>
            <input
                type="file"
                name="file"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} 
            />
        </div>
    )
 }