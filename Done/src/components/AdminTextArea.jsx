// import {Input, initTE} from "tw-elements";

export default function AdminTextArea(props) {
    // initTE({ Input });
    return (
        <div className="flex mb-5 " data-te-input-wrapper-init>
            <label
                className="peer block min-h-[auto] w-[20%] rounded border-0 bg-transparent px-3 py-[0.32rem]"
                >{props.label}
            </label>
            <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem]"
                id="exampleFormControlTextarea1"
                rows="3"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            >
            </textarea>
        </div>
    )
}