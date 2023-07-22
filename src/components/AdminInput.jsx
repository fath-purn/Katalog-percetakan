// import {Input, initTE} from "tw-elements";

export default function AdminInput(props) {
    // initTE({ Input });
    return (
        <div className="flex mb-5 " data-te-input-wrapper-init>
            <label
                className="peer block min-h-[auto] w-[20%] rounded border-0 bg-transparent px-3 py-[0.32rem]"
                >{props.label}
            </label>
            <input
                type="text"
                required
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} />
        </div>
    )
}