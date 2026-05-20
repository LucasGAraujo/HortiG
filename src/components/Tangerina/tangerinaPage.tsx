
import { useState } from 'react';
import './tangerinaPage.css';
const TangerinaPage = () => {
    const [loading, setLoading] = useState(false);

    const handleAddToCart =  () => {
        const interactionStart = performance.now();

        setLoading(true);
        console.log('Adicionando produto...');
        fakeAnalytics();
        const interactionEnd = performance.now();

        const inpTime = Math.round(
            interactionEnd - interactionStart
        );

        alert(
            `Produto adicionado ao carrinho.\n\nINP simulado: ${inpTime}ms`
        );
        setLoading(false);
    };

const fakeAnalytics = () => {
    setLoading(true);
    console.log('Analytics iniciado');
    const start = performance.now();
    while (performance.now() - start < 1000) {
    }
    console.log('Analytics finalizada');
};
    
    return (
        <main className="tangerina-page">
            <section className="hero">
                <div className="hero__content">
                    <span className="hero__badge">Fruta cítrica</span>

                    <h1 className="hero__title">
                        Tangerina
                    </h1>

                    <p className="hero__description">
                        Refrescante, doce e cheia de vitamina C. A tangerina é uma das frutas mais populares do Brasil.
                    </p>
                    <button className="hero__button" onClick={handleAddToCart} disabled={loading}>
                        Adicionar ao carrinho
                    </button>
                </div>

                <div className="hero__image">
                    <img
                        src="https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1200&auto=format&fit=crop"
                        alt="Tangerinas"
                    />
                </div>
            </section>

            <section className="benefits">
                <div className="benefit-card">
                    <h2>Vitamina C</h2>
                    <p>
                        Fortalece o sistema imunológico e ajuda na prevenção de doenças.
                    </p>
                </div>

                <div className="benefit-card">
                    <h2>Hidratação</h2>
                    <p>
                        Rica em água e perfeita para dias quentes.
                    </p>
                </div>

                <div className="benefit-card">
                    <h2>Sabor Natural</h2>
                    <p>
                        Equilíbrio perfeito entre doce e cítrico.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default TangerinaPage;