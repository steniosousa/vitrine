import Card from "../../components/card";
import Header from "../../components/header";
import Carrocel from "../../components/organ/carrocel";

export default function Home() {
    const products = ['https://santobelisco.com.br/wp-content/uploads/elementor/thumbs/banner1-qfs105zgfp0v524fquc9t0rywa2lymzuofdq4kth4w.png', 'https://www.receiteria.com.br/wp-content/uploads/recheios-de-pastel-0.jpg', 'https://www.receiteria.com.br/wp-content/uploads/recheios-de-pastel-1-730x449.jpg', 'https://blog.dipratos.com.br/wp-content/uploads/2022/06/pastel-de-camarao-com-queijo-scaled-e1654349909333-1024x576.jpeg']
    return (
        <>
            <Header />
            <Carrocel />
            {products.map((item: string) => {
                return (
                    <div className="flex justify-center">
                        <Card img={item} price={20} Productname={'Nome do produto'}/>
                    </div>

                )
            })}
        </>
    )
}