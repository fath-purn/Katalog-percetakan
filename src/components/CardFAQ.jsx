import axios from 'axios';

import React from "react"
import dbFAQ from "../db/dbFAQ";

export default function CardFAQ(props){
    
    return (
        <div>
            {/* <!-- Container for demo purpose --> */}
            <div class="container my-24 mx-auto md:px-6 xl:px-24">
            {/* <!-- Section: Design Block --> */}
            <section class="mb-32" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h2 class="mb-6 pl-6 text-3xl font-bold">Frequently asked questions</h2>

                <div id="accordionFlushExample">
                    <div class="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
                        <h2 class="mb-0" id="flush-headingOne">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                            type="button" data-te-collapse-init data-te-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            {dbFAQ[0].FAQJudul}
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="!visible border-0" data-te-collapse-item data-te-collapse-show
                        aria-labelledby="flush-headingOne" data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                            {dbFAQ[0].FAQDeskripsi}
                        </div>
                        </div>
                    </div>
                    <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
                        <h2 class="mb-0" id="flush-headingTwo">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseTwo"
                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                {dbFAQ[1].FAQJudul}
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="!visible hidden border-0" data-te-collapse-item
                        aria-labelledby="flush-headingTwo" data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                            {dbFAQ[1].FAQDeskripsi}
                        </div>
                        </div>
                    </div>
                    <div class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                        <h2 class="mb-0" id="flush-headingThree">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseThree"
                            aria-expanded="false" aria-controls="flush-collapseThree">
                            {dbFAQ[2].FAQJudul}
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="!visible hidden rounded-b-lg" data-te-collapse-item
                        aria-labelledby="flush-headingThree" data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                            {dbFAQ[2].FAQDeskripsi}
                        </div>
                        </div>
                    </div>
                    <div class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                        <h2 class="mb-0" id="flush-headingFour">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseFour"
                            aria-expanded="false" aria-controls="flush-collapseFour">
                            {dbFAQ[3].FAQJudul}
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <div id="flush-collapseFour" class="!visible hidden rounded-b-lg" data-te-collapse-item
                        aria-labelledby="flush-headingFour" data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                            {dbFAQ[3].FAQDeskripsi}
                        </div>
                        </div>
                    </div>
                    <div class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                        <h2 class="mb-0" id="flush-headingFive">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseFive"
                            aria-expanded="false" aria-controls="flush-collapseFive">
                            {dbFAQ[4].FAQJudul}
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <div id="flush-collapseFive" class="!visible hidden rounded-b-lg" data-te-collapse-item
                        aria-labelledby="flush-headingFive" data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                            {dbFAQ[4].FAQDeskripsi}
                        </div>
                        </div>
                    </div>
                    <div class="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
                        <h2 class="mb-0" id="flush-headingSix">
                        <button
                            class="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400"
                            type="button" data-te-collapse-init data-te-collapse-collapsed data-te-target="#flush-collapseSix"
                            aria-expanded="false" aria-controls="flush-collapseSix">
                            {dbFAQ[5].FAQJudul}
                            <span
                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <div id="flush-collapseSix" class="!visible hidden rounded-b-lg" data-te-collapse-item
                        aria-labelledby="flush-headingSix" data-te-parent="#accordionFlushExample">
                        <div class="py-4 px-5 text-neutral-500 dark:text-neutral-300">
                            {dbFAQ[5].FAQDeskripsi}
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}
        </div>
    )
} 