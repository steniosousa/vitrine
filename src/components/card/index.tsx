import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";


export default function Card({ img, price, Productname }: { img: string, price: number, Productname: string }) {
    const [method, setMethod] = useState('')
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 align-center color-red-800" id="exampleModalLabel">Iniciar Pedido</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <select className="form-select" aria-label="Default select example" onChange={(item) => setMethod(item.target.value)}>
                                <option selected>Selecione o tipo de pedido</option>
                                <option value="ENTREGA">ENTREGA</option>
                                <option value="RETIRADA EM LOJA">RETIRADA EM LOJA</option>
                                <option value="PEDIDO EM LOJA">PEDIDO EM LOJA</option>
                            </select>
                            <div className="input-group mb-2 mt-2">
                                <span className="input-group-text" id="basic-addon1">Nome: </span>
                                <input type="text" className="form-control" placeholder="Completo" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-2 mt-2">
                                <span className="input-group-text" id="basic-addon1">Telefone: </span>
                                <input type="number" className="form-control" placeholder="(XX)XXXX-XXXX" aria-label="phone" aria-describedby="basic-addon1" />
                            </div>
                            {method === "PEDIDO EM LOJA" ? (
                                <div className="input-group mb-2 mt-2">
                                    <span className="input-group-text" id="basic-addon1">Mesa: </span>
                                    <input type="number" className="form-control" placeholder="XX" aria-label="mesa" aria-describedby="basic-addon1" />
                                </div>
                            ) : method === "ENTREGA" ? (
                                <div className="input-group mb-2 mt-2">
                                    <span className="input-group-text" id="basic-addon1">Endereço: </span>
                                    <input type="number" className="form-control" placeholder="RUA, N*, BAIRRO" aria-label="mesa" aria-describedby="basic-addon1" />
                                </div>
                            ) : null}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Continuar pedido </button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="w-4/4 max-w-sm bg-gray border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 align-center" >
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={img} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{Productname}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">R$ {price}</span>
                        <IoIosAddCircle size={35} color={"orange"} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                    </div>
                </div>
            </div>
        </>


    )
}