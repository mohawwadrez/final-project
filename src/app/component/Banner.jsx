import React from "react"
import "../styles/banner.css"
const Banner = () => {

    return (
        <section className="banner">
            <div className="container h-100">
                <div className="row h-100 justify-content-end">
                    <div className="col-6 align-self-center">
                        <h4>
                            شرکت توانیر
                        </h4>
                        <p>
                            در صورت تمایل به ثبت درخواست جدید، به بخش ثبت درخواست و در صورت تمایل به پیگیری درخواست قبلی ، با در دست داشتن کد رهگیری درخواست خود، به بخش پیگیری درخواست مراجعه نمایید.
                        </p>
                        <div className="row p-2 px-5">
                            <button className="btn btn-outline-danger rounded-pill">
                                اعلام خسارت
                            </button>
                        </div>
                        <div className="row p-2 px-5">
                            <button className="btn btn-outline-danger rounded-pill">
                                پیگیری خسارت
                            </button>
                        </div>
                        <div className="row p-2 px-5">
                            <button className="btn btn-outline-danger rounded-pill">
                                راهنمای کاربر
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner