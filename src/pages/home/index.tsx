import Card from "../../components/card";
import Header from "../../components/header";
import Carrocel from "../../components/organ/carrocel";

export default function Home() {
    const products = ['https://santobelisco.com.br/wp-content/uploads/elementor/thumbs/banner1-qfs105zgfp0v524fquc9t0rywa2lymzuofdq4kth4w.png', 'https://www.receiteria.com.br/wp-content/uploads/recheios-de-pastel-0.jpg', 'https://www.receiteria.com.br/wp-content/uploads/recheios-de-pastel-1-730x449.jpg', 'https://blog.dipratos.com.br/wp-content/uploads/2022/06/pastel-de-camarao-com-queijo-scaled-e1654349909333-1024x576.jpeg']
    return (
        <>
            <Header />
            <Carrocel />

            <div id="accordion-nested-parent" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                        <span>Explore nossas categorias</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Explore nossas categorias e encontre exatamente o que você procura. Descubra uma ampla variedade de produtos/serviços organizados para facilitar sua experiência.</p>

                        <div id="accordion-nested-collapse" data-accordion="collapse">
                            <h2 id="accordion-nested-collapse-heading-1">
                                <button type="button" className="flex items-center justify-between w-full p-5 rounded-t-xl font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-1" aria-expanded="false" aria-controls="accordion-nested-collapse-body-1">
                                    <span>Massas</span>
                                </button>
                            </h2>

                            <h2 id="accordion-nested-collapse-heading-2">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-2" aria-expanded="false" aria-controls="accordion-nested-collapse-body-2">
                                    <span>Frituras</span>

                                </button>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            {products.map((item: string) => {
                return (
                    <div className="flex justify-center">
                        <Card img={item} price={20} Productname={'Nome do produto'} />
                    </div>

                )
            })}
        </>
    )
}