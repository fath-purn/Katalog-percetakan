import React, { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";
import Btn from "./Btn";

const CardProduk = (props) => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);
  return (
    <div className="flex-1 max-md:min-w-[100%] md:max-lg:min-w-[40%] lg:min-w-[30%] flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img
          className="rounded-t-lg h-auto min-w-[100%] "
          src={props.srcProduk}
          alt={props.alt}
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {props.namaProduk}
        </h5>
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Rp {props.harga},-
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {props.deskripsi}
        </p>
        <Btn keterangan={props.keterangan} href={props.href} />
      </div>
    </div>
  );
};

export default CardProduk;